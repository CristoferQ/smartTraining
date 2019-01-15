'''
clase que recibe una solicitud y genera la instancia con respecto al tipo de
respuesta que se espera, procesa todas las opciones segun lo que solicita el usuario
desde la opcion web. Evalua si el data set tiene clases o corresponde a algun tipo clustering o prediccion de elementos
'''

from modulesProject.dataBase_module import ConnectDataBase
from modulesProject.dataBase_module import HandlerQuery
from modulesProject.feature_analysis import correlationValue
from modulesProject.feature_analysis import spatialDeformation

class featureAnalysis(object):

    def __init__(self, user, job, dataSet, pathResponse):

        self.user = user
        self.job = job
        self.dataSet = dataSet
        self.pathResponse = pathResponse
        self.checkKindDataSet()#chequeamos el tipo de set de datos

    #metodo que permite evaluar el tipo de set de datos que se esta recibiendo
    def checkKindDataSet(self):

        #hacemos la consulta a la base de datos, instanciamos a los objetos correspondientes
        connectDB = ConnectDataBase.ConnectDataBase()
        handler = HandlerQuery.HandlerQuery()

        query = "select dataSet.tipoDataSet from dataSet where dataSet.job=%s" %self.job
        connectDB.initConnectionDB()
        response = handler.queryBasicDataBase(query, connectDB)
        self.tipoDataSet = response[0][0]
        connectDB.closeConnectionDB()

    #metodo que permite la ejecucion de la correlacion de datos
    def execCorrelationData(self):

        corrObject = correlationValue.correlationMatrixData(self.user, self.job, self.dataSet, self.pathResponse, self.tipoDataSet)
        return corrObject.calculateCorrelationMatrix()

    #metodo que permite la ejecucion de la deformacion de espacio con random forest
    def excecSpatialDeformation(self):
        spatial = spatialDeformation.spatialDeformation(self.user, self.job, self.dataSet, self.pathResponse, self.tipoDataSet)
        return spatial.applySpatialDeformation()
