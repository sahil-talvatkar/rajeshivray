from django.db import models

# Create your models here.


class Contact(models.Model):
    name = models.CharField(max_length=70)
    email = models.EmailField(max_length=100)
    phono = models.IntegerField()
    comment = models.CharField(max_length=200)
