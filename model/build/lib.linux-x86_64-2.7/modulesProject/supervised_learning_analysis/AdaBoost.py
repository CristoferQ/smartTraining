
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
         self.AdaBoostAlgorithm= AdaBoostClassifier(n_estimators=self.n_estimators,algorithm=self.algorithm)
         self.AdaBoostAlgorithm= self.AdaBoostAlgorithm.fit(self.dataset,self.target)

         params = "%s-%d" % (self.algorithm, self.n_estimators)
         performanceData = responseTraining.responseTraining(self.AdaBoostAlgorithm, 'AdaBoost', params, self.validation)
         performanceData.estimatedMetricsPerformance(self.dataset, self.target)

         print performanceData.scoreData
