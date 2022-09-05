from django.forms import ModelForm
from django import forms

from .models import *

class CursoForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['nivel'].widget.attrs['autofocus'] = True

    class Meta:
        model = Cursos
        fields = 'nivel','seccion', 'asignatura', 'descripcion','creada_en','finaliza_en',
        widgets = {
            'nivel': forms.TextInput(attrs={'placeholder': 'Ingrese el nivel'}),
            'seccion': forms.TextInput(attrs={'placeholder': 'Ingrese la sección '}),
            'asignatura': forms.TextInput(attrs={'placeholder': 'Ingrese la sección '}),
            'descripcion': forms.Textarea(attrs={'placeholder': 'Ingrese una descripción '}),
            'creada_en': forms.DateInput(format='%Y-%m-%d', attrs={
                'class': 'form-control datetimepicker-input',
                'id': 'creada_en',
                'value': datetime.now().strftime('%Y-%m-%d'),
                'data-toggle': 'datetimepicker',
                'data-target': '#creada_en'
            }),
            
            'finaliza_en': forms.DateInput(format='%Y-%m-%d', attrs={
                'class': 'form-control datetimepicker-input',
                'id': 'finaliza_en',
                'value': datetime.now().strftime('%Y-%m-%d'),
                'data-toggle': 'datetimepicker',
                'data-target': '#finaliza_en'
            }),
        }
        exclude = ['deletes']

