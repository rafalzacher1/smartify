from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
# require -> response
# Request handler (view).

def say_hello(request):
    x = 1
    return render(request, 'hello.html', {'name' : 'mosh'})