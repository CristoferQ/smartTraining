'''
script que permite ejecutar el clustering el cual ha sido seleccionado via web, recibe los parametros y genera los resultados pertinentes,
ademas trabaja con formato json para poder generar la lectura desde el javascript en el lado web y hacer la carga de los elementos de una
manera mas sencilla
'''

from modulesProject.clustering_analysis import execAlgorithm
import pandas as pd
import sys

#recibimos los datos de entrada...
dataSet = pd.read_csv(sys.argv[1])
user = sys.argv[2]
job = sys.argv[3]
pathResponse = sys.argv[4]
algorithm = int(sys.argv[5])

if algorithm <4:
    params = sys.argv[6].split("-")
else:
    params = sys.argv[6]

#hacemos la instancia del obeto...
execProcess = execAlgorithm.execAlgorithm(dataSet, user, job, pathResponse, algorithm, params)
execProcess.execAlgorithmByOptions()#hacemos la ejecucion del algoritmo con respecto a la data que se entrego
