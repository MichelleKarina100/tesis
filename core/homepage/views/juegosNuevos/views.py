import json

from django.http import HttpResponse
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, TemplateView

from core.homepage.forms import News, NewsForm
from core.security.mixins import PermissionMixin


class JUegosNUevoView(TemplateView):
    template_name = 'juegosNuevosINdex/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class JUegos1NUevoView(TemplateView):
    template_name = 'juegosNuevosINdex/index2.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context
        
  
class SumaIndexView(TemplateView):
    template_name = 'juegosNuevosINdex/suma.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class RestaIndexView(TemplateView):
    template_name = 'juegosNuevosINdex/resta.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class ConjuntosIndexView(TemplateView):
    template_name = 'juegosNuevosINdex/conjuntos.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class SucesionesIndexView(TemplateView):
    template_name = 'juegosNuevosINdex/sucesiones.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class FigurasIndexView(TemplateView):
    template_name = 'juegosNuevosINdex/figuras.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class IIndexView(TemplateView):
    template_name = 'juegosNuevosINdex/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class NumerosView(TemplateView):
    template_name = 'juegosNuevosINdex/numeros.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context
        
class KilogramoView(TemplateView):
    template_name = 'juegosNuevosINdex/kilogramo.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class LitroView(TemplateView):
    template_name = 'juegosNuevosINdex/litro.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context
class DecenasView(TemplateView):
    template_name = 'juegosNuevosINdex/decenas.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context
