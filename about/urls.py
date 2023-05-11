from django.urls import path
from . import views
urlpatterns = [
    path('about_tab', views.about_tab,name='about_tab')
]
