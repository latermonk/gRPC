# gRPC


## 官网：
https://grpc.io/

## Reference:

http://colobu.com/2017/04/06/dive-into-gRPC-streaming/

https://yami.io/grpc/



#  调试工具

**grpcurl**   
***grpcurl ui - delivery***


![grpcurl](_image/grpcurl.png)

```
grpcurl  -plaintext -max-time 5 -d '{"name": "abcde123 hahaha"}' 127.0.0.1:57613 helloworld.Greeter/SayHello

```



![reflect-svc](_image/reflect-svc.png)


![grpcurl-command](_image/grpcurl-command.png)


```
/Applications/delivery.app/Contents/Resources/bin/darwin/grpcurl -plaintext -max-time 5 -d '{
    "id": "aaa",
    "name": "222",
    "description": "222",
    "price": 33330
}' 127.0.0.1:59777 ecommerce.ProductInfo/addProduct
```





