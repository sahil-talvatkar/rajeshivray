from django.urls import path
from . import views
urlpatterns = [
    path('menu_tab/',views.menu_tab,name='menu_tab')
]
