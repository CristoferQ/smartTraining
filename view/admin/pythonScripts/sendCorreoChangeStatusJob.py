# -*- coding: utf-8 -*-
'''
script que permite el envio de un correo electronico cuando se hace un cambio de estado en un trabajo de usuario,
por parte del administrador
'''
import os
import sys
import smtplib
import ConnectDataBase
import CrudDataBase

#recolectamos la data recibida por la linea de comandos...
idJob = sys.argv[1]
statusJob = sys.argv[2]

#establecemos las variables para generar la conexion a la base de datos y hacer los procesos correspondientes
Connect = ConnectDataBase.ConnectDataBase()#instance to object ConnectDataBase
CrudDataBase = CrudDataBase.HandlerQuery()#instance to object CrudDataBase for handeler data base

#obtenemos la informacion del responsable...
Connect.initConnectionDB()
query = "select userMOSST.fullName, userMOSST.email  from job join userMOSST on (job.userMOSST = userMOSST.iduserMOSST) where job.idjob = %s" % idJob
List = CrudDataBase.queryBasicDataBase(query, Connect)

userName = List[0][0]
email = List[0][1]

print userName
print email

Connect.closeConnectionDB()

#creamos el mensaje...
msg = 'Dear %s,<br>It is reported that the status of your work has been updated with ID %s. The current status is %s.<br>If you have any questions, please contact the Account Manager.<br>Regards, Team Programming MOSST' % (userName, idJob, statusJob)

print msg

#hacemos las acciones con respecto al envio de correo
remitente = "Programacion <programacion@pesb2.cl>"
destinatario = "%s <%s>" % (userName, email)
email = "From: %s\nTo: %s\nMIME-Version: 1.0\nContent-type: text/html\nSubject: %s\n%s" % (remitente, destinatario, "Change Status Job", msg)
try:
    smtp = smtplib.SMTP('localhost')
    smtp.sendmail(remitente, destinatario, email)
    print "BIEN"
except:
    print "ERROR"
    print """Error: el mensaje no pudo enviarse.
    Compruebe que sendmail se encuentra instalado en su sistema"""
    pass
