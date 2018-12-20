
'''
Author:
mailto:
Name Classs:
Description:
Dependences:
'''

#modules import
from sklearn.svm import NuSVC
import responseTraining

class NuSVM(object):

    #building
    def __init__ (self,dataset,target,kernel,validation):

        self.dataset=dataset
        self.target=target
        self.kernel=kernel
        self.validation=validation

    def trainingMethod(self):

        self.NuSVMAlgorithm=NuSVC(kernel=self.kernel, degree=3, gamma=10, probability=True)
        self.NuSVMAlgorithm=self.NuSVMAlgorithm.fit(self.dataset,self.target)

        params = "%s" % (self.kernel)
        performanceData = responseTraining.responseTraining(self.NuSVMAlgorithm, 'NuSVM', params, self.validation)
        performanceData.estimatedMetricsPerformance(self.dataset, self.target)

        print performanceData.scoreData
