from django.urls import path
from . import view

# URL Configuration
urlpatterns = [
    path('app/hello', view.say_hello)
]