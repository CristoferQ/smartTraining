'''
script que permite el testeo de las clases de aprendizaje supervisado para prediccion de elementos
'''

import Gradient
import sys
import pandas as pd

def main():

    print "Init data"
    data = pd.read_csv(sys.argv[1])
    columnas=data.columns.tolist()
    x=columnas[len(columnas)-1]
    response=data[x]
    y=columnas[0:len(columnas)-1]
    dataset=data[y]

    gradient = Gradient.Gradient(dataset,response,100, 'ls', 'friedman_mse', 2, 1)
    gradient.trainingMethod()
    return 0

if __name__ == '__main__':
    main()
