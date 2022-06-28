from django.urls import path
from . import view

# URL Configuration.
urlpatterns = [
    path('hello', view.say_hello)
]