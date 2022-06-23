from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_moment import Moment
from flask_cors import CORS
import os

if os.environ.get('FLASK_ENV') == 'development':
    cors = CORS()

login = LoginManager()
db = SQLAlchemy()
migrate = Migrate()
moment = Moment()

def create_app(config_class=Config):

    app = Flask(__name__)
    app.config.from_object(config_class)

    login.init_app(app)
    db.init_app(app)
    migrate.init_app(app, db, render_as_batch=True)
    moment.init_app(app)
    if os.environ.get('FLASK_ENV') == 'development':
        cors.init_app(app)

    login.login_view = 'api.login'
    login.login_message = 'You must log in to navigate this page.'
    login.login_message_category = 'warning'

    # @app.route('/')
    # def serve():
    #     return send_from_directory(app.static_folder, 'index.html')

    # @app.post('/test')
    # def test():
    #     print(request.get_json())
    #     return 'THIS IS MY TEST RETURN'
    
    # @app.errorhandler(404)
    # def not_found(e):
    #     return app.send_static_file('index.html')

    from .blueprints.api import bp as api_bp
    app.register_blueprint(api_bp)

    # from .blueprints.social import bp as social_bp
    # app.register_blueprint(social_bp)

    return app