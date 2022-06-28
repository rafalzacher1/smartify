from django.urls import path
from . import view


urlpatterns = [
    path('app/hello', view.say_hello)
]