'''
script launcher para el modulo de analisis de caracteristicas
'''

import sys
import json

from modulesProject.feature_analysis import execFeatureAnalysis
from modulesProject.dataBase_module import ConnectDataBase
from modulesProject.dataBase_module import HandlerQuery

#recibimos los atributos
user = sys.argv[1]
job = sys.argv[2]
dataSet = sys.argv[3]
pathResponse = sys.argv[4]
option = int(sys.argv[5])

dictResponse = {}

#instanciamos al objeto
execFeatures = execFeatureAnalysis.featureAnalysis(user, job, dataSet, pathResponse)

if option == 1:#correlation matrix
    dictResponse.update({'Exce': "Correlation Data"})
    response = execFeatures.execCorrelationData()
    dictResponse.update({"Response": response})

elif option == 2:#deformacion espacio
    dictResponse.update({'Exce': "Spatial Deformation"})
    response = execFeatures.excecSpatialDeformation()
    dictResponse.update({"Response": response})

elif option == 3:#PCA
    dictResponse.update({'Exce': "PCA"})
    response = execFeatures.execPCA()
    dictResponse.update({"Response": response})

elif option == 4:#Mutual Information
    dictResponse.update({'Exce': "Mutual Information"})
    response = execFeatures.execMutualInformation()
    dictResponse.update({"Response": response})

elif option == 5:#Kernel PCA
    dictResponse.update({'Exce': "Kernel PCA"})
    response = execFeatures.exec_kernelPCA()
    dictResponse.update({"Response": response})

elif option == 6:#Incremental PCA
    dictResponse.update({'Exce': "Incremental PCA"})
    response = execFeatures.execPCA_Incremental()
    dictResponse.update({"Response": response})

#create file with response...
with open(pathResponse+user+"/"+job+"/responseCorrelation"+str(job)+".json", 'w') as fp:
    json.dump(dictResponse, fp)


#cambiamos el estado al job
connectDB = ConnectDataBase.ConnectDataBase()
handler = HandlerQuery.HandlerQuery()

#hacemos la consulta
query = "update job set job.statusJob = 'FINISH', job.modifiedJob= NOW() where job.idjob=%s" % job

connectDB.initConnectionDB()
handler.insertToTable(query, connectDB)
connectDB.closeConnectionDB()
