import os

from django.db import models
from django.forms import model_to_dict

from datetime import datetime
from config import settings
from core.juegos.models import *
from core.cursos.models import *
from core.users.estudiante.models import *
from core.deberes.choices import *
from core.matricula.models import *

class CrearTarea(models.Model):
    name = models.CharField(max_length=5000, null=True,blank=True,verbose_name='Nombre', default='')
    curso = models.ForeignKey(Cursos, on_delete=models.CASCADE, blank=True, null=True, default='', verbose_name='Curso')    
    juego = models.ForeignKey(Juegos, on_delete=models.CASCADE, blank=True, null=True, default='', verbose_name='Juego')
    silabo = models.ForeignKey(Silabo, on_delete=models.CASCADE, blank=True, null=True, default='', verbose_name='Silabo')
    descripcion = models.CharField(max_length=5000, null=True, blank=True, verbose_name='Descripción')
    status = models.BooleanField(default=True, verbose_name='')
    creada_en = models.DateTimeField(default=datetime.now, verbose_name='Inicio')

    def __str__(self):
        return self.name

    def creada_en_format(self):
        return self.creada_en.strftime('%Y-%m-%d %H:%M:%S')

    def toJSON(self):
        item = model_to_dict(self)
        item['creada_en'] = self.creada_en.strftime('%Y-%m-%d %H:%M:%S')
        return item

    class Meta:
        verbose_name = 'Curso | Crear Deberes'
        verbose_name_plural = 'Cursos | Crear Deberes'
        ordering = ['-id']


class EntregarTarea(models.Model):
    tarea = models.ForeignKey(CrearTarea, on_delete=models.CASCADE, blank=True, null=True, default='', verbose_name='Tarea')
    nota = models.CharField(max_length=500, null=True, blank=True,choices=nota_choices, default=nota_choices[0][0])
    estudiante = models.ForeignKey(Estudiantes, on_delete=models.CASCADE, blank=True, null=True, default='', verbose_name='Estudiante')
    creada_en = models.DateTimeField(default=datetime.now, verbose_name='Inicio')
    archivo = models.FileField(upload_to='tareaEntregar/tarea', blank=False, null=False)
    status = models.BooleanField(default=True, verbose_name='')
    
    def creada_en_format(self):
        return self.creada_en.strftime('%Y-%m-%d %H:%M:%S')
    
    def __str__(self):
        return self.tarea.id

    def toJSON(self):
        item = model_to_dict(self)
        return item

    class Meta:
        verbose_name = 'Curso | Entregar Deberes'
        verbose_name_plural = 'Cursos | Entregar Deberes'
        ordering = ['-id']

