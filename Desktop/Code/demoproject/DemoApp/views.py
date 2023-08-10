from django.shortcuts import render
from .models import Caps
# Create your views here.


def home(request):
    info=Caps.objects.all()
    info_dict = {'info': info}
    return render(request, 'home.html', info_dict)
