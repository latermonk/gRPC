var grpc = require('grpc');
var path = require('path');

var PROTO_PATH = path.join(__dirname + '/./protos/service_one.proto');
var routerGuide = grpc.load(PROTO_PATH).serviceOne;

var SERVICE_TWO_PROTO_PATH = path.join(__dirname + '/./protos/service_two.proto');
var serviceTwoRouterGuide = grpc.load(SERVICE_TWO_PROTO_PATH).serviceTwo;



var SERVICE_TWO_CLIENT;


class ServiceOne {
    setData(call, callback) {
        callback(null, {
            status: 200,
            message: 'I am SERVICE ONE'
        });
    }
}

function startServer() {
    try {
        const server = new grpc.Server();
        server.addService(routerGuide.service, new ServiceOne);
        server.bind('172.19.0.15:4500', grpc.ServerCredentials.createInsecure());
        server.start();
        console.log('[SERVICE_ONE]: GRPC server started on port 4500');
    } catch (error) {
        console.log('******************Error in starting the server***********************');
        console.log(error);
        console.log('*********************************************************************');
    }
}

function consumeServiceTwo() {
    setTimeout(function(){ console.log("Delayed"); 
    var reqData = {
        name: 'tarun',
        email: 'tarun.agarwal@gmail.com'
    };
    SERVICE_TWO_CLIENT = new serviceTwoRouterGuide('172.19.0.14:4600', grpc.credentials.createInsecure());
    console.log('[SERVICE_ONE]: SERVICE_TWO client connected successfully');
    
    SERVICE_TWO_CLIENT.getData(reqData, (err, data) => {
        console.log(data);
    });
}, 2000);
}


startServer();
consumeServiceTwo();