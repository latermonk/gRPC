#  kubernetes create a cronjob 


```
kubectl create cronjob cronjob-grpc-productinfo-client --image=kasunindrasiri/grpc-productinfo-client --schedule="*/1 * * * *" 

```