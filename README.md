# deno-rest-api


#### build your deno image

```sh
docker build -t radhouenassakra/deno-docker:0.0.1 .
```

#### create an image tag using docker

```sh
docker tag 9c653e86d9c8 radhouenassakra/deno-docker:0.0.1
```

#### docker login

```sh
docker login
```

#### docker push your image
```sh
 docker push radhouenassakra/deno-docker:0.0.1
```
--------------------------------------------------------------------

#### check your minikube ip

```sh
minikube ip
```
#### Change /etc/hosts

```sh
@minikube_ip api.minikube.local //
```

#### Restart  networking  to accept the latest change

```sh
sudo /etc/init.d/networking restart
```
### create a deployment


```sh
kubectl create/apply -f api.yaml
```


### create a service


```sh
kubectl create/apply -f api-service.yaml
```

### create an ingress


```sh
kubectl create/apply -f ingress.yaml
```



