
'''
Author:
mailto:
Name Classs:
Description:
Dependences:
'''

from sklearn.ensemble import GradientBoostingClassifier
import responseTraining

class Gradient(object):

    def __init__ (self,dataset,target,n_estimators, validation):
        self.dataset=dataset
        self.target=target
        self.n_estimators=n_estimators
        self.validation=validation

    def trainingMethod(self):

        self.GradientAlgorithm= GradientBoostingClassifier(n_estimators=self.n_estimators)
        self.GradientAlgorithm= self.GradientAlgorithm.fit(self.dataset,self.target)

        params = "%d" % self.n_estimators
        performanceData = responseTraining.responseTraining(self.GradientAlgorithm, 'Gradient', params, self.validation)
        performanceData.estimatedMetricsPerformance(self.dataset, self.target)

        print performanceData.scoreData
