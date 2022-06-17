from flask import Blueprint

bp = Blueprint('social', __name__, url_previx='')

from .import routes