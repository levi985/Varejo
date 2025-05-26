import pandas as pd
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
import numpy as np

df = pd.read_csv('vendas.csv')

X = df[['mes']].values
y = df['total'].values

model = LinearRegression()
model.fit(X, y)

previsao = model.predict(X)

plt.scatter(X, y, color='blue')
plt.plot(X, previsao, color='red')
plt.xlabel('Mês')
plt.ylabel('Total de Vendas')
plt.title('Previsão de Vendas')
plt.show()

print('Coeficiente Angular:', model.coef_)
print('Intercepto:', model.intercept_)

