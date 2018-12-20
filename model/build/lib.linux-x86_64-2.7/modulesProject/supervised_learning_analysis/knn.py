
'''
Author:
mailto:
Name Classs:
Description:
Dependences:
'''

#modules import
from sklearn.neighbors import KNeighborsClassifier
import responseTraining

class knn(object):

    #building class...
    def __init__(self, dataset, response, n_neighbors, algorithm, metric, validation):

        #init attributes values...
        self.dataset = dataset
        self.response = response
        self.n_neighbors = n_neighbors
        self.algorithm = algorithm
        self.metric = metric
        self.validation = validation

    #instance training...
    def trainingMethod(self):

        self.knnAlgorithm = KNeighborsClassifier(n_neighbors=self.n_neighbors, weights='uniform', algorithm=self.algorithm, metric=self.metric, n_jobs=-1)#instancia
        self.knnAlgorithm = self.knnAlgorithm.fit(self.dataset, self.response)

        #training...
        params = "%s-%s-%d" % (self.algorithm, self.metric, self.n_neighbors)
        performanceData = responseTraining.responseTraining(self.knnAlgorithm, 'KNN', params, self.validation)
        performanceData.estimatedMetricsPerformance(self.dataset, self.response)

        print performanceData.scoreData
