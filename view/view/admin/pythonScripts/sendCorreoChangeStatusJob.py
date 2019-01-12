# -*- coding: utf-8 -*-
'''
script que permite el envio de un correo electronico cuando se hace un cambio de estado en un trabajo de usuario,
por parte del administrador
'''
import os
import sys
import sendEmail
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
query = "select user.nameUser, user.emailUser from user join job on (job.user = user.iduser) where job.idjob = %s" % idJob
List = CrudDataBase.queryBasicDataBase(query, Connect)

userName = List[0][0]
email = List[0][1]

Connect.closeConnectionDB()

#creamos el mensaje...
msg = 'Dear %s,\nIt is reported that the status of your work has been updated with ID %s. The current status is %s.\nIf you have any questions, please contact the Account Manager.\nBest Regards, SmartTraining Team' % (userName, idJob, statusJob)

#hacemos la instancia para enviar el email...
mailSend = sendEmail.sendEmail('smarttrainingserviceteam@gmail.com', email, "Change status Job", msg, 'smart123ewq')
mailSend.sendEmailUser()
