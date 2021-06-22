# NodeJS REST API Serverless con AWS.

Implementación de API REST con integración a SWAPI - The Star Wars API. 

Se divide en 2 procesos:

## **Integracion con SWAPI.**

 Se usara el Endpoint de prueba https://swapi.py4e.com/api/films.

 GET - https://ia34968003.execute-api.us-east-2.amazonaws.com/dev/integrate_swapi
 - Mostrara un listado de películas con los atributos transformados al español.

## **Proceso CRUD (Create, Read, Update, Delete).**

En base a los atributos u objetos transformados, se gestionará por medio de una serie de procesos.

- POST - https://ia34968003.execute-api.us-east-2.amazonaws.com/dev/create
- GET - https://ia34968003.execute-api.us-east-2.amazonaws.com/dev/list
- GET - https://ia34968003.execute-api.us-east-2.amazonaws.com/dev/get_data/{id}
- PUT - https://ia34968003.execute-api.us-east-2.amazonaws.com/dev/update/{id}
- DELETE - https://ia34968003.execute-api.us-east-2.amazonaws.com/dev/delete/{id}

## **Documentación.**
Documentación mas detallada en el archivo **documentation.yaml**

## Pruebas Unitarias:

- Las pruebas unitarias son en local, se enfocan en solo 2 **funciones** serverless:
    - GET - getApi
    - GET - listData
- Ejecutar el comando para hacer la prueba unitaria.
```shell
sls invoke test
```    

## Herramientas:
* NodeJs
* Serverless Framework [https://www.serverless.com/]

## Servicios AWS:
* Lambda.
* DyanmoDB, como base de datos.
* API Gateway.

## Dependencias:
* aws-sdk
* uuid
* axios

## Configuracion:

```shell
npm install
```