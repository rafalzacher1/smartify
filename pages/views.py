from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from database.models import Members


# Create your views here.
# require -> response
# Request handler (view).

def index(request):
    return render(request, 'home.html', {'name': 'index'})


def register(request):
    return render(request, 'hello.html', {'name': 'register'})


def login(request):
    if request.method != "POST":
        return render(request, "home.html", {"username": "", "password": ""})

    username = request.POST.get("username", "")
    password = request.POST.get("password", "")

    check_login = "SELECT member_id, forename, surname FROM members WHERE username = '"+username+"' AND password = '"+password+"'"

    rows = list(Members.objects.raw(check_login))
    if not rows:
        return render(
            request,
            "home.html",
            {
                "username": username,
                "password": "",
                "error": "Invalid username or password. Demo login: test / test",
            },
        )

    info = rows[0]
    return render(request, "hello.html", {"name": f" {info.forename} {info.surname}"})


def dashboard(request):
    return render(request, 'hello.html', {'name': 'dashboard'})


def course(request):
    return render(request, 'hello.html', {'name': 'course'})


def lesson(request):
    return render(request, 'hello.html', {'name': 'lesson'})


def test(request):
    return render(request, 'hello.html', {'name': 'test'})
