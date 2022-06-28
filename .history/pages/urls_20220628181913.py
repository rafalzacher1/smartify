from django.urls import path
from . import views

# URL Configuration.
urlpatterns = [
    path('', views.index, name='index'),
    path('register/'),
    path('login/'),
    path('dashboard/'),
    path('course/'),
    path('course/lesson/'),
    path('course/lesson/test')
]
