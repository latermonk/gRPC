FROM golang:1.11-stretch as builder

WORKDIR /grpcconsul
COPY . .
#export GOPROXY=https://goproxy.cn
RUN go mod tidy
#RUN CGO_ENABLED=0 GOOS=linux go build -mod=vendor -o app client/client.go
RUN CGO_ENABLED=0 GOOS=linux go build  -o app client/client.go

#RUN  go build -o client  main.go



FROM alpine:3.8

RUN apk --no-cache add ca-certificates
WORKDIR /root
COPY --from=builder /grpcconsul/app .

CMD ["./app"]
