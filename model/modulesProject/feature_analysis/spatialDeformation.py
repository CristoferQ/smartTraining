'''
clase con la responsabilidad de generar la deformacion espacial de los elementos y generar un ranking de la importancia
de los atributos mediante la aplicacion de random forest default. Si el set de datos no tiene clases, se obtienen
mediante la aplicacion de clustering y se selecciona el con mejor calinski y mejor siluetas (en ese orden)
'''

from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
import pandas as pd
import numpy as np

class spatialDeformation(object):

    def __init__(self, user, job, dataSet, pathResponse, tipoDataSet):

        self.user = user
        self.job = job
        self.dataSet = pd.read_csv(dataSet)
        self.pathResponse = pathResponse
        self.tipoDataSet = tipoDataSet

    #metodo que permite aplicar random Forest para obtener las importancias...
    def applyRandomForestClassifier(self, data, target):

        response = ""

        try:
            #instancia a random forest y aplicacion del mismo
            random_forest = RandomForestClassifier(max_depth=2, random_state=0, n_estimators=10, n_jobs=-1, criterion='gini')
            random_forest = random_forest.fit(data, target)

            #obtenemos las importancias
            importances = pd.DataFrame({'feature':data.columns.tolist(),'importance':np.round(random_forest.feature_importances_,3)})
            importances = importances.sort_values('importance',ascending=False).set_index('feature')

            #exportamos el resultado
            nameCSV = "%s%s/%s/rankingImportance_%s.csv" % (self.pathResponse, self.user, self.job, self.job)
            importances.to_csv(nameCSV)
            response = "OK"
        except:
            response = "ERROR"
            pass
        return response

    #metodo que permite aplicar random Forest para obtener las importancias...
    def applyRandomForestPrediction(self, data, target):

        response = ""
        try:
            #instancia a random forest y aplicacion del mismo
            random_forest = RandomForestRegressor(max_depth=2, random_state=0, n_estimators=10, n_jobs=-1, criterion='mse')
            random_forest = random_forest.fit(data, target)

            #obtenemos las importancias
            importances = pd.DataFrame({'feature':data.columns.tolist(),'importance':np.round(random_forest.feature_importances_,3)})
            importances = importances.sort_values('importance',ascending=False).set_index('feature')

            #exportamos el resultado
            nameCSV = "%s%s/%s/rankingImportance_%s.csv" % (self.pathResponse, self.user, self.job, self.job)
            importances.to_csv(nameCSV)
            response = "OK"
        except:
            response = "ERROR"
            pass

        return response
    #metodo que permite obtener las clases y los atributos desde un set de datos
    def getClass_Attribute(self, dataSet):

        columnas=dataSet.columns.tolist()
        x=columnas[len(columnas)-1]
        target=dataSet[x]#clases
        y=columnas[0:len(columnas)-1]
        data=dataSet[y]#atributos

        return data, target

    #metodo que permite aplicar la deformacion de espacio...
    def applySpatialDeformation(self):

        if self.tipoDataSet == 'CLASS':
            data, target = self.getClass_Attribute(self.dataSet)
            response = self.applyRandomForestClassifier(data, target)

        elif self.tipoDataSet == 'PREDICTION':
            data, response = self.getClass_Attribute(self.dataSet)
            response = self.applyRandomForestPrediction(data, response)

        else:
            response = "Option not available for this type of data set"

        return response
