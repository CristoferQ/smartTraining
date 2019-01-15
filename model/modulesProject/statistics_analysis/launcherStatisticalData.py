'''
script que permite poder ejecutar las diversas operaciones asociadas a los procesos de analisis estadisticos
que son requeridos durante la ejecucion del proceso...

En general, el proceso consta de:

1. Recuperar la opcion
2. Obtener las caracteristicas y sus tipos
3. Aplicar el proceso segun el tipo que corresponda
4. Generar los archivos de salida
5. Cambiar status de job con respecto a la ejecucion del proceso

'''
from modulesProject.statistics_analysis import getFeatures

#definicion de la clase
class launcherStatisticalProcess(object):

    def __init__(self, user, job, dataSet, idDataSet, pathResponse, optionProcess, scale):

        self.user = user
        self.job = job
        self.dataSet = dataSet
        self.idDataSet = idDataSet
        self.pathResponse = pathResponse
        self.optionProcess = optionProcess
        self.scale = scale

        #process feature...
        self.handlerFeature = getFeatures.processFeatureInDataSet(self.dataSet, self.idDataSet)
        self.handlerFeature.processDataValues()

        #ejemplo de acceder...
        print self.handlerFeature.listFeatures[0].nameData
        print self.handlerFeature.listFeatures[0].kindData

    #metodo que permite evaluar la opcion a ejecutar...
    def checkExec(self):

        if self.optionProcess == 1:#distribution data
            print "distribucion acumulada" #esto es una imagen
            print "histogramas"#esto es un key -> array data, por cada tipo de dato continuo
            print "prueba de normalidad"#esto es un grafico
            print "test de shapiro"#esto es un key -> data

        elif self.optionProcess == 2:#boxplot
            print "boxplot"#esto es un key -> array data, por cada tipo de dato continuo
            print "get outliers"#esto es chavenaut
            print "violin plot"#esto es un key -> array data, por cada tipo de dato continuo

        elif self.optionProcess == 3:#frecuence
            print "frecuence-pie charts"#datos discretos

        elif self.optionProcess == 4:#parallel
            print "parallel"#esto es una mezcla

        elif self.optionProcess == 5:#error plots
            print "error plots"#esto es solo para las variables continuas

        elif self.optionProcess == 6:#sploms
            print "sploms"#esto es una mezcla

        else:
            print "summary statistical"#aca es hacer un csv con los valores obtenidos
