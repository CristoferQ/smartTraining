
'''
Author:
mailto:
Name Classs:
Description:
Dependences:
'''

#modules import
from sklearn import svm
import responseTraining

class SVM(object):

    #building
    def __init__(self,dataset, target, kernel, validation):

        #init attributes values...
        self.dataset=dataset
        self.target=target
        self.kernel=kernel
        self.validation=validation

    #instance training...
    def trainingMethod(self):

        self.SVMAlgorithm=svm.SVC(kernel=self.kernel, degree=3, gamma=10, probability=True)
        self.SVMAlgorithm =self.SVMAlgorithm.fit(self.dataset,self.target)

        params = "%s" % self.kernel
        performanceData = responseTraining.responseTraining(self.SVMAlgorithm, 'SVM', params, self.validation)
        performanceData.estimatedMetricsPerformance(self.dataset, self.target)

        print performanceData.scoreData
