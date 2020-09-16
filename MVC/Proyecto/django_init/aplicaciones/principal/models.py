from django.db import models

class Persona(models.Model):
    id = models.AutoField(primary_key = True)
    nombre = models.CharField(max_length = 100)
    apellido = models.CharField(max_length = 120)
    iddocumento = models.IntegerField(unique=True)
    correo = models.EmailField(max_length = 200)
    documento = models.CharField(max_length = 10)
    residencia = models.CharField(max_length = 200)
    nacimiento = models.CharField(max_length = 20)
    telefono = models.IntegerField()
    usuario = models.CharField(max_length = 200)
    contraseña = models.CharField(max_length = 100)


    
    def __str__(self):
        return self.nombre