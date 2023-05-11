from django.urls import path
from . import views
urlpatterns = [
    path('gallery_tab/',views.gallary_tab,name='gallery_tab'),
]
