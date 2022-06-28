from django.urls import path
from . import view

# URL Conf
urlpatterns = [
    path('app/hello', view.say_hello)
]