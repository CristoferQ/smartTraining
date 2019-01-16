import numpy as np
from scipy import stats
import pandas as pd
from sklearn.decomposition import KernelPCA

class kpca(object):
	"""docstring for kpca"""
	def __init__(self, user, job, dataset, pathResponse, tipoData):
		self.user = user
		self.job = job
		self.pathResponse = pathResponse
		self.tipoData = tipoData
		self.dataset = pd.read_csv(dataset)
		#self.dataset = dataset

	def doKPCA(self):
		#Mykernel puede ser:
		#linear
		#poly
		#rbf
		#sigmoid
		#cosine
		#precomputed
		okiedoki=""
		try:
			if(self.tipoData == 'CLASS'):
				columns = self.dataset.columns.tolist()
				X_or = self.dataset[columns[0:len(columns)-1]]
			else:
				X_or = self.dataset

			high, width = X_or.shape

			transformer = KernelPCA(n_components=width, kernel='linear')
			Y = transformer.fit_transform(X_or)

			#CSV
			file = "%s%s/%s/KernelPCA_%s.csv" % (self.pathResponse, self.user, self.job, self.job)

			df = pd.DataFrame(Y)
			df.to_csv(file)

			okiedoki = "OK"
			pass
		except Exception as e:
			#raise e
			okiedoki = "ERROR"
			pass
		return okiedoki
