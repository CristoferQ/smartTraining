'''
script que recibe un set de datos y retorna en formato json la lista de valores asociados a la key del data set asociado
a la respuesta...
'''

import json

class searchData(object):

    def __init__(self, dataSet, key):

        self.dataSet = dataSet
        self.key = key

    #metodo que permite hacer la busqueda de los elementos...
    def searchValues(self):

        dictData = {}
        values = []
        for i in range (len(self.dataSet)):
            values.append(self.dataSet[self.key][i])

        dictData.update({"response":values})
        print json.dumps(dictData)
