'''
script que permite ejecutar el servicio de clustering,
input:
    dataSet
    job
    user
    pathResponse
response:
    csv error process
    csv result process
    histogram calinski
    histogram siluetas
'''

from modulesProject.clustering_analysis import callService
import sys
import pandas as pd

#recibimos los datos de entrada...
dataSet = pd.read_csv(sys.argv[1])
job = sys.argv[2]
user = sys.argv[3]
pathResponse = sys.argv[4]

#instancia al objeto

callServiceObject = callService.serviceClustering(dataSet, job, user, pathResponse)
callServiceObject.execProcess()
