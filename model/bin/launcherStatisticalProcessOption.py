'''
script que permite hacer los procesos relacionados al manejo estadistico
'''

from modulesProject.statistics_analysis import launcherStatisticalData
import sys

user = sys.argv[1]#test with 1
job = sys.argv[2]#test with 1
dataSet = sys.argv[3]#test with testingFeature.csv
idDataSet = sys.argv[4] #test with 1
pathResponse = sys.argv[5] #cualquiera que desees
optionProcess = sys.argv[6] # las opciones de job posibles, ver checkExec de launcherStatisticalData
scale = sys.argv[7]#el tipo de procesamiento a los datos continuos

#instancia al objeto...
launcherStatisticalDataObject = launcherStatisticalData.launcherStatisticalProcess(user, job, dataSet, idDataSet, pathResponse, optionProcess, scale)
launcherStatisticalDataObject.checkExec()
