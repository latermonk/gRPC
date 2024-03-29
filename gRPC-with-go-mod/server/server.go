package main

import (
	"context"
	"fmt"
	"log"
	"net"

	"google.golang.org/grpc"
	pb "steadylearner.com/grpc/helloworld"

	"google.golang.org/grpc/reflection"
)

const (
	port = ":50059"
)

// server is used to implement pb.pb.GreeterServer.
type server struct {
	// HelloReply, RegisterGreeterServer etc exist.
	// But, there is no pb.UnimplementedGreeterServer from the official example.
	// So, comment or remove it.

	// pb.UnimplementedGreeterServer
}

// SayHello implements pb.pb.GreeterServer
func (s *server) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	log.Printf("Received: %v", in.GetName())
	return &pb.HelloReply{Message: "Hello " + in.GetName()}, nil
}

func main() {
	fmt.Println("====Start========") // fmt.Println("%s", pb)
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterGreeterServer(s, &server{})
	reflection.Register(s)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
