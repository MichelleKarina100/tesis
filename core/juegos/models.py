import os
from datetime import *

from crum import get_current_request
from django.contrib.auth.models import Group
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import models
from django.forms.models import model_to_dict

from config import settings
from core.security.choices import *
from core.user.models import User
# Create your models here.
class Juegos(models.Model):
    url = models.CharField(max_length=100, verbose_name='Url', unique=True)
    name = models.CharField(max_length=100, verbose_name='Nombre')
    description = models.CharField(max_length=200, null=True, blank=True, verbose_name='Descripción')
    state = models.BooleanField(default=True, verbose_name='Estado')
    image = models.ImageField(upload_to='games/%Y/%m/%d', verbose_name='Imagen', null=True, blank=True)

    def __str__(self):
        return '{}'.format(self.name)

    def toJSON(self):
        item = model_to_dict(self)
        return item

    class Meta:
        verbose_name = 'Juego'
        verbose_name_plural = 'Juegos'
        ordering = ['-name']

