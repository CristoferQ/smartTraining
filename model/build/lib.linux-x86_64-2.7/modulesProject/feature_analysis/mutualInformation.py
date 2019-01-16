# coding=utf-8
'''
Clase que construye una matriz de calculo MI, calculara el valor de MI normalizado
entre 0 (independintes) a 1 (iguales).
Recibe un set de datos en formato (carac,dato) sin tomar en cosideracion la clase
que clasifica.
Se calculara el numero de caracteristicas a tomar en consideracion para la consutrccion
de una matriz resumen.

Funciones:
SingleMi: necesita de 2 array, cada uno correspondiente a 1 caracteristica con todos
sus datos, retorna el valor de MutualInformation para dicha combinacion.


MakeMatrix: construye una matriz completa con al informacion de MI de todas las combinaciones
de las caracteristicas.
Retorna: Matriz (caract x caract) con valor MI. La diagonal siempre es 1.
'''
from sklearn.metrics import normalized_mutual_info_score as mis
import numpy as np
import pandas as pd

class mutualInformation(object):

    def __init__(self, user, job, dataset, pathResponse, tipoData):
        self.user = user
        self.job = job
        self.pathResponse = pathResponse
        self.tipoData = tipoData
        self.dataset = pd.read_csv(dataset)
        #self.dataset = dataset
        ###########

    def singleMI(self, array1, array2):
        mi = mis(array1,array2)
        return mi
        ###########

    #funcion que permite obtener los datos del data set a partir de una key
    def getDataFromDataSet(self, key, dataSet):

        row = []

        for i in range(len(dataSet)):
            row.append(dataSet[key][i])
        return row

    def makeMatrix(self):

        # type_c puede ser
        # arithmetic, min, max, geometric
        # metodo de normalizar el denominador
        okiedoki=""
        type_c="arithmetic"

        try:
            if(self.tipoData == 'CLASS'):
                columnas=self.dataset.columns.tolist()
                y=columnas[0:len(columnas)-1]
                data=self.dataset[y]#atributos
            else:
                data=self.dataSet

            columnas = data.columns.tolist()

            W = np.empty((len(columnas), len(columnas)))# se crea 1 matriz vacia
            i=0
            j=0
            for key1 in columnas:
                for key2 in columnas:
                    A = self.getDataFromDataSet(key1, data)
                    B = self.getDataFromDataSet(key2, data)
                    mi = self.singleMI(A,B)

                    W[i][j] = mi
                    j+=1
                i+=1
                j=0

            #CSV
            file = "%s%s/%s/MatrixMI_%s.csv" % (self.pathResponse, self.user, self.job, self.job)
            df = pd.DataFrame(W, index=columnas, columns=columnas)
            df.to_csv(file)
            okiedoki = "OK"

        except Exception as e:
            #raise e
            okiedoki = "ERROR"
            pass
        return okiedoki
        ###########
