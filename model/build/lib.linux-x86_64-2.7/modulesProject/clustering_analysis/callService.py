'''
Clase que tiene la responsabilidad de ejecutar el servicio de clustering mediante el proceso de un job
lo cual implica llamadas de servicio en background, ejecutar todos los procesos de clustering, con diferentes parametros
y respuestas asociadas.

Genera como salida un archivo csv con la informacion mas dos histogramas que representan las mediciones de calinski
y coeficiente de siluetas, ademas de un archivo json con el resumen del proceso

Recibe como entrada el set de datos normalizado, el id del job y del usuario, con el fin de alojar los resultados en dicho
directorio

# NOTE: en el servicio de clustering, se prueban todos los metodos sin necesidad de que el usuario seleccione alguno, por lo que
la implementacion de este servicio, es mas sencilla en comparacion a la del servicio de aprendizaje supervisado
'''

from modulesProject.clustering_analysis import processClustering
from modulesProject.clustering_analysis import evaluationClustering
from modulesProject.statistics_analysis import createHistogram
import pandas as pd

class serviceClustering(object):

    def __init__(self, dataSet, job, user, pathResponse):

        self.dataSet = dataSet
        self.job = job
        self.user = user
        self.pathResponse = pathResponse
        self.applyClustering = processClustering.aplicateClustering(self.dataSet)

    #metodo que permite hacer la ejecucion del servicio...
    def execProcess(self):

        header = ["algorithm", "params", "groups", "calinski_harabaz_score", "silhouette_score"]
        responseProcess = []
        logResponsesError = []
        indexResponse = []
        indexResponseError = []

        contIndex = 0
        contIndexError = 0

        print "Process K-Means"
        #aplicamos k-means variando el numero de k
        for k in range (2, 10):
            try:
                self.applyClustering.aplicateKMeans(k)#se aplica el algoritmo...
                result = evaluationClustering.evaluationClustering(self.dataSet, self.applyClustering.labels)#evaluamos...
                params = "K = %d" % k
                numberGroups = len(list(set(self.applyClustering.labels)))
                response = ["K-Means", params, numberGroups, result.calinski, result.siluetas]
                responseProcess.append(response)
                contIndex+=1
                indexResponse.append(contIndex)
            except:
                message = "Error exec K-Means with K %d" % k
                logResponsesError.append(message)
                contIndexError+=1
                indexResponseError.append(contIndexError)

        #aplicamos MeanShift...
        print "Process MeanShift"
        try:
            self.applyClustering.aplicateMeanShift()#se aplica el algoritmo...
            result = evaluationClustering.evaluationClustering(self.dataSet, self.applyClustering.labels)#evaluamos...
            numberGroups = len(list(set(self.applyClustering.labels)))
            response = ["MeanShift", "Default", numberGroups, result.calinski, result.siluetas]
            responseProcess.append(response)
            contIndex+=1
            indexResponse.append(contIndex)
        except:
            message = "Error exec MeanShift"
            logResponsesError.append(message)
            contIndexError+=1
            indexResponseError.append(contIndexError)

        #aplicamos DBSCAN
        print "Process DBSCAN"
        try:
            self.applyClustering.aplicateDBSCAN()#se aplica el algoritmo...
            result = evaluationClustering.evaluationClustering(self.dataSet, self.applyClustering.labels)#evaluamos...
            numberGroups = len(list(set(self.applyClustering.labels)))
            response = ["DBSCAN", "Default", numberGroups, result.calinski, result.siluetas]
            responseProcess.append(response)
            contIndex+=1
            indexResponse.append(contIndex)
        except:
            message = "Error exec DBSCAN"
            logResponsesError.append(message)
            contIndexError+=1
            indexResponseError.append(contIndexError)

        #aplicamos aplicateAffinityPropagation
        print "Process AffinityPropagation"
        try:
            self.applyClustering.aplicateAffinityPropagation()#se aplica el algoritmo...
            result = evaluationClustering.evaluationClustering(self.dataSet, self.applyClustering.labels)#evaluamos...
            numberGroups = len(list(set(self.applyClustering.labels)))
            response = ["AffinityPropagation", "Default", numberGroups, result.calinski, result.siluetas]
            responseProcess.append(response)
            contIndex+=1
            indexResponse.append(contIndex)
        except:
            message = "Error exec AffinityPropagation"
            logResponsesError.append(message)
            contIndexError+=1
            indexResponseError.append(contIndexError)

        #aplicamos Birch
        print "Process Birch"
        for k in range (2, 10):
            try:
                self.applyClustering.aplicateBirch(k)#se aplica el algoritmo...
                result = evaluationClustering.evaluationClustering(self.dataSet, self.applyClustering.labels)#evaluamos...
                params = "K = %d" % k
                numberGroups = len(list(set(self.applyClustering.labels)))
                response = ["Birch", params, numberGroups, result.calinski, result.siluetas]
                responseProcess.append(response)
                contIndex+=1
                indexResponse.append(contIndex)
            except:
                message = "Error exec Birch with K %d" % k
                logResponsesError.append(message)
                contIndexError+=1
                indexResponseError.append(contIndexError)

        #aplicamos AgglomerativeClustering
        print "Process AgglomerativeClustering"
        for k in range (2, 10):
            for affinity in ['euclidean', 'l1', 'l2', 'manhattan', 'cosine', 'precomputed']:
                for linkage in ['ward', 'complete', 'average', 'single']:
                    try:
                        self.applyClustering.aplicateAlgomerativeClustering(linkage, affinity, k)#se aplica el algoritmo...
                        result = evaluationClustering.evaluationClustering(self.dataSet, self.applyClustering.labels)#evaluamos...
                        params = "affinity = %s linkage = %s k = %d" % (affinity, linkage, k)
                        numberGroups = len(list(set(self.applyClustering.labels)))
                        response = ["AgglomerativeClustering", params, numberGroups, result.calinski, result.siluetas]
                        responseProcess.append(response)
                        contIndex+=1
                        indexResponse.append(contIndex)
                    except:
                        params = "affinity = %s linkage = %s k = %d" % (affinity, linkage, k)
                        message = "Error exec AgglomerativeClustering with params %s" % params
                        logResponsesError.append(message)
                        contIndexError+=1
                        indexResponseError.append(contIndexError)

        #exportamos el resultado en formato dataframe
        dataFrame = pd.DataFrame(responseProcess, columns=header, index=indexResponse)
        dataFrameLog = pd.DataFrame(logResponsesError, columns=["Message Error"], index = indexResponseError)
        dataFrame.to_csv(self.pathResponse+self.user+"/"+self.job+"/ResponseProcess_Job_Clustering.csv")
        dataFrameLog.to_csv(self.pathResponse+self.user+"/"+self.job+"/ResponseProcess_Job_Clustering_Error.csv")


        #generamos histogramas asociados al proceso y los resultados obtenidos...
        #createHistogramObject = createHistogram.histograme(dataFrame)
        #createHistogramObject.generateHistogram('calinski_harabaz_score', self.pathResponse+self.user+"/"+self.job+"/calinski_harabaz_score.svg", "Histogram for calinski harabaz score")
        #createHistogramObject.generateHistogram('silhouette_score', self.pathResponse+self.user+"/"+self.job+"/silhouette_score.svg", "Histogram for silhouette score")
