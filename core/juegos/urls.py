from django.urls import path

from core.juegos.views import *

urlpatterns = [
    # Cursos

    #
    path('game/juegomemoria/', GameMemoryView.as_view(), name='juegomemoria'),
    path('game/paint/', PaintView.as_view(), name='paint'),
    path('game/rompecabezas/', RompecabezasView.as_view(), name='rompecabezas'),
    path('game/geometria/', JuegoGeometriaView.as_view(), name='geometria'),
    path('game/sumas/', GameSumaView.as_view(), name='sumas'),
    path('game/operaciones/', GameSumaOperacionesView.as_view(), name='operaciones'),

    #
    #numeros ESTE SI 

    path('game/juegomemoria2/', GameMemoryView2.as_view(), name='juegomemoria2'),
    path('game/juegomemoria3/', GameMemoryView3.as_view(), name='juegomemoria3'),
    path('game/encuentraTesoro/', EncuentraElTesoroView.as_view(), name='encuentraTesoro'),
    

    #ESTE
    #ESTE
    #nell
    path('game/reflejos/', ReflejosView.as_view(), name='reflejos'),
    #nell
    path('game/sentidos/', SentidosView.as_view(), name='sentidos'),
    #nell
    path('game/juegonuevo/', JuegoNUevoView.as_view(), name='juegonuevo'),
    #nell
    path('game/pares/', JuegoParesView.as_view(), name='juegopares'),
    
    #ESTE
    #nell
    path('game/hormiga/', JuegoHormigaView.as_view(), name='hormiga'),
    #nell
    path('game/piano/', JuegoPianoView.as_view(), name='piano'),
    #nell
    path('game/burbuja/', JuegoBurbujaView.as_view(), name='burbuja'),



    path('game/', JuegoListView.as_view(), name='juego_list'),
    path('game/add/', JuegoCreateView.as_view(), name='juego_create'),
    path('game/update/<int:pk>/', JuegoUpdateView.as_view(), name='juego_update'),

]
