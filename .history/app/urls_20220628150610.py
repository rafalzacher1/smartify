from django.urls import path
from . import view

# URL
urlpatterns = [
    path('app/hello', view.say_hello)
]