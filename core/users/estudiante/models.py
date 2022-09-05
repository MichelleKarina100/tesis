from django.db import models
from core.user.models import User
from django.forms import model_to_dict

from crum import get_current_request

from config.settings import MEDIA_URL, STATIC_URL
from core.cursos.models import *
from core.users.representate.models import *
# Create your models here.
class Estudiantes(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name='user')
    representante = models.ForeignKey(Representante, on_delete=models.CASCADE, blank=True, null=True, default='',related_name='representante')
    

    def __str__(self):
        return self.user.get_full_name()  
    
    def toJSON(self):
        item = model_to_dict(self, exclude=['user'])
        item['user'] = self.user.toJSON()
        #item['representante'] = self.representante.toJSON()
        return item
    

    class Meta:
        verbose_name = 'Estudiante'
        verbose_name_plural = 'Estudiantes'
        ordering = ['id']

from django.db import models

class libro(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, blank=False, null=False)
    last_name = models.CharField(max_length=220, blank=False, null=False)
    nationality = models.CharField(max_length=100, blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    state = models.BooleanField(default=True)
    date_created = models.DateField(auto_now=True, auto_now_add=False)