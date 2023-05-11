from django.shortcuts import render

from .forms import ContactUs
from .models import Contact

# Create your views here.


def contact_tab(request):
    if request.method == 'POST':
        fm = ContactUs(request.POST)
        if fm.is_valid():
            nm = fm.cleaned_data['name']
            em = fm.cleaned_data['email']
            ph = fm.cleaned_data['phono']
            cm = fm.cleaned_data['comment']
            reg = Contact(name=nm, email=em, phono=ph, comment=cm)
            reg.save()
            fm = ContactUs()
    else:
        fm = ContactUs()
    return render(request, 'contact/contact.html', {'form': fm})
