from app import db, login
from flask_login import UserMixin
from datetime import datetime as dt, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
import secrets

##### joins #####
#######################
# class JobPoster(db.Model):
#     job_id = db.Column(db.Integer, db.ForeignKey('job.id'), primary_key = True)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key = True)

class UserJobs(db.Model):
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    job_id = db.Column(db.Integer, db.ForeignKey('job.id'), primary_key=True)
###########################
##### end joins #####

class Job(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    body = db.Column(db.Text)
    location = db.Column(db.String)
    job_date = db.Column(db.String)
    duration = db.Column(db.String) ## min hours or set hours? 
    rate = db.Column(db.Integer)
    rate_type = db.Column(db.String)  ## hourly or day rate?
    travel_budget = db.Column(db.Integer)
    created_on = db.Column(db.DateTime, default = dt.utcnow)
    updated_on = db.Column(db.DateTime, onupdate = dt.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return f'<Job: {self.id} | {self.body[:30]}>'

    def edit(self, new_body, new_location, new_job_date, new_duration, new_rate, new_rate_type, new_travel_budget):
        self.body = new_body
        self.location = new_location
        self.job_date = new_job_date
        self.duration = new_duration
        self.rate = new_rate
        self.rate_type = new_rate_type
        self.travel_budget = new_travel_budget

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    # def confirm(self):
    #     add logic to remove job from postings when a model accepts
    
    def from_dict(self, data):
         for field in ["body","location", "duration","rate", "rate_type", "travel_budget", "created_on", "updated_on", "user_id"]:
            if field in data:
                setattr(self, field, data[field])

    def to_dict(self):
        return {
            'id':self.id,
            # 'poster':self.poster.client_name,
            'body':self.body,
            'job_date':self.job_date,
            'location':self.location,
            'duration':self.duration,
            'rate':self.rate,
            "rate_type":self.rate_type,
            'travel_budget':self.travel_budget,
            'created_on':self.created_on,
            'updated_on':self.updated_on,
            'user_id':self.user_id  
        }
        
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    role = db.Column(db.String)
    is_admin = db.Column(db.Boolean, default = False)
    email = db.Column(db.String, unique = True, index = True)
    password = db.Column(db.String)
    created_on = db.Column(db.DateTime, default = dt.utcnow)
    img = db.Column(db.String)
    token = db.Column(db.String, index=True, unique=True)
    token_exp = db.Column(db.DateTime)
    location = db.Column(db.String)
    #client only info
    client_name = db.Column(db.String)
    description = db.Column(db.String)
    website = db.Column(db.String)
    job_posts = db.relationship('Job',
                    # secondary='job_poster',
                    backref='poster',
                    lazy="dynamic")
    #model only info
    portfolio = db.Column(db.String) #need to figure this out still...
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    eyes = db.Column(db.String)
    hair = db.Column(db.String)
    height = db.Column(db.String)
    bust = db.Column(db.String)
    hips = db.Column(db.Float)
    waist = db.Column(db.Float)
    yrs_experience = db.Column(db.Integer)
    skills = db.Column(db.String)
    shoe = db.Column(db.Float)
    pronouns = db.Column(db.String)
    race = db.Column(db.String)
    jobs = db.Column(db.Integer, default =0)
    income = db.Column(db.Integer, default =0)
    schedule = db.relationship(Job,
                    secondary = 'user_jobs',
                    backref = 'models',
                    lazy='dynamic')

    # not sure how to create this relationship with only one user class?                
    # clients = db.relationship(Client,
    #                 secondary = 'user_clients',
    #                 backref = 'users',
    #                 lazy='dynamic'
    #                 )


##############################
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
        
##################################    
##### END TOKEN AUTH METHODS #####

    def __repr__(self):
        return f'<User: {self.email} | {self.id}>'

    def __str__(self):
        if self.role.lower() == 'model':
            return f'<User: {self.email} | {self.first_name} {self.last_name}>'
        else:
            return f'<User: {self.email} | {self.client_name}>'

    def hash_password(self, original_password):
        return generate_password_hash(original_password)

    def check_hash(self, login_password):
        return check_password_hash(self.password, login_password)

    def from_dict(self, data):
         for field in ["role", "first_name","last_name", "client_name", "email","password",
                        "hair", "eyes", "height", "waist", "bust", "hips", "pronouns", "location",
                        "race", "shoe", "created_on", "website", "yrs_experience", "skills", "img", "portfolio", "is_admin",
                        "token", "token_exp", "job_posts", "description", "jobs", "income", "schedule"]:
            if field == "password":
                setattr(self,field, self.hash_password(data[field]))
            elif field in data:
                setattr(self,field, data[field])
        
    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def to_dict(self):
        return {
            'id':self.id,
            'role':self.role,
            'first_name':self.first_name,
            'last_name':self.last_name,
            'client_name': self.client_name,
            'website':self.website,
            'email':self.email,
            'created-on':self.created_on,
            'img':self.img,
            'portfolio':self.portfolio,
            'hair':self.hair,
            'eyes':self.eyes,
            'height':self.height,
            'shoe':self.shoe,
            'waist':self.waist,
            'hips':self.hips,
            'location':self.location,
            'bust':self.bust,
            'yrs_experience':self.yrs_experience,
            'skills':self.skills,
            'pronouns':self.pronouns,
            'race':self.race,
            'description':self.description,
            'is_admin':self.is_admin,
            'token':self.token,
            'token_exp':self.token_exp,
            'job_posts':[job.to_dict() for job in self.job_posts],
            'jobs': self.jobs,
            'schedule':[job.to_dict() for job in self.schedule]
        }


    def show_job_posts(self):
        if self.role.lower() == 'client':
            return self.job_posts

    def show_portfolio(self):
        if self.role.lower() == 'model':
            return self.portfolio

    # def past_clients(self):
    #     return self.clients

    def check_schedule(self, job_to_check):
        if self.role.lower() == 'model':
            if self.schedule.count()>0:
            #should this check the job id or the schedule date? ideally when a job is taken,
            # we remove it from postings so it doesn't show up if it's already in someone's schedule
                return self.schedule.filter(Job.id == job_to_check.id).first()

    def add_to_schedule(self, job):
        if self.role.lower() == 'model':
            if not self.check_schedule(job): #and schedule is open that day:
                self.schedule.append(job)
                db.session.commit()

    def cancel_job(self, job):
        if self.role.lower() == 'model':
            if self.check_schedule(job):
                self.schedule.delete(job)
                db.session.commit()

    def show_schedule(self):
        if self.role.lower() == 'model':
            return self.schedule

    def show_income(self):
        if self.role.lower() == 'model':
            return self.income

    def job_count(self):
        if self.role.lower() == 'model':
            for job in self.schedule:
                self.jobs += 1
            return self.jobs

    def show_clients(self):
        clients = User.query.filter(User.role == 'client').all()
        return clients
    
    def show_models(self):
        models = User.query.filter(User.role == 'model').all()
        return models

@login.user_loader
def load_user(id):
    return User.query.get(int(id))







# ADDITIONAL JOIN TABLE INFO
# class UserClients(db.Model):
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key = True)
#     client_id = db.Column(db.Integer, db.ForeignKey('client.id'), primary_key = True)

# class ClientUsers(db.Model):

#ADDITIONAL USER CLASS
# class Client(UserMixin, db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     client_name = db.Column(db.String)
#     email = db.Column(db.String)
#     password = db.Column(db.String)
#     created_on = db.Column(db.DateTime, default = dt.utcnow)
#     logo = db.Column(db.String)
#     token = db.Column(db.String, index=True, unique=True)
#     token_exp = db.Column(db.DateTime)
#     jobs = db.relationship('Job', backref='poster', lazy="dynamic")

# ##### CLIENT TOKEN AUTH METHODS #####

#     def get_token(self, exp=86400):
#         current_time = dt.utcnow()
#         if self.token and self.token_exp > current_time + timedelta(seconds=60):
#             return self.token
#         self.token = secrets.token_urlsafe(32)
#         self.token_exp = current_time + timedelta(seconds = exp)
#         self.save()
#         return self.token

#     def revoke_token(self):
#         self.token_exp = dt.utcnow() - timedelta(seconds=61)
    
#     @staticmethod
#     def check_token(token):
#         c = Client.query.filter_by(token=token).first()
#         if not c or c.token_exp < dt.utcnow():
#             return None
#         return c

# ##### END CLIENT TOKEN AUTH METHODS #####

#     def __repr__(self):
#         return f'<Client: {self.email} | {self.client_name}>'

#     def __str__(self):
#         return f'<Client: {self.email} | {self.client_name}>'

#     def hash_password(self, original_password):
#         return generate_password_hash(original_password)

#     def check_hash(self, login_password):
#         return check_password_hash(self.password, login_password)

#     def from_dict(self,data):
#          for field in ["client_name","email", "password","created_on", "logo", "token", "token_exp", "jobs"]:
#             if field in data:
#                 setattr(self,field, data[field])

#     def save(self):
#         db.session.add(self)
#         db.session.commit()

#     def to_dict(self):
#         return{
#             'id': self.id,
#             'client_name': self.client_name,
#             'email': self.email,
#             'password': self.password,
#             'created_on': self.created_on,
#             'logo': self.logo,
#             'jobs': self.jobs,
#             'token': self.token
#         }

# @login.user_loader
# def load_client(id):
#     return Client.query.get(int(id))