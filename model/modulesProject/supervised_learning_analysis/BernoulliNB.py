
'''
Author:
mailto:
Name Classs:
Description:
Dependences:
'''

from sklearn.naive_bayes import BernoulliNB
import responseTraining

class Bernoulli (object):

    def __init__(self,dataset,target,validation):
        self.dataset=dataset
        self.target=target
        self.validation=validation

    def trainingMethod(self):
        self.model=BernoulliNB()
        self.BernoulliNBAlgorithm=self.model.fit(self.dataset,self.target)

        params = "Param:Default"
        performanceData = responseTraining.responseTraining(self.BernoulliNBAlgorithm, 'BernoulliNB', params, self.validation)
        performanceData.estimatedMetricsPerformance(self.dataset, self.target)

        print performanceData.scoreData
