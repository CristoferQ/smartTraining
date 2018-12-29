
'''
Author:
mailto:
Name Classs:
Description:
Dependences:
'''

from sklearn.naive_bayes import GaussianNB
import responseTraining

class Gaussian(object):

    def __init__(self,dataset,target,validation):
        self.dataset=dataset
        self.target=target
        self.validation=validation

    def trainingMethod(self):

        self.model=GaussianNB()
        self.GaussianNBAlgorithm=self.model.fit(self.dataset,self.target)

        params = 'Params:default'
        self.performanceData = responseTraining.responseTraining(self.GaussianNBAlgorithm, 'GaussianNB', params, self.validation)
        self.performanceData.estimatedMetricsPerformance(self.dataset, self.target)
