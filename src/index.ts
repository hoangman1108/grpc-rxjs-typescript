import { of } from 'rxjs';
import { serverBuilder } from 'rxjs-grpc';
import { sample } from './protoType/grpc-namespaces';
import path from 'path';
// Pass the path of proto file and the name of namespace
const server = serverBuilder<sample.ServerBuilder>(path.join(__dirname, './proto/sample.proto'), 'sample')
// Add implementation
server.addGreeter({
  sayHello(request: sample.HelloRequest) {
    const dateTime = new Date();
    const result: sample.HelloReply = {
      message: 'Hello '+ request.name,
      date: {
        date: dateTime.getDate(),
        month: dateTime.getMonth(),
        year: dateTime.getFullYear(),
      }
    }
    return of(result);
  }
})
// Start the server to listen on port 50051
server.start('0.0.0.0:50051');