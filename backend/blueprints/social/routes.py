from .import bp as social
from flask import render_template, request, redirect, url_for, flash
from flask_login import login_required, current_user
from app.models import Post, User

@social.route('/index', methods = ['GET', 'POST'])
@login_required
def index():
    if request.method == 'POST':
        body = request.form.get('body')
        new_post = Post(body=body, user_id=current_user.id)
        new_post.save()
        return redirect(url_for('social.index'))
    posts = current_user.posts()
    return render_template('indexhtml.j2', posts=posts)