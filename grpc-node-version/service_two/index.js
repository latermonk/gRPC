var grpc = require('grpc');
var path = require('path');

var PROTO_PATH = path.join(__dirname + '/./protos/service_two.proto');
var SERVICE_ONE_PROTO_PATH = path.join(__dirname + '/./protos/service_one.proto');
var routerGuide = grpc.load(PROTO_PATH).serviceTwo;
const serviceOneRouterGuide = grpc.load(SERVICE_ONE_PROTO_PATH).serviceOne;

var SERVICE_ONE_CLIENT;

class ServiceTwo {
    getData(call, callback) {
        console.log(call.request);
        callback(null, {
            status: 200,
            message: 'I am SERVICE TWO'
        });
    }
}

function startServer() {
    try {
        const server = new grpc.Server();
        server.addService(routerGuide.service, new ServiceTwo);
        server.bind('172.19.0.14:4600', grpc.ServerCredentials.createInsecure());
        server.start();
        console.log('[SERVICE_TWO]: GRPC server started on port 4600');
    } catch (error) {
        console.log('******************Error in starting the server***********************');
        console.log(error);
        console.log('*********************************************************************');
    }
}


startServer();
