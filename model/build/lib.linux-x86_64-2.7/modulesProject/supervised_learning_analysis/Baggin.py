
'''
Author:
mailto:
Name Classs:
Description:
Dependences:
'''

from sklearn.ensemble import BaggingClassifier
import responseTraining

class Baggin(object):

    def __init__ (self,dataset,target,n_estimators,validation):
        self.dataset=dataset
        self.target=target
        self.n_estimators=n_estimators
        self.validation=validation

    def trainingMethod(self):
        self.BagginAlgorithm= BaggingClassifier(n_estimators=self.n_estimators)
        self.BagginAlgorithm= self.BagginAlgorithm.fit(self.dataset,self.target)

        params = "%d" % (self.n_estimators)
        performanceData = responseTraining.responseTraining(self.BagginAlgorithm, 'Baggin', params, self.validation)
        performanceData.estimatedMetricsPerformance(self.dataset, self.target)

        print performanceData.scoreData
