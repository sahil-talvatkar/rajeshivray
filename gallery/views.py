from django.shortcuts import render

# Create your views here.
def gallary_tab(request):
    return render(request,'gallery/gallery.html')