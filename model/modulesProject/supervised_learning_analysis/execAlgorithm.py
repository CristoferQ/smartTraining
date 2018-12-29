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
            performance.update({"accuracy":AdaBoostObject.performanceData.scoreData[3]})
            performance.update({"recall": AdaBoostObject.performanceData.scoreData[4]})
            performance.update({"precision": AdaBoostObject.performanceData.scoreData[5]})
            performance.update({"neg_log_loss": AdaBoostObject.performanceData.scoreData[6]})
            performance.update({"f1": AdaBoostObject.performanceData.scoreData[7]})
            performance.update({"fbeta": AdaBoostObject.performanceData.scoreData[8]})

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
            performance.update({"accuracy":bagginObject.performanceData.scoreData[3]})
            performance.update({"recall": bagginObject.performanceData.scoreData[4]})
            performance.update({"precision": bagginObject.performanceData.scoreData[5]})
            performance.update({"neg_log_loss": bagginObject.performanceData.scoreData[6]})
            performance.update({"f1": bagginObject.performanceData.scoreData[7]})
            performance.update({"fbeta": bagginObject.performanceData.scoreData[8]})

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

            self.response.update({"algorithm": "BernoulliNB"})
            paramsData = {}
            self.response.update({"Params": "Default"})
            self.response.update({"Validation": "Cross Validation: " + str(self.validation)})

            #instancia al objeto...
            bernoulliNB = BernoulliNB.Bernoulli(self.data, self.target, self.validation)
            bernoulliNB.trainingMethod()
            performance = {}
            performance.update({"accuracy":bernoulliNB.performanceData.scoreData[3]})
            performance.update({"recall": bernoulliNB.performanceData.scoreData[4]})
            performance.update({"precision": bernoulliNB.performanceData.scoreData[5]})
            performance.update({"neg_log_loss": bernoulliNB.performanceData.scoreData[6]})
            performance.update({"f1": bernoulliNB.performanceData.scoreData[7]})
            performance.update({"fbeta": bernoulliNB.performanceData.scoreData[8]})

            self.response.update({"Performance": performance})

            print bernoulliNB.performanceData.scoreData

            errorData = {}
            #hacemos las ejecuciones para obtener los validadores
            try:
                #curva roc
                curveRocObject = createRocCurve.curveRoc(self.data, self.target, bernoulliNB.model, self.validation, self.user, self.job, self.pathResponse)
                curveRocObject.createCurveROC()
                errorData.update({"curveRoc" : "ok"})
            except:
                errorData.update({"curveRoc" : "error"})
                pass

            try:

                #precision-recall curve
                precisionCurve = createPrecisionRecallCurve.curvePrecision(self.data, self.target, bernoulliNB.model, self.validation, self.user, self.job, self.pathResponse)
                precisionCurve.plot_precision_and_recall_curve()
                errorData.update({"precisionCurve" : "ok"})
            except:
                errorData.update({"precisionCurve" : "error"})
                pass

            try:

                #learning curve
                learningCurveDemo = createLearningCurve.curveLearning(self.data, self.target, bernoulliNB.model, self.validation, self.user, self.job, self.pathResponse)
                learningCurveDemo.createLearningCurve()
                errorData.update({"curveLearning" : "ok"})
            except:
                errorData.update({"curveLearning" : "error"})
                pass

            try:
                #confusion matrix data
                confusionMatrixDemo = createConfusionMatrix.confusionMatrix(self.data, self.target, bernoulliNB.model, self.validation, self.user, self.job, self.pathResponse, self.classArray)
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

        elif self.algorithm == 4:#DecisionTree

            self.response.update({"algorithm": "DecisionTree"})
            paramsData = {}
            paramsData.update({"criterion": self.params[0]})
            paramsData.update({"splitter": self.params[1]})
            self.response.update({"Params": paramsData})
            self.response.update({"Validation": "Cross Validation: " + str(self.validation)})

            #instancia al objeto...
            decisionTreeObject = DecisionTree.DecisionTree(self.data, self.target, self.params[0], self.params[1],self.validation)
            decisionTreeObject.trainingMethod()
            performance = {}
            performance.update({"accuracy":decisionTreeObject.performanceData.scoreData[3]})
            performance.update({"recall": decisionTreeObject.performanceData.scoreData[4]})
            performance.update({"precision": decisionTreeObject.performanceData.scoreData[5]})
            performance.update({"neg_log_loss": decisionTreeObject.performanceData.scoreData[6]})
            performance.update({"f1": decisionTreeObject.performanceData.scoreData[7]})
            performance.update({"fbeta": decisionTreeObject.performanceData.scoreData[8]})

            self.response.update({"Performance": performance})

            print decisionTreeObject.performanceData.scoreData

            errorData = {}
            #hacemos las ejecuciones para obtener los validadores
            try:
                #curva roc
                curveRocObject = createRocCurve.curveRoc(self.data, self.target, decisionTreeObject.model, self.validation, self.user, self.job, self.pathResponse)
                curveRocObject.createCurveROC()
                errorData.update({"curveRoc" : "ok"})
            except:
                errorData.update({"curveRoc" : "error"})
                pass

            try:

                #precision-recall curve
                precisionCurve = createPrecisionRecallCurve.curvePrecision(self.data, self.target, decisionTreeObject.model, self.validation, self.user, self.job, self.pathResponse)
                precisionCurve.plot_precision_and_recall_curve()
                errorData.update({"precisionCurve" : "ok"})
            except:
                errorData.update({"precisionCurve" : "error"})
                pass

            try:

                #learning curve
                learningCurveDemo = createLearningCurve.curveLearning(self.data, self.target, decisionTreeObject.model, self.validation, self.user, self.job, self.pathResponse)
                learningCurveDemo.createLearningCurve()
                errorData.update({"curveLearning" : "ok"})
            except:
                errorData.update({"curveLearning" : "error"})
                pass

            try:
                #confusion matrix data
                confusionMatrixDemo = createConfusionMatrix.confusionMatrix(self.data, self.target, decisionTreeObject.model, self.validation, self.user, self.job, self.pathResponse, self.classArray)
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

        elif self.algorithm == 5:#Gaussian

            self.response.update({"algorithm": "GaussianNB"})
            paramsData = {}
            self.response.update({"Params": "Default"})
            self.response.update({"Validation": "Cross Validation: " + str(self.validation)})

            #instancia al objeto...
            gaussianObject = GaussianNB.Gaussian(self.data, self.target, self.validation)
            gaussianObject.trainingMethod()
            performance = {}
            performance.update({"accuracy":gaussianObject.performanceData.scoreData[3]})
            performance.update({"recall": gaussianObject.performanceData.scoreData[4]})
            performance.update({"precision": gaussianObject.performanceData.scoreData[5]})
            performance.update({"neg_log_loss": gaussianObject.performanceData.scoreData[6]})
            performance.update({"f1": gaussianObject.performanceData.scoreData[7]})
            performance.update({"fbeta": gaussianObject.performanceData.scoreData[8]})

            self.response.update({"Performance": performance})

            print gaussianObject.performanceData.scoreData

            errorData = {}
            #hacemos las ejecuciones para obtener los validadores
            try:
                #curva roc
                curveRocObject = createRocCurve.curveRoc(self.data, self.target, gaussianObject.model, self.validation, self.user, self.job, self.pathResponse)
                curveRocObject.createCurveROC()
                errorData.update({"curveRoc" : "ok"})
            except:
                errorData.update({"curveRoc" : "error"})
                pass

            try:

                #precision-recall curve
                precisionCurve = createPrecisionRecallCurve.curvePrecision(self.data, self.target, gaussianObject.model, self.validation, self.user, self.job, self.pathResponse)
                precisionCurve.plot_precision_and_recall_curve()
                errorData.update({"precisionCurve" : "ok"})
            except:
                errorData.update({"precisionCurve" : "error"})
                pass

            try:

                #learning curve
                learningCurveDemo = createLearningCurve.curveLearning(self.data, self.target, gaussianObject.model, self.validation, self.user, self.job, self.pathResponse)
                learningCurveDemo.createLearningCurve()
                errorData.update({"curveLearning" : "ok"})
            except:
                errorData.update({"curveLearning" : "error"})
                pass

            try:
                #confusion matrix data
                confusionMatrixDemo = createConfusionMatrix.confusionMatrix(self.data, self.target, gaussianObject.model, self.validation, self.user, self.job, self.pathResponse, self.classArray)
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

        elif self.algorithm == 6:#Gradient

            self.response.update({"algorithm": "GradientBoostingClassifier"})
            paramsData = {}
            paramsData.update({"n_estimators":self.params[0]})
            paramsData.update({"loss":self.params[1]})
            paramsData.update({"min_samples_leaf":self.params[2]})
            paramsData.update({"min_samples_split":self.params[3]})

            self.response.update({"Params": paramsData})
            self.response.update({"Validation": "Cross Validation: " + str(self.validation)})

            #instancia al objeto...
            gradientObject = Gradient.Gradient(self.data,self.target,int(self.params[0]), self.params[1], int(self.params[2]), int(self.params[3]),self.validation)
            gradientObject.trainingMethod()

            performance = {}
            performance.update({"accuracy":gradientObject.performanceData.scoreData[3]})
            performance.update({"recall": gradientObject.performanceData.scoreData[4]})
            performance.update({"precision": gradientObject.performanceData.scoreData[5]})
            performance.update({"neg_log_loss": gradientObject.performanceData.scoreData[6]})
            performance.update({"f1": gradientObject.performanceData.scoreData[7]})
            performance.update({"fbeta": gradientObject.performanceData.scoreData[8]})

            self.response.update({"Performance": performance})

            print gradientObject.performanceData.scoreData

            errorData = {}
            #hacemos las ejecuciones para obtener los validadores
            try:
                #curva roc
                curveRocObject = createRocCurve.curveRoc(self.data, self.target, gradientObject.model, self.validation, self.user, self.job, self.pathResponse)
                curveRocObject.createCurveROC()
                errorData.update({"curveRoc" : "ok"})
            except:
                errorData.update({"curveRoc" : "error"})
                pass

            try:

                #precision-recall curve
                precisionCurve = createPrecisionRecallCurve.curvePrecision(self.data, self.target, gradientObject.model, self.validation, self.user, self.job, self.pathResponse)
                precisionCurve.plot_precision_and_recall_curve()
                errorData.update({"precisionCurve" : "ok"})
            except:
                errorData.update({"precisionCurve" : "error"})
                pass

            try:

                #learning curve
                learningCurveDemo = createLearningCurve.curveLearning(self.data, self.target, gradientObject.model, self.validation, self.user, self.job, self.pathResponse)
                learningCurveDemo.createLearningCurve()
                errorData.update({"curveLearning" : "ok"})
            except:
                errorData.update({"curveLearning" : "error"})
                pass

            try:
                #confusion matrix data
                confusionMatrixDemo = createConfusionMatrix.confusionMatrix(self.data, self.target, gradientObject.model, self.validation, self.user, self.job, self.pathResponse, self.classArray)
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

        elif self.algorithm == 7:#KNN

            self.response.update({"algorithm": "KNeighborsClassifier"})
            paramsData = {}
            paramsData.update({"n_neighbors":self.params[0]})
            paramsData.update({"algorithm":self.params[1]})
            paramsData.update({"metric":self.params[2]})
            paramsData.update({"weights":self.params[3]})

            self.response.update({"Params": paramsData})
            self.response.update({"Validation": "Cross Validation: " + str(self.validation)})

            #instancia al objeto...
            knnObect = knn.knn(self.data, self.target, int(self.params[0]), self.params[1], self.params[2], self.params[3], self.validation)
            knnObect.trainingMethod()

            performance = {}
            performance.update({"accuracy":knnObect.performanceData.scoreData[3]})
            performance.update({"recall": knnObect.performanceData.scoreData[4]})
            performance.update({"precision": knnObect.performanceData.scoreData[5]})
            performance.update({"neg_log_loss": knnObect.performanceData.scoreData[6]})
            performance.update({"f1": knnObect.performanceData.scoreData[7]})
            performance.update({"fbeta": knnObect.performanceData.scoreData[8]})

            self.response.update({"Performance": performance})

            print knnObect.performanceData.scoreData

            errorData = {}
            #hacemos las ejecuciones para obtener los validadores
            try:
                #curva roc
                curveRocObject = createRocCurve.curveRoc(self.data, self.target, knnObect.model, self.validation, self.user, self.job, self.pathResponse)
                curveRocObject.createCurveROC()
                errorData.update({"curveRoc" : "ok"})
            except:
                errorData.update({"curveRoc" : "error"})
                pass

            try:

                #precision-recall curve
                precisionCurve = createPrecisionRecallCurve.curvePrecision(self.data, self.target, knnObect.model, self.validation, self.user, self.job, self.pathResponse)
                precisionCurve.plot_precision_and_recall_curve()
                errorData.update({"precisionCurve" : "ok"})
            except:
                errorData.update({"precisionCurve" : "error"})
                pass

            try:

                #learning curve
                learningCurveDemo = createLearningCurve.curveLearning(self.data, self.target, knnObect.model, self.validation, self.user, self.job, self.pathResponse)
                learningCurveDemo.createLearningCurve()
                errorData.update({"curveLearning" : "ok"})
            except:
                errorData.update({"curveLearning" : "error"})
                pass

            try:
                #confusion matrix data
                confusionMatrixDemo = createConfusionMatrix.confusionMatrix(self.data, self.target, knnObect.model, self.validation, self.user, self.job, self.pathResponse, self.classArray)
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

        elif self.algorithm == 8:#MLP

            self.response.update({"algorithm": "MLPClassifier"})
            paramsData = {}
            paramsData.update({"activation":self.params[0]})
            paramsData.update({"solver":self.params[1]})
            paramsData.update({"learning_rate":self.params[2]})
            paramsData.update({"hidden_layer_sizes_a":self.params[3]})
            paramsData.update({"hidden_layer_sizes_b":self.params[4]})
            paramsData.update({"hidden_layer_sizes_c":self.params[5]})
            paramsData.update({"alpha":self.params[6]})
            paramsData.update({"max_iter":self.params[7]})
            paramsData.update({"shuffle":self.params[8]})

            self.response.update({"Params": paramsData})
            self.response.update({"Validation": "Cross Validation: " + str(self.validation)})

            #instancia al objeto...
            MLPObject = MLP.MLP(self.data,self.target, self.params[0], self.params[1], self.params[2], int(self.params[3]), int(self.params[4]), int(self.params[5]), float(self.params[6]), int(self.params[7]), self.params[8], self.validation)
            MLPObject.trainingMethod()

            performance = {}
            performance.update({"accuracy":MLPObject.performanceData.scoreData[3]})
            performance.update({"recall": MLPObject.performanceData.scoreData[4]})
            performance.update({"precision": MLPObject.performanceData.scoreData[5]})
            performance.update({"neg_log_loss": MLPObject.performanceData.scoreData[6]})
            performance.update({"f1": MLPObject.performanceData.scoreData[7]})
            performance.update({"fbeta": MLPObject.performanceData.scoreData[8]})

            self.response.update({"Performance": performance})

            print MLPObject.performanceData.scoreData

            errorData = {}
            #hacemos las ejecuciones para obtener los validadores
            try:
                #curva roc
                curveRocObject = createRocCurve.curveRoc(self.data, self.target, MLPObject.model, self.validation, self.user, self.job, self.pathResponse)
                curveRocObject.createCurveROC()
                errorData.update({"curveRoc" : "ok"})
            except:
                errorData.update({"curveRoc" : "error"})
                pass

            try:

                #precision-recall curve
                precisionCurve = createPrecisionRecallCurve.curvePrecision(self.data, self.target, MLPObject.model, self.validation, self.user, self.job, self.pathResponse)
                precisionCurve.plot_precision_and_recall_curve()
                errorData.update({"precisionCurve" : "ok"})
            except:
                errorData.update({"precisionCurve" : "error"})
                pass

            try:

                #learning curve
                learningCurveDemo = createLearningCurve.curveLearning(self.data, self.target, MLPObject.model, self.validation, self.user, self.job, self.pathResponse)
                learningCurveDemo.createLearningCurve()
                errorData.update({"curveLearning" : "ok"})
            except:
                errorData.update({"curveLearning" : "error"})
                pass

            try:
                #confusion matrix data
                confusionMatrixDemo = createConfusionMatrix.confusionMatrix(self.data, self.target, MLPObject.model, self.validation, self.user, self.job, self.pathResponse, self.classArray)
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

        elif self.algorithm == 9:#NuSVC

            self.response.update({"algorithm": "NuSVC"})
            paramsData = {}
            paramsData.update({"kernel":self.params[0]})
            paramsData.update({"nu":self.params[1]})
            paramsData.update({"degree":self.params[2]})
            paramsData.update({"gamma":self.params[3]})

            self.response.update({"Params": paramsData})
            self.response.update({"Validation": "Cross Validation: " + str(self.validation)})

            #instancia al objeto...
            nuSVM = NuSVM.NuSVM(self.data,self.target,self.params[0], float(self.params[1]), int(self.params[2]), float(self.params[3]), self.validation)
            nuSVM.trainingMethod()

            performance = {}
            performance.update({"accuracy":nuSVM.performanceData.scoreData[3]})
            performance.update({"recall": nuSVM.performanceData.scoreData[4]})
            performance.update({"precision": nuSVM.performanceData.scoreData[5]})
            performance.update({"neg_log_loss": nuSVM.performanceData.scoreData[6]})
            performance.update({"f1": nuSVM.performanceData.scoreData[7]})
            performance.update({"fbeta": nuSVM.performanceData.scoreData[8]})

            self.response.update({"Performance": performance})

            print nuSVM.performanceData.scoreData

            errorData = {}
            #hacemos las ejecuciones para obtener los validadores
            try:
                #curva roc
                curveRocObject = createRocCurve.curveRoc(self.data, self.target, nuSVM.model, self.validation, self.user, self.job, self.pathResponse)
                curveRocObject.createCurveROC()
                errorData.update({"curveRoc" : "ok"})
            except:
                errorData.update({"curveRoc" : "error"})
                pass

            try:

                #precision-recall curve
                precisionCurve = createPrecisionRecallCurve.curvePrecision(self.data, self.target, nuSVM.model, self.validation, self.user, self.job, self.pathResponse)
                precisionCurve.plot_precision_and_recall_curve()
                errorData.update({"precisionCurve" : "ok"})
            except:
                errorData.update({"precisionCurve" : "error"})
                pass

            try:

                #learning curve
                learningCurveDemo = createLearningCurve.curveLearning(self.data, self.target, nuSVM.model, self.validation, self.user, self.job, self.pathResponse)
                learningCurveDemo.createLearningCurve()
                errorData.update({"curveLearning" : "ok"})
            except:
                errorData.update({"curveLearning" : "error"})
                pass

            try:
                #confusion matrix data
                confusionMatrixDemo = createConfusionMatrix.confusionMatrix(self.data, self.target, nuSVM.model, self.validation, self.user, self.job, self.pathResponse, self.classArray)
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

        elif self.algorithm == 10:#RandomForest

            self.response.update({"algorithm": "RandomForest"})
            paramsData = {}
            paramsData.update({"n_estimators":self.params[0]})
            paramsData.update({"criterion":self.params[1]})
            paramsData.update({"min_samples_split":self.params[2]})
            paramsData.update({"min_samples_leaf":self.params[3]})
            paramsData.update({"bootstrap":self.params[4]})

            self.response.update({"Params": paramsData})
            self.response.update({"Validation": "Cross Validation: " + str(self.validation)})

            #instancia al objeto...
            rf = RandomForest.RandomForest(self.data,self.target, int(self.params[0]),self.params[1], int(self.params[2]), int(self.params[3]), self.params[4], self.validation)
            rf.trainingMethod()

            performance = {}
            performance.update({"accuracy":rf.performanceData.scoreData[3]})
            performance.update({"recall": rf.performanceData.scoreData[4]})
            performance.update({"precision": rf.performanceData.scoreData[5]})
            performance.update({"neg_log_loss": rf.performanceData.scoreData[6]})
            performance.update({"f1": rf.performanceData.scoreData[7]})
            performance.update({"fbeta": rf.performanceData.scoreData[8]})

            self.response.update({"Performance": performance})

            print rf.performanceData.scoreData

            errorData = {}
            #hacemos las ejecuciones para obtener los validadores
            try:
                #curva roc
                curveRocObject = createRocCurve.curveRoc(self.data, self.target, rf.model, self.validation, self.user, self.job, self.pathResponse)
                curveRocObject.createCurveROC()
                errorData.update({"curveRoc" : "ok"})
            except:
                errorData.update({"curveRoc" : "error"})
                pass

            try:

                #precision-recall curve
                precisionCurve = createPrecisionRecallCurve.curvePrecision(self.data, self.target, rf.model, self.validation, self.user, self.job, self.pathResponse)
                precisionCurve.plot_precision_and_recall_curve()
                errorData.update({"precisionCurve" : "ok"})
            except:
                errorData.update({"precisionCurve" : "error"})
                pass

            try:

                #learning curve
                learningCurveDemo = createLearningCurve.curveLearning(self.data, self.target, rf.model, self.validation, self.user, self.job, self.pathResponse)
                learningCurveDemo.createLearningCurve()
                errorData.update({"curveLearning" : "ok"})
            except:
                errorData.update({"curveLearning" : "error"})
                pass

            try:
                #confusion matrix data
                confusionMatrixDemo = createConfusionMatrix.confusionMatrix(self.data, self.target, rf.model, self.validation, self.user, self.job, self.pathResponse, self.classArray)
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

        elif self.algorithm == 11:#SVC

            self.response.update({"algorithm": "SVC"})
            paramsData = {}
            paramsData.update({"kernel":self.params[0]})
            paramsData.update({"C_value":self.params[1]})
            paramsData.update({"degree":self.params[2]})
            paramsData.update({"gamma":self.params[3]})

            self.response.update({"Params": paramsData})
            self.response.update({"Validation": "Cross Validation: " + str(self.validation)})

            #instancia al objeto...
            svm = SVM.SVM(self.data, self.target, self.params[0], float(self.params[1]), int(self.params[2]), float(self.params[3]), self.validation)
            svm.trainingMethod()

            performance = {}
            performance.update({"accuracy":svm.performanceData.scoreData[3]})
            performance.update({"recall": svm.performanceData.scoreData[4]})
            performance.update({"precision": svm.performanceData.scoreData[5]})
            performance.update({"neg_log_loss": svm.performanceData.scoreData[6]})
            performance.update({"f1": svm.performanceData.scoreData[7]})
            performance.update({"fbeta": svm.performanceData.scoreData[8]})

            self.response.update({"Performance": performance})

            print svm.performanceData.scoreData

            errorData = {}
            #hacemos las ejecuciones para obtener los validadores
            try:
                #curva roc
                curveRocObject = createRocCurve.curveRoc(self.data, self.target, svm.model, self.validation, self.user, self.job, self.pathResponse)
                curveRocObject.createCurveROC()
                errorData.update({"curveRoc" : "ok"})
            except:
                errorData.update({"curveRoc" : "error"})
                pass

            try:

                #precision-recall curve
                precisionCurve = createPrecisionRecallCurve.curvePrecision(self.data, self.target, svm.model, self.validation, self.user, self.job, self.pathResponse)
                precisionCurve.plot_precision_and_recall_curve()
                errorData.update({"precisionCurve" : "ok"})
            except:
                errorData.update({"precisionCurve" : "error"})
                pass

            try:

                #learning curve
                learningCurveDemo = createLearningCurve.curveLearning(self.data, self.target, svm.model, self.validation, self.user, self.job, self.pathResponse)
                learningCurveDemo.createLearningCurve()
                errorData.update({"curveLearning" : "ok"})
            except:
                errorData.update({"curveLearning" : "error"})
                pass

            try:
                #confusion matrix data
                confusionMatrixDemo = createConfusionMatrix.confusionMatrix(self.data, self.target, svm.model, self.validation, self.user, self.job, self.pathResponse, self.classArray)
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
