
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
        self.performanceData = responseTraining.responseTraining(self.BernoulliNBAlgorithm, 'BernoulliNB', params, self.validation)
        self.performanceData.estimatedMetricsPerformance(self.dataset, self.target)
