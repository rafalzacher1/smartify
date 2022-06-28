from django.urls import path
from . import views

# URL Configuration.
urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.register, name='register'),
    
]
