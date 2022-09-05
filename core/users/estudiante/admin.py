from django.contrib import admin

# Register your models here.
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from .models import *
# Register your models here.
class EstudiantesResource(resources.ModelResource):
    class Meta:
        model = Estudiantes
            
