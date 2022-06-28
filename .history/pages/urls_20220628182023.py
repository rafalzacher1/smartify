from django.urls import path
from . import views

# URL Configuration.
urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.index, name='register'),
    path('login/', views.index, name='login'),
    path('dashboard/', views.index, name='dashboard'),
    path('course/', views.index, name='course'),
    path('course/lesson/', views.index, name='lesson'),
    path('course/lesson/test', views.index, name='register')
]
