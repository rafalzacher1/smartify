from django.urls import path
from . import views

# URL Configuration.
urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.index, name='register'),
    path('login/', views.index, name='login'),
    path('dashboard/', views.index, name='register'),
    path('course/', views.index, name='register'),
    path('course/lesson/', views.index, name='register'),
    path('course/lesson/test', views.index, name='register')
]
