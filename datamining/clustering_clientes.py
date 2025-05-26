import pandas as pd
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

df = pd.read_csv('clientes.csv')

kmeans = KMeans(n_clusters=3, n_init=10)
df['cluster'] = kmeans.fit_predict(df[['gastos', 'compras']])

plt.scatter(df['gastos'], df['compras'], c=df['cluster'])
plt.xlabel('Gastos')
plt.ylabel('Compras')
plt.title('Cluster de Clientes')
plt.show()

print(df)

