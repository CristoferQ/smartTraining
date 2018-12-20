
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

        self.GaussianNBAlgorithm=GaussianNB()
        self.GaussianNBAlgorithm=self.GaussianNBAlgorithm.fit(self.dataset,self.target)

        params = '-'
        performanceData = responseTraining.responseTraining(self.GaussianNBAlgorithm, 'GaussianNB', params, self.validation)
        performanceData.estimatedMetricsPerformance(self.dataset, self.target)

        print performanceData.scoreData
