# -*- coding: utf-8 -*-
'''
script que permite el envio de un correo electronico cuando se hace un cambio de estado en la cuenta de usuario...
'''
import os
import sys
import smtplib
import ConnectDataBase
import CrudDataBase

#recolectamos la data recibida por la linea de comandos...
idUser = sys.argv[1]
statusUser = sys.argv[2]

#establecemos las variables para generar la conexion a la base de datos y hacer los procesos correspondientes
Connect = ConnectDataBase.ConnectDataBase()#instance to object ConnectDataBase
CrudDataBase = CrudDataBase.HandlerQuery()#instance to object CrudDataBase for handeler data base

#obtenemos la informacion del responsable...
Connect.initConnectionDB()
query = "select * from userMOSST where  iduserMOSST = %s" % idUser
List = CrudDataBase.queryBasicDataBase(query, Connect)

userName = List[0][1]
email = List[0][2]

print userName
print email

Connect.closeConnectionDB()

#creamos el mensaje...
msg= ""
if statusUser == "ACCEPTED":

    msg = 'Dear %s, <br> It is reported that your MOSST user account has been activated.<br>Regards, Team Programming MOSST' % userName

else:

    msg = 'Dear %s, <br> We inform you that your status has been updated in the MOSST user account, your current status is %s.<br>For more details consult the account manager.<br> Regards, Team Programming MOSST' % (userName, statusUser)
print msg

#hacemos las acciones con respecto al envio de correo
remitente = "Programacion <programacion@pesb2.cl>"
destinatario = "%s <%s>" % (userName, email)
email = "From: %s\nTo: %s\nMIME-Version: 1.0\nContent-type: text/html\nSubject: %s\n%s" % (remitente, destinatario, "Change Status Account", msg)
try:
    smtp = smtplib.SMTP('localhost')
    smtp.sendmail(remitente, destinatario, email)
    print "BIEN"
except:
    print "ERROR"
    print """Error: el mensaje no pudo enviarse.
    Compruebe que sendmail se encuentra instalado en su sistema"""
    pass
