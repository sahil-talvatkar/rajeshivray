from django.urls import path
from.import views

urlpatterns = [
    path('contact_tab/',views.contact_tab, name="contact_tab")
]
