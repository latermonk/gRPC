# gRPC


## 官网：
https://grpc.io/

## Reference:

http://colobu.com/2017/04/06/dive-into-gRPC-streaming/

https://yami.io/grpc/



#  调试工具

**grpcurl**   
***grpcurl ui - delivery***


```
grpcurl  -plaintext -max-time 5 -d '{"name": "abcde123 hahaha"}' 127.0.0.1:57613 helloworld.Greeter/SayHello

```
