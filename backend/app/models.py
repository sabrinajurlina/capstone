from app import db, login
from flask_login import UserMixin
from datetime import datetime as dt, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
import secrets

# followers = db.Table('followers',
#     db.Column('follower_id', db.Integer, db.ForeignKey('user.id')),
#     db.Column('followed_id', db.Integer, db.ForeignKey('user.id')),    
# )

class Job(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    body = db.Column(db.Text)
    location = db.Column(db.String)
    job_date = db.Column(db.Date) ## check if this needs to be a String instead?
    duration = db.Column(db.String) ## min hours or set hours? 
    rate = db.Column(db.Integer) ## hourly or day rate?
    travel_budget = db.Column(db.Integer)
    date_created = db.Column(db.DateTime, default = dt.utcnow)
    date_updated = db.Column(db.DateTime, onupdate = dt.utcnow)
    client_id = db.Column(db.Integer, db.ForeignKey('client.id'))

    def __repr__(self):
        return f'<Job: {self.id} | {self.body[:30]}>'

    def edit(self, new_body, new_location, new_job_date, new_duration, new_rate):
        self.body = new_body
        self.location = new_location
        self.job_date = new_job_date
        self.duration = new_duration
        self.rate = new_rate

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    def to_dict(self):
        return {
            'id':self.id,
            'body':self.body,
            'location':self.location,
            'duration':self.duration,
            'rate':self.rate,
            'date_created':self.date_created,
            'date_updated':self.date_updated,
            'user_id':self.user_id,
            'client':self.client.first_name +' '+ self.client.last_name
        }

class Client(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    client_name = db.Column(db.String)
    email = db.Column(db.String)
    password = db.Column(db.String)
    created_on = db.Column(db.DateTime, default = dt.utcnow)
    logo = db.Column(db.String)
    token = db.Column(db.String, index=True, unique=True)
    token_exp = db.Column(db.DateTime)
    posts = db.relationship('Post', backref='author', lazy="dynamic")


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    email = db.Column(db.String, unique = True, index = True)
    password = db.Column(db.String)
    created_on = db.Column(db.DateTime, default = dt.utcnow)
    img = db.Column(db.String)
    portfolio = db.Column(db.String) #should this just be one image, and then only 
    is_admin = db.Column(db.Boolean, default = False)
    token = db.Column(db.String, index=True, unique=True)
    token_exp = db.Column(db.DateTime)
    jobs = db.Column(db.Integer, default =0)
    income = db.Column(db.Integer, default =0)
    clients = db.relationship('Client',
                    secondary = 'client_user',
                    backref = 'users',
                    lazy='dynamic'
                    )

##### TOKEN AUTH METHODS #####

    def get_token(self, exp=86400):
        current_time = dt.utcnow()
        if self.token and self.token_exp > current_time + timedelta(seconds=60):
            return self.token
        self.token = secrets.token_urlsafe(32)
        self.token_exp = current_time + timedelta(seconds = exp)
        self.save()
        return self.token

    def revoke_token(self):
        self.token_exp = dt.utcnow() - timedelta(seconds=61)
    
    @staticmethod
    def check_token(token):
        u = User.query.filter_by(token=token).first()
        if not u or u.token_exp < dt.utcnow():
            return None
        return u
    
##### END TOKEN AUTH METHODS #####

    def __repr__(self):
        return f'<User: {self.email} | {self.id}>'

    def __str__(self):
        return f'<User: {self.email} | {self.first_name} {self.last_name}>'

    def hash_password(self, original_password):
        return generate_password_hash(original_password)

    def check_hash(self, login_password):
        return check_password_hash(self.password, login_password)

    def from_dict(self, data):
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = self.hash_password(data['password'])
        self.img = data['img']
        
    def save(self):
        db.session.add(self)
        db.session.commit()

    def to_dict(self):
        return {
            'id':self.id,
            'first_name':self.first_name,
            'last_name':self.last_name,
            'email':self.email,
            'created-on':self.created_on,
            'img':self.img,
            'is_admin':self.is_admin,
            'token':self.token,
        }

    def is_following(self, user_to_check):
        return self.followed.filter(followers.c.followed_id == user_to_check.id).count()>0

    def follow(self, user):
        if not self.is_following(user):
            self.followed.append(user)
            db.session.commit()
    
    def unfollow(self, user):
        if self.is_following(user):
            self.followed.remove(user)
            db.session.commit()

    def show_posts(self):
        self_posts = Post.query.filter_by(user_id = self.id).all()
        return self_posts

@login.user_loader
def load_user(id):
    return User.query.get(int(id))
