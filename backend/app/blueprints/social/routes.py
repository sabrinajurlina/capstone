# from .import bp as social
# from flask import render_template, request, redirect, url_for, flash
# from flask_login import login_required, current_user
# from app.models import Job, User, Client


# @social.route('/show_schedule')
# @login_required
# def show_schedule():
#     schedule = current_user.show_schedule()
#     return render_template('show_schedule.html.j2', schedule=schedule)
#     #not sure what to return since front end will render the visual

# @social.route('/show_income')
# @login_required
# def show_income():
#     income = current_user.show_income()
#     return render_template('show_income.html.j2', income=income)
#     #not sure what to return since front end will render the visual

# @social.route('/take_job/<int:id>')
# @login_required
# def take_job(id):
#     job = Job.query.filter_by(id = id).first()
#     #if current_user.schedule. is open on this day
#     current_user.take_job(job)
#     flash(f'Congrats! You have accepted the job with {job.poster.name.title()}')
#     return redirect(url_for('social.show_schedule'))
#     #might need to change this redirect URL later

# @social.route('cancel_job/<int:id>')
# @login_required
# def cancel_job(id):
#     job = Job.query.filter_by(id = id).first()
#     current_user.cancel_job(job)
#     flash(f'Your booking with {job.poster.name.title()} on {job.job_date} has been removed from your schedule', 'warning')
#     return redirect(url_for('social.show_schedule'))

# @social.route('/show_jobs')
# @login_required
# def show_jobs():
#     jobs = current_user.get_jobs()
#     return render_template('show_jobs.html.j2', jobs = jobs)
#     #not sure what to return since front end will render the visual

# @social.get('/all_jobs')
# @login_required
# def get_jobs():
#     return make_response({"jobs":[job.to_dict() for job in Job.query.all()]}, 200)


