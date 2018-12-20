
'''
Author:
mailto:
Name Classs:
Description:
Dependences:
'''

from sklearn.neural_network import MLPClassifier
import responseTraining

class MLP(object):

    def __init__ (self,dataset,target,activation, solver, learning_rate, hidden_layer_sizes_a,hidden_layer_sizes_b,hidden_layer_sizes_c,validation):
        self.dataset=dataset
        self.target=target
        self.activation=activation
        self.solver=solver
        self.learning_rate=learning_rate
        self.hidden_layer_sizes=[hidden_layer_sizes_a,hidden_layer_sizes_b,hidden_layer_sizes_c]
        self.validation=validation

    def trainingMethod(self):

        self.MLPAlgorithm=MLPClassifier(hidden_layer_sizes=self.hidden_layer_sizes,activation=self.activation,solver=self.solver,learning_rate=self.learning_rate)
        self.MLPAlgorithm=self.MLPAlgorithm.fit(self.dataset,self.target)

        params = "%s-%s-%s-%d-%d-%d" % (self.activation, self.learning_rate, self.solver,self.hidden_layer_sizes[0], self.hidden_layer_sizes[1], self.hidden_layer_sizes[2])
        performanceData = responseTraining.responseTraining(self.MLPAlgorithm, 'MLP', params, self.validation)
        performanceData.estimatedMetricsPerformance(self.dataset, self.target)

        print performanceData.scoreData
