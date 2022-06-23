from flask import Flask, request, make_response, g, abort
from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth
from flask_cors import CORS
from .import bp as api
from app import db
from ...models import User, Job
from functools import wraps
from flask_login import current_user, login_user, login_required, logout_user

basic_auth = HTTPBasicAuth()
token_auth = HTTPTokenAuth()

##    Responses:
##    200 : Everything went well
##    401 : Invalid Token, or invalid Username/Password,
##    403 : User not authorized for action
##    404 : Resource not found
##    500 : Server Side Error

@basic_auth.verify_password
def verify_password(email, password):
    u = User.query.filter_by(email=email.lower()).first()
    if u is None:
        return False
    g.current_user = u
    return u.check_hash(password)

@token_auth.verify_token
def verify_token(token):
    u = User.check_token(token) if token else None
    g.current_user = u
    return g.current_user or None

### API USER CALLS ###
######################

@api.get('/login')
@basic_auth.login_required()
def login():
    g.current_user.get_token()
    # return make_response(f'Token: {token}', 200)
    # return jsonify((g.current_user), 200)
    # return make_response(f'Role: {role} | Token: {token}', 200)
    return make_response(g.current_user.to_dict(), 200)

@api.post('/user')
def post_user():
    print('TEST')
    data = request.get_json()
    if User.query.filter_by(email=data.get('email')).first():
        abort(422)
    new_user = User()
    new_user.from_dict(data)
    new_user.save()
    return make_response('success', 200)

@api.put('/user')
@token_auth.login_required()
def put_user():
    data = request.get_json()
    g.current_user.from_dict(data)
    g.current_user.save()
    # db.session.commit()
    return make_response('success', 200)

@api.delete('/user')
@token_auth.login_required()
def delete_user():
    g.current_user.delete()
    return make_response('success', 200)

@api.get('/clients')
@token_auth.login_required()
def show_clients():
    g.current_user.show_clients()
    return make_response('success', 200)

@api.get('/models')
@token_auth.login_required()
def show_models():
    return g.current_user.show_models()

### API JOB CALLS ###
#####################

@api.post('/job')
@token_auth.login_required
# @roles_required('client')
def post_job():
    if not g.current_user.role.lower() == 'client':
        return make_response('error', 403)
    else:
        data = request.get_json()
        new_job = Job()
        new_job.from_dict(data)
        new_job.save()
        return make_response('success', 200)
        

@api.put('/job/<int:id>')
@token_auth.login_required()
def put_job(id):
    if not g.current_user.role.lower() == 'client':
        return make_response('error', 403)
    else:
        data = request.get_json()
        job = Job.query.filter_by(id=id).first()
        if not job:
            abort(404)
        if not job.poster.id == g.current_user.id:
            abort(403)
        job.edit(data)
        job.save()
        return make_response(f'Job ID: {job.id} has been edited successfully', 200)

@api.delete('/job/<int:id>')
@token_auth.login_required()
def del_job(id):
    if not g.current_user.role.lower() == 'client':
        return make_response('error', 403)
    else:
        job = Job.query.filter_by(id=id).first()
        if not job:
            abort(404)
        elif not job.poster.id == g.current_user.id:
            abort(403)
        else:
            job.delete()
            return make_response(f'Job posting with ID of {id} has been deleted', 200)
    
@api.get('/job')
# @token_auth.login_required()
def get_jobs():
    # if not g.current_user.role.lower() == 'model':
    #     return make_response('error', 403)
    # else:
    return make_response({"jobs":[job.to_dict() for job in Job.query.all()]}, 200)

@api.get('/job/<int:id>')
@token_auth.login_required()
def get_job(id):
    if not g.current_user.role.lower() == 'model':
        return make_response('error', 403)
    else:
        return make_response(Job.query.filter_by(id=id).first().to_dict(), 200)