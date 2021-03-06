'''
clase con la responsabilidad de recibir un set de datos y generar la matriz de correlacion asociada
a los elementos, si el set de datos es del tipo clase, no se trabaja con la ultima columna
'''

import matplotlib
matplotlib.use('Agg')

import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

class correlationMatrixData(object):

    def __init__(self, user, job, dataSet, pathResponse, tipoData):

        self.user = user
        self.job = job
        self.dataSet = pd.read_csv(dataSet)
        self.pathResponse = pathResponse
        self.tipoData = tipoData

    #metodo que permite estimar la correlacion y generar la matriz
    def calculateCorrelationMatrix(self):

        response = ""
        try:

            if self.tipoData == 'CLASS':#clases
                columnas=self.dataSet.columns.tolist()
                y=columnas[0:len(columnas)-1]
                data=self.dataSet[y]#atributos
            else:
                data = self.dataSet

            #aplicamos la correlacion...
            correlationMatrix = data.corr()

            #exportamos el archivo...
            nameFile = "%s%s/%s/correlationMatrix_%s.csv" % (self.pathResponse, self.user, self.job, self.job)
            correlationMatrix.to_csv(nameFile)

            #generamos la imagen
            plt.figure()
            heatmap = sns.heatmap(correlationMatrix)

            loc, labels = plt.xticks()
            heatmap.set_xticklabels(labels)
            heatmap.set_yticklabels(labels[::-1])
            nameFileImage = "%s%s/%s/correlationMatrix_%s.svg" % (self.pathResponse, self.user, self.job, self.job)
            plt.savefig(nameFileImage)

            response = "OK"
        except:
            response = "ERROR"
            pass

        return response
