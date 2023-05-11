from django.shortcuts import render

# Create your views here.


def menu_tab(request):
    return render(request, 'menu/main-menu.html')
