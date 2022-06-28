from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
# require -> response
# Request handler (view).

def index(request):
    return render(request, 'hello.html', {'name' : 'index'})

def register(request):
    return render(request, 'hello.html', {'name' : 'register'}) 

def login(request)









