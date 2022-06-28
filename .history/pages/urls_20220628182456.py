from django.urls import path
from . import views

# URL Configuration.
urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('course/', views.course, name='course'),
    path('course/lesson/', views.index, name='lesson'),
    path('course/lesson/test', views.index, name='test')
]
