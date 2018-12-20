'''
script que permite tomar la informacion enviada por el formulario, revisa si la mutacion existe y en caso de que exista,
revisa el sector superfice y con el hace la prediccion,
En caso de que todo resulte de manera correcta entrega como resultado el valor de la clase y el valor del predictor...

Las posibles salidas del algoritmo son:

1. Error status 1: Mutacion no existe.
2. Error status -1: No se pudo procesar la informacion por problemas con la posicion entregada...
3. Bien: status 0: Entrega la clase real y la clase obtenida por la prediccion...

Nota: Es importante mencionar que el modelo es un random forest con 100 arboles... => por tiempos de optimizacion,
se trabajara con un algoritmo de arboles de decision debido a que el calculo demora menos y los resultados son iguales...
'''

from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import cross_validate
from sklearn.model_selection import cross_val_score
from sklearn.metrics import confusion_matrix
from sklearn.metrics import fbeta_score, make_scorer
from sklearn.metrics import accuracy_score, cohen_kappa_score, f1_score, precision_score, recall_score
import numpy as np
from sklearn.datasets import make_classification

import os
import sys

#funcion para transformar un arreglo en float...
def transformFloatResponse(listValues):
    response = []
    for element in listValues:
        response.append(float(element))
    return response

#funcion que permite obtener el valor de un aminoacido en numero...
def getValueAA(aminoacido):
    #diccionario con la informacion correspondiente
    dictAA = {'S': 1, 'T':2, 'Q':3, 'N':4, 'Y':5, 'C':6, 'A': 7, 'V': 8, 'L': 9, 'I':10, 'M':11, 'P':12, 'F':13, 'W':14, 'G':15, 'D':16, 'E':17, 'K':18, 'R':19, 'H':20}
    return dictAA[aminoacido]

#obtenemos la informacion de los argumentos...
pos = sys.argv[1]
aawt = sys.argv[2]
aamt = sys.argv[3]
sectorSuperfice = sys.argv[4]

#evaluamos si la posicion entregadas es un numero...
posIsNumber = 0
try:
    valuePos = int(pos)
except:
    posIsNumber=1
    pass

#esto implica que es un error debido a que la posicion no es un numero...
if posIsNumber == 1:
    print -1
    sys.exit(0)
else:

    #hacemos la conversion de los aminoacidos entregados...
    aawtTransform = getValueAA(aawt)
    aamtTransform = getValueAA(aamt)

    #ahora abrimos el archivo en base al sector seleccionado...
    nameFile = "/var/www/html/VHLPredictores/service/dataProcessed/%s_sector.csv" % sectorSuperfice
    fileOpen = open(nameFile, 'r')

    numberLine = -1

    line = fileOpen.readline()
    line = fileOpen.readline()
    valueYDGG=0
    valueMOSST=0
    cont=0

    while line:
        line = line.replace("\n","")
        data = line.split(",")
        if int(data[0]) == aawtTransform and int(data[1]) == aamtTransform:
            numberLine = cont
            valueYDGG = data[7]
            valueMOSST = data[12]
            break
        cont+=1
        line = fileOpen.readline()
    fileOpen.close()

    #preguntamos si la mutacion existe...
    if numberLine == -1:
        print 1
        sys.exit(0)
    else:

        try:
            #hacemos la lectura del archivo normalizado...
            nameFile = "/var/www/html/VHLPredictores/service/dataNormaliced/%s_sector.csv" % sectorSuperfice
            fileOpen = open(nameFile, 'r')
            line = fileOpen.readline()
            line = fileOpen.readline()
            dataInput = []
            dataClass = []
            dataComplet = []
            dataSetTest =[]
            classTest = []

            while line:
                line = line.replace("\n", "")
                data = line.split(",")
                if int(data[-1]) == 1:
                    dataClass.append(0)
                else:
                    dataClass.append(1)
                dataExample = data[:-1]
                dataExample = transformFloatResponse(dataExample)
                dataInput.append(dataExample)
                dataFull = []

                for element in dataExample:
                    dataFull.append(element)
                if int(data[-1]) == 1:
                    dataFull.append(0)
                else:
                    dataFull.append(1)
                dataComplet.append(dataFull)
                line = fileOpen.readline()

            fileOpen.close()

            dataSetTest.append(dataInput[numberLine])
            classTest.append(dataClass[numberLine])

            clf = DecisionTreeClassifier(random_state=0, criterion='gini', splitter='best')
            clf = clf.fit(dataInput, dataClass)
            predictValues =clf.predict(dataSetTest)

            print "C:%s:P:%s:YDGG:%s:MOSST:%s" % (classTest[0], predictValues[0], valueYDGG, valueMOSST)
        except:
            print -1
            sys.exit(0)
            pass
