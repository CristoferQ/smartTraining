# -*- coding: utf-8 -*-
'''
script que permite el envio de un correo electronico cuando se hace un cambio de estado en la cuenta de usuario...
'''
import os
import sys
import ConnectDataBase
import CrudDataBase
import sendEmail

#recolectamos la data recibida por la linea de comandos...
idUser = sys.argv[1]
statusUser = sys.argv[2]

#establecemos las variables para generar la conexion a la base de datos y hacer los procesos correspondientes
Connect = ConnectDataBase.ConnectDataBase()#instance to object ConnectDataBase
CrudDataBase = CrudDataBase.HandlerQuery()#instance to object CrudDataBase for handeler data base

#obtenemos la informacion del responsable...
Connect.initConnectionDB()
query = "select user.nameUser, user.emailUser from user where  iduser = %s" % idUser
List = CrudDataBase.queryBasicDataBase(query, Connect)

userName = List[0][0]
email = List[0][1]

Connect.closeConnectionDB()

#creamos el mensaje...
msg= ""
if statusUser == "ACCEPTED":

    msg = 'Dear %s,\nIt is reported that your SmartTraining user account has been activated.\nBest Regards\nSmartTraining Team' % userName

else:
    msg = 'Dear %s,\nWe inform you that your status has been updated in the SmartTraining user account, your current status is %s.<br>For more details consult the account manager.\nBest Regards\nSmartTraining Team' % (userName, statusUser)

#hacemos la instancia para enviar el email...
mailSend = sendEmail.sendEmail('smarttrainingserviceteam@gmail.com', email, "Change status account", msg, 'smart123ewq')
mailSend.sendEmailUser()
