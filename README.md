# docker_training_2021
1) Crée un Dockerfile pour cree le conteneur
2) Lance la creation de l'image avec la commande (le . fait reference fichier courant)
```
docker build -t srv0 .
docker build -t srv1 .
docker build -t srv2 .
```

3) Lance les conteneurs (container : app)
```
docker run -p 8080:8080 srv2
docker run -p 4567:4567 srv0
docker run -p 5372:5372 srv1
```
