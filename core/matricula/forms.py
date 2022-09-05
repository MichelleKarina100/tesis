from django.forms import ModelForm
from django import forms

from .models import *
from core.deberes.models import *
class MatriculaForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        #self.fields['estudiante'].widget.attrs['autofocus'] = True

    class Meta:
        model = Matricula
        fields = 'estudiante','observacion'
        widgets = {
            'estudiante': forms.Select(attrs={'class': 'select2' ,'style': 'width:100%'}),
            'observacion': forms.Textarea(attrs={'placeholder': 'Ingrese una observacion','class': 'form-control',}),
        }
        exclude = ['deletes']

class PostForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        #self.fields['estudiante'].widget.attrs['autofocus'] = True
    class Meta:
        model = Post
        fields = 'publicacion',
        widgets = {
            'publicacion': forms.TextInput(attrs={'placeholder': '¿Qué estás pensando?','class': 'form-control',}),
        }
        exclude = ['deletes']



class AsistenciaForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        #self.fields['estudiante'].widget.attrs['autofocus'] = True

    class Meta:
        model = ListaEstudiantes
        fields = 'asistencia',
        widgets = {
            'asistencia': forms.CheckboxInput(attrs={'class': 'form-control-checkbox'})
        }
        exclude = ['deletes']

class CrearTareaForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        #self.fields['estudiante'].widget.attrs['autofocus'] = True

    class Meta:
        model = CrearTarea
        fields = 'name','creada_en','silabo','descripcion',
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Ingrese el tema de la Tarea','class': 'form-control',}),
            'silabo': forms.Select(attrs={'class': 'select2' ,'style': 'width:100%'}),
            'descripcion': forms.Textarea(attrs={'placeholder': 'Ingrese la descripción','class': 'form-control',}),
            'creada_en' : forms.DateInput(
                format='%Y-%m-%d %H:%M:%S',
                attrs={
                    'value': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                    'autocomplete': 'off',
                    'class': 'form-control datetimepicker-input',
                    'id': 'date_vencimiento',
                    'data-target': '#date_creada',
                    'data-toggle': 'datetimepicker',
                    'min' : datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
    
                }
            ),
        }
        exclude = ['silabo']



class TareaForm(ModelForm):
    
    class Meta:
        model = EntregarTarea
        fields = 'nota',
        widgets = {
            'nota': forms.Select(attrs={'class': 'select2' ,'style': 'width:100%'}),
        }
        exclude = ['tarea','estudiante']




class TareaRecForm(ModelForm):
    
    class Meta:
        model = EntregarTarea
        fields = 'creada_en',
        widgets = {
            'creada_en' : forms.DateInput(
                format='%Y-%m-%d %H:%M:%S',
                attrs={
                    'value': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                    'autocomplete': 'off',
                    'class': 'form-control datetimepicker-input',
                    'id': 'date_vencimiento',
                    'data-target': '#date_creada',  
                    'data-toggle': 'datetimepicker',
                    'min' : datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
    
                }
            ),
        }
        exclude = ['tarea','estudiante']


class TareaFIleForm(ModelForm):
    
    class Meta:
        model = EntregarTarea
        fields = 'archivo',
        widgets = {
        }
        exclude = ['tarea','estudiante','silabo','juego','descripcion','name']

class SilaboForm(ModelForm):
    class Meta:
        model = Silabo
        field = '__all__'
        widgets = {
            
           
        }
        exclude = ['curso','creada_en','finaliza_en','aLectivo','refuerzo','claseDemo']