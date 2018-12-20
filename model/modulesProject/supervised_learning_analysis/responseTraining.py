'''
clase que permite representar una respuesta de un algoritmo de entrenamiento con respecto a sus parametros
'''

from sklearn.model_selection import cross_validate, cross_val_predict, cross_val_score
from sklearn.metrics import accuracy_score, cohen_kappa_score, f1_score, precision_score, recall_score, fbeta_score, make_scorer
import numpy as np

class responseTraining(object):

    def __init__(self, clf, algorithm, params, validation):

        self.clf = clf
        self.ListScore = ['accuracy', 'recall', 'precision', 'neg_log_loss', 'f1']
        self.ftwo_scorer = make_scorer(fbeta_score, beta=2)

        self.algorithm = algorithm
        self.params = params
        self.validation = validation

    #funcion que permite estimar las metricas de control para el modelo generado... con validacion CV=10
    def estimatedMetricsPerformance(self, dataInput, dataClass):

        self.scoreData = []
        #descriptores method
        self.scoreData.append(self.algorithm)
        self.scoreData.append(self.params)
        self.scoreData.append(self.validation)

        for element in self.ListScore:
            scores = cross_val_score(self.clf, dataInput, dataClass, cv=self.validation, scoring=element)
            meanScore = np.mean(scores)
            self.scoreData.append(meanScore)
        #aplicamos el scrore fbeta...
        scores = cross_val_score(self.clf, dataInput, dataClass, cv=self.validation, scoring=self.ftwo_scorer)
        meanScore = np.mean(scores)
        self.scoreData.append(meanScore)

        
