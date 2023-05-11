from django.contrib import admin
from . models import Contact
# Register your models here.
@admin.register(Contact)
class Admin(admin.ModelAdmin):
    list_display = ['name','email','phono','comment']
