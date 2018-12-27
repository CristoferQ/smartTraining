'''
script que permite procesar la ejecucion de un algoritmo de aprendizaje supervisado para crear el entrenamiento del modelo
recibe los parametros asociados a la configuracion del modelo y ejecuta los complementos a los resultados obtenidos

Orden de los algoritmos

1 Adaboost
2 Bagging
3 Bernoulli
4 Decision Tree
5 Gaussian
6 Gradient
7 KNN
8 MLP
9 NuSVC
10 RF
11 SVC

Cada uno posee diferentes parametros con respecto a su ejecucion...

'''

#importamos los algoritmos...
from modulesProject.supervised_learning_analysis import AdaBoost
from modulesProject.supervised_learning_analysis import Baggin
from modulesProject.supervised_learning_analysis import BernoulliNB
from modulesProject.supervised_learning_analysis import DecisionTree
from modulesProject.supervised_learning_analysis import GaussianNB
from modulesProject.supervised_learning_analysis import Gradient
from modulesProject.supervised_learning_analysis import knn
from modulesProject.supervised_learning_analysis import MLP
from modulesProject.supervised_learning_analysis import NuSVM
from modulesProject.supervised_learning_analysis import RandomForest
from modulesProject.supervised_learning_analysis import SVM

#importamos los metodos para generar el resto de los resultados
from modulesProject.supervised_learning_analysis import createConfusionMatrix
from modulesProject.supervised_learning_analysis import createLearningCurve
from modulesProject.supervised_learning_analysis import createPrecisionRecallCurve
from modulesProject.supervised_learning_analysis import createRocCurve

import pandas as pd
import json

