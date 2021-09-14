#  up

##  mongodb
```
k create deployment mongodb  --image=mongo:latest  --port=27017


k expose  deployment mongodb    --port=27017  --target-port=27017

```


##  suer-svc

```
k create deployment user-service  --image=uid4oe/go-ms-user:latest  --port=50051


k expose  deployment user-service    --port=50051  --target-port=50051

```