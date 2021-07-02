# docker_training_2021
1) Crée un Dockerfile pour cree le conteneur
2) Lance la creation de l'image avec la commande (le . fait reference fichier courant)
```
docker build -t com-0 .
docker build -t com-1 .
docker build -t registry .
docker build -t broker .
```

3) Lance les conteneurs (container : app)
```
docker run -p 8080:8080 registry
docker run -p 80:80 broker
docker run -p 4567:4567 com-0
docker run -p 5372:5372 com-1
```
