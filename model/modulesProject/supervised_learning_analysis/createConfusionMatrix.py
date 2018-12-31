'''
script que permite crear una matriz de confusion dado un modelo
'''

import matplotlib
matplotlib.use('Agg')
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import cross_val_predict
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import cross_validate
from sklearn.metrics import confusion_matrix
import itertools

class confusionMatrix(object):

    def __init__(self, dataSet, target, modelData, cv_values, user, job, path, classList):

        self.dataSet = dataSet
        self.target = target
        self.modelData = modelData
        self.cv_values = cv_values
        self.job = job
        self.path = path
        self.user = user
        self.classList = classList
        self.pathResponse = self.path+self.user+"/"+self.job+"/confusionMatrix_"+self.job+".svg"

    #desarrollo del plot de la matriz de confusion...
    def plot_confusion_matrix(self, cm, classes, normalize=False, title='Confusion matrix', cmap=plt.cm.Oranges):

        """
        This function prints and plots the confusion matrix.
        Normalization can be applied by setting `normalize=True`.
        """
        if normalize:
            cm = cm.astype('float') / cm.sum(axis=1)[:, np.newaxis]
            print("Normalized confusion matrix")
        else:
            print('Confusion matrix, without normalization')

        plt.imshow(cm, interpolation='nearest', cmap=cmap)
        plt.title(title)
        plt.colorbar()
        tick_marks = np.arange(len(classes))
        plt.xticks(tick_marks, classes, rotation=45)
        plt.yticks(tick_marks, classes)

        fmt = '.2f' if normalize else 'd'
        thresh = cm.max() / 2.
        for i, j in itertools.product(range(cm.shape[0]), range(cm.shape[1])):
            plt.text(j, i, format(cm[i, j], fmt),
                     horizontalalignment="center",
                     color="black")

        plt.tight_layout()
        plt.ylabel('True label')
        plt.xlabel('Predicted label')

    #metodo que permite generar la matriz de confusion...
    def createConfusionMatrix(self):

        self.predictions = cross_val_predict(self.modelData, self.dataSet, self.target, cv=self.cv_values)
        matrix = confusion_matrix(self.target, self.predictions)

        np.set_printoptions(precision=2)

        # Plot non-normalized confusion matrix
        plt.figure()
        self.plot_confusion_matrix(matrix, classes=self.classList, title='Confusion matrix, without normalization')
        plt.savefig(self.pathResponse)
