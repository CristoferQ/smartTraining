
'''
Author:
mailto:
Name Classs:
Description:
Dependences:
'''

from sklearn.ensemble import RandomForestClassifier
import responseTraining

class RandomForest(object):
    def __init__(self, dataset,target,n_estimators,criterion,validation):
        self.dataset=dataset
        self.target=target
        self.n_estimators=n_estimators
        self.criterion=criterion
        self.validation=validation

    def trainingMethod(self):
        self.RandomForestAlgorithm=RandomForestClassifier(n_estimators=self.n_estimators,criterion=self.criterion,n_jobs=-1)
        self.RandomForestAlgorithm=self.RandomForestAlgorithm.fit(self.dataset,self.target)

        params = "%s-%d" % (self.criterion ,self.n_estimators)
        performanceData = responseTraining.responseTraining(self.RandomForestAlgorithm, 'RandomForest', params, self.validation)
        performanceData.estimatedMetricsPerformance(self.dataset, self.target)

        print performanceData.scoreData
