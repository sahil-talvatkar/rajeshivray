from django.urls import path
from .import views

urlpatterns = [
    path('', views.home_tab, name='home_tab')
]
