import os

from django.db import models
from django.forms import model_to_dict

from datetime import datetime

from config import settings
from core.deberes.choices import *

from core.user.models import *
from core.cursos.models import *
from core.users.estudiante.models import *
from core.juegos.models import *

class Matricula(models.Model):
    profesor = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True, default='',related_name='profesor')    
    estudiante = models.ForeignKey(Estudiantes, on_delete=models.CASCADE, blank=True, null=True, default='',related_name='estudiante')
    curso = models.ForeignKey(Cursos, on_delete=models.CASCADE, blank=True, null=True, default='')
    observacion = models.CharField(max_length=2500, verbose_name='Observación', blank=True, null=True)
    deletes = models.BooleanField(default=False, verbose_name='')


    def __str__(self):
        return self.nivel

    def toJSON(self):
        item = model_to_dict(self)
        return item

    class Meta:
        verbose_name = 'Matricula | Estudiante'
        verbose_name_plural = 'Matriculas | Estudiantes'
        ordering = ['-id']


class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True, default='',related_name='Usuario')    
    publicacion = models.CharField(max_length=2500, verbose_name='Publicación', blank=True, null=True)
    creada_en = models.DateTimeField(auto_now=True, null=True, blank=True)
    deletes = models.BooleanField(default=False, verbose_name='')
    curso = models.ForeignKey(Cursos, on_delete=models.CASCADE, blank=True, null=True, default='',related_name='Curso')    
    

    def __str__(self):
        return self.publicacion

    def toJSON(self):
        item = model_to_dict(self)
        return item

    class Meta:
        verbose_name = 'Post | Publicación'
        verbose_name_plural = 'Post | Publicación'
        ordering = ['-id']

class ListaEstudiantes(models.Model):
    asistencia = models.BooleanField(default=True, verbose_name='asistencia')
    deletes = models.BooleanField(default=False, verbose_name='deletes')
    estudiant = models.ForeignKey(Estudiantes, on_delete=models.CASCADE, blank=True, null=True, default='')    
    curso = models.ForeignKey(Cursos, on_delete=models.CASCADE, blank=True, null=True, default='')    
    creada_en = models.DateTimeField(auto_now=True, null=True, blank=True)
    

    def __str__(self):
        return self.estudiantes.id

    def toJSON(self):
        item = model_to_dict(self)
        return item

    class Meta:
        verbose_name = 'Estudiante | Lista'
        verbose_name_plural = 'Estudiantes | Listas'
        ordering = ['-id']


class Silabo(models.Model):
    aLectivo = models.CharField(max_length=2500, verbose_name='Año Lectivo', blank=True, null=True,default="")
    creada_en = models.DateField(default=datetime.now, verbose_name='Inicio')
    finaliza_en = models.DateField(default=datetime.now, verbose_name='Fin')
    curso = models.ForeignKey(Cursos, on_delete=models.CASCADE, blank=True, null=True, default='')    
    actividad = models.CharField(max_length=2500, verbose_name='Actividad', blank=True, null=True)
    descripcion = models.CharField(max_length=2500, verbose_name='Descipción', blank=True, null=True)
    url = models.CharField(max_length=2500, verbose_name='Link', blank=True, null=True)
    archivo = models.FileField(upload_to='silabos/archivos', blank=True, null=True)
    juego = models.ForeignKey(Juegos, on_delete=models.CASCADE, blank=True, null=True, default='', verbose_name='Juego')
    evaluacion = models.FileField(upload_to='silabos/evaluacion', blank=True, null=True,verbose_name='Evaluación')
    refuerzo = models.FileField(upload_to='silabos/refuerzo', blank=True, null=True)
    state = models.BooleanField(default=True, verbose_name='Estado')
    quimestre = models.CharField(max_length=500, null=True, blank=True,choices=quimestres, default=quimestres[0][0])
    producto = models.CharField(max_length=500, null=True, blank=True,choices=productos, default=productos[0][0])
    claseDemo = models.CharField(max_length=500, null=True, blank=True, default='')
    

    def __str__(self):
        return self.descripcion

    
    def toJSON(self):
        item = model_to_dict(self)
        return item

    class Meta:
        verbose_name = 'Silabo | SILABO'
        verbose_name_plural = 'Silabo | SILABO'
        ordering = ['-id']