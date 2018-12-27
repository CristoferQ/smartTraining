
'''
Author:
mailto:
Name Classs:
Description:
Dependences:
'''

from sklearn.ensemble import AdaBoostClassifier
import responseTraining

class AdaBoost(object):

    def __init__ (self, dataset, target, n_estimators, algorithm,validation):
        self.dataset=dataset
        self.target=target
        self.n_estimators=n_estimators
        self.algorithm=algorithm
        self.validation=validation

    def trainingMethod(self):
         self.model= AdaBoostClassifier(n_estimators=self.n_estimators,algorithm=self.algorithm)

         self.AdaBoostAlgorithm= self.model.fit(self.dataset,self.target)

         params = "algorithm:%s-n_estimators:%d" % (self.algorithm, self.n_estimators)
         self.performanceData = responseTraining.responseTraining(self.AdaBoostAlgorithm, 'AdaBoost', params, self.validation)
         self.performanceData.estimatedMetricsPerformance(self.dataset, self.target)
