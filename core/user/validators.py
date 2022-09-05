from django.core.exceptions import ValidationError
from datetime import datetime


def validacionFechaActual(self, value):
    l = datetime.now()
    if value >  l:
        raise ValidationError('Fecha Incorrecta')

def validacionCantidad(value):
    if not value > 0:
        raise ValidationError('Ingrese una Cantidad valida..!!')

def validacionNacimiento(fecha):
    if not fecha > datetime.now :
        raise ValidationError('Fecha valida..!!')

def validarLetras(numero):
    validos = ['a', 'b',' ', 'c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']   # Una lista con todas las letras que quieras
    for elemento in numero.lower():
        if elemento not in validos:
            raise ValidationError('Solo se Permite letras en el Campo Nombres o Apellidos')
def validarLetrass(numero):
    validos = ['a', 'b',' ','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']   # Una lista con todas las letras que quieras
    for elemento in numero.lower():
        if elemento not in validos:
            raise ValidationError('Solo se Permite letras en el Campo Nombres o Apellidos')

def vcedula(texto):
    # sin ceros a la izquierda
    

    nocero = texto.strip("0")
    
    cedula = int(nocero,0)
    verificador = cedula%10
    numero = cedula//10
    
    # mientras tenga números
    suma = 0
    while (numero > 0):
        
        # posición impar
        posimpar = numero%10
        numero   = numero//10
        posimpar = 2*posimpar
        if (posimpar  > 9):
            posimpar = posimpar-9
        
        # posición par
        pospar = numero%10
        numero = numero//10
        
        suma = suma + posimpar + pospar
    
    decenasup = suma//10 + 1
    calculado = decenasup*10 - suma
    if (calculado  >= 10):
        calculado = calculado - 10

    if (calculado == verificador):
        validado = 1
    else:
        validado = 0
        raise ValidationError('Cédula no valida..')
    return (validado)
    