class execAlgorithm(object):

    #constructor de la clase
    def __init__(self, dataSet, user, job, pathResponse, algorithm, params, validation, classArray):

        self.dataSet = dataSet
        self.user = user
        self.job = job
        self.pathResponse = pathResponse
        self.algorithm = algorithm
        self.params = params#params es una lista de parametros asociados al algoritmo
        self.validation = validation#validacion del algoritmo (valor de CV)
        self.response = {}#diccionario con la respuesta para formar el json
        self.classArray = classArray#contiene el nombre de las clases

        #procesamos el data set para obtener las clases y los atributos
        self.columnas=self.dataSet.columns.tolist()
        x=self.columnas[len(self.columnas)-1]
        self.target=self.dataSet[x]
        y=self.columnas[0:len(self.columnas)-1]
        self.data=self.dataSet[y]

    #metodo que permite evaluar la ejecucion del algoritmo con respecto a los parametros de entrada
    def execAlgorithmByOptions(self):

        if self.algorithm == 1:#Adaboost

            self.response.update({"algorithm": "AdaBoostClassifier"})
            paramsData = {}
            paramsData.update({"n_estimators": self.params[0]})
            paramsData.update({"algorithm": self.params[1]})
            self.response.update({"Params": paramsData})
            self.response.update({"Validation": "Cross Validation: " + str(self.validation)})

            #instancia al objeto...
            AdaBoostObject = AdaBoost.AdaBoost(self.data, self.target, int(self.params[0]), self.params[1], self.validation)
            AdaBoostObject.trainingMethod()
            performance = {}
            performance.update({"accuracy":AdaBoostObject.performanceData.scoreData[0]})
            performance.update({"recall": AdaBoostObject.performanceData.scoreData[1]})
            performance.update({"precision": AdaBoostObject.performanceData.scoreData[2]})
            performance.update({"neg_log_loss": AdaBoostObject.performanceData.scoreData[3]})
            performance.update({"f1": AdaBoostObject.performanceData.scoreData[4]})
            performance.update({"fbeta": AdaBoostObject.performanceData.scoreData[5]})

            self.response.update({"Performance": performance})

            print AdaBoostObject.performanceData.scoreData

            errorData = {}
            #hacemos las ejecuciones para obtener los validadores
            try:
                #curva roc
                curveRocObject = createRocCurve.curveRoc(self.data, self.target, bagginObject.model, self.validation, self.user, self.job, self.pathResponse)
                curveRocObject.createCurveROC()
                errorData.update({"curveRoc" : "ok"})
            except:
                errorData.update({"curveRoc" : "error"})
                pass

            try:

                #precision-recall curve
                precisionCurve = createPrecisionRecallCurve.curvePrecision(self.data, self.target, bagginObject.model, self.validation, self.user, self.job, self.pathResponse)
                precisionCurve.plot_precision_and_recall_curve()
                errorData.update({"precisionCurve" : "ok"})
            except:
                errorData.update({"precisionCurve" : "error"})
                pass

            try:

                #learning curve
                learningCurveDemo = createLearningCurve.curveLearning(self.data, self.target, bagginObject.model, self.validation, self.user, self.job, self.pathResponse)
                learningCurveDemo.createLearningCurve()
                errorData.update({"curveLearning" : "ok"})
            except:
                errorData.update({"curveLearning" : "error"})
                pass

            try:
                #confusion matrix data
                confusionMatrixDemo = createConfusionMatrix.confusionMatrix(self.data, self.target, bagginObject.model, self.validation, self.user, self.job, self.pathResponse, self.classArray)
                confusionMatrixDemo.createConfusionMatrix()
                errorData.update({"confusionMatrix" : "ok"})
            except:
                errorData.update({"confusionMatrix" : "error"})
                pass

            self.response.update({"errorExec": errorData})

            #exportamos tambien el resultado del json
            nameFile =self.pathResponse+self.user+"/"+self.job+"/responseTraining"+str(self.job)+".json"
            print nameFile
            with open(self.pathResponse+self.user+"/"+self.job+"/responseTraining"+str(self.job)+".json", 'w') as fp:
                json.dump(self.response, fp)

        elif self.algorithm == 2:#Bagging

            self.response.update({"algorithm": "BaggingClassifier"})
            paramsData = {}
            paramsData.update({"n_estimators": int(self.params[0])})
            paramsData.update({"bootstrap": self.params[1]})
            self.response.update({"Params": paramsData})
            self.response.update({"Validation": "Cross Validation: " + str(self.validation)})

            #instancia al objeto...
            bagginObject = Baggin.Baggin(self.data,self.target,int(self.params[0]), self.params[1],self.validation)
            bagginObject.trainingMethod()
            performance = {}
            performance.update({"accuracy":bagginObject.performanceData.scoreData[0]})
            performance.update({"recall": bagginObject.performanceData.scoreData[1]})
            performance.update({"precision": bagginObject.performanceData.scoreData[2]})
            performance.update({"neg_log_loss": bagginObject.performanceData.scoreData[3]})
            performance.update({"f1": bagginObject.performanceData.scoreData[4]})
            performance.update({"fbeta": bagginObject.performanceData.scoreData[5]})

            self.response.update({"Performance": performance})

            print bagginObject.performanceData.scoreData

            errorData = {}
            #hacemos las ejecuciones para obtener los validadores
            try:
                #curva roc
                curveRocObject = createRocCurve.curveRoc(self.data, self.target, bagginObject.model, self.validation, self.user, self.job, self.pathResponse)
                curveRocObject.createCurveROC()
                errorData.update({"curveRoc" : "ok"})
            except:
                errorData.update({"curveRoc" : "error"})
                pass

            try:

                #precision-recall curve
                precisionCurve = createPrecisionRecallCurve.curvePrecision(self.data, self.target, bagginObject.model, self.validation, self.user, self.job, self.pathResponse)
                precisionCurve.plot_precision_and_recall_curve()
                errorData.update({"precisionCurve" : "ok"})
            except:
                errorData.update({"precisionCurve" : "error"})
                pass

            try:

                #learning curve
                learningCurveDemo = createLearningCurve.curveLearning(self.data, self.target, bagginObject.model, self.validation, self.user, self.job, self.pathResponse)
                learningCurveDemo.createLearningCurve()
                errorData.update({"curveLearning" : "ok"})
            except:
                errorData.update({"curveLearning" : "error"})
                pass

            try:
                #confusion matrix data
                confusionMatrixDemo = createConfusionMatrix.confusionMatrix(self.data, self.target, bagginObject.model, self.validation, self.user, self.job, self.pathResponse, self.classArray)
                confusionMatrixDemo.createConfusionMatrix()
                errorData.update({"confusionMatrix" : "ok"})
            except:
                errorData.update({"confusionMatrix" : "error"})
                pass

            self.response.update({"errorExec": errorData})

            #exportamos tambien el resultado del json
            nameFile =self.pathResponse+self.user+"/"+self.job+"/responseTraining"+str(self.job)+".json"
            print nameFile
            with open(self.pathResponse+self.user+"/"+self.job+"/responseTraining"+str(self.job)+".json", 'w') as fp:
                json.dump(self.response, fp)

        elif self.algorithm == 3:#Bernoulli

            self.response.update({"algorithm": "BaggingClassifier"})
            paramsData = {}
            paramsData.update({"n_estimators": int(self.params[0])})
            paramsData.update({"bootstrap": self.params[1]})
            self.response.update({"Params": paramsData})
            self.response.update({"Validation": "Cross Validation: " + str(self.validation)})

            #instancia al objeto...
            bagginObject = Baggin.Baggin(self.data,self.target,int(self.params[0]), self.params[1],self.validation)
            bagginObject.trainingMethod()
            performance = {}
            performance.update({"accuracy":bagginObject.performanceData.scoreData[0]})
            performance.update({"recall": bagginObject.performanceData.scoreData[1]})
            performance.update({"precision": bagginObject.performanceData.scoreData[2]})
            performance.update({"neg_log_loss": bagginObject.performanceData.scoreData[3]})
            performance.update({"f1": bagginObject.performanceData.scoreData[4]})
            performance.update({"fbeta": bagginObject.performanceData.scoreData[5]})

            self.response.update({"Performance": performance})

            print bagginObject.performanceData.scoreData

            errorData = {}
            #hacemos las ejecuciones para obtener los validadores
            try:
                #curva roc
                curveRocObject = createRocCurve.curveRoc(self.data, self.target, bagginObject.model, self.validation, self.user, self.job, self.pathResponse)
                curveRocObject.createCurveROC()
                errorData.update({"curveRoc" : "ok"})
            except:
                errorData.update({"curveRoc" : "error"})
                pass

            try:

                #precision-recall curve
                precisionCurve = createPrecisionRecallCurve.curvePrecision(self.data, self.target, bagginObject.model, self.validation, self.user, self.job, self.pathResponse)
                precisionCurve.plot_precision_and_recall_curve()
                errorData.update({"precisionCurve" : "ok"})
            except:
                errorData.update({"precisionCurve" : "error"})
                pass

            try:

                #learning curve
                learningCurveDemo = createLearningCurve.curveLearning(self.data, self.target, bagginObject.model, self.validation, self.user, self.job, self.pathResponse)
                learningCurveDemo.createLearningCurve()
                errorData.update({"curveLearning" : "ok"})
            except:
                errorData.update({"curveLearning" : "error"})
                pass

            try:
                #confusion matrix data
                confusionMatrixDemo = createConfusionMatrix.confusionMatrix(self.data, self.target, bagginObject.model, self.validation, self.user, self.job, self.pathResponse, self.classArray)
                confusionMatrixDemo.createConfusionMatrix()
                errorData.update({"confusionMatrix" : "ok"})
            except:
                errorData.update({"confusionMatrix" : "error"})
                pass

            self.response.update({"errorExec": errorData})

            #exportamos tambien el resultado del json
            nameFile =self.pathResponse+self.user+"/"+self.job+"/responseTraining"+str(self.job)+".json"
            print nameFile
            with open(self.pathResponse+self.user+"/"+self.job+"/responseTraining"+str(self.job)+".json", 'w') as fp:
                json.dump(self.response, fp)
