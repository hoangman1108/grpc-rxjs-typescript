import * as grpc from 'grpc';
import { Observable } from 'rxjs';
/** Namespace sample. */
export namespace sample {

    /** Contains all the RPC service clients. */
    export interface ClientFactory {

        /**
         * Returns the Greeter service client.
         */
        getGreeter(): sample.Greeter;
    }

    /** Builder for an RPC service server. */
    export interface ServerBuilder {

        /**
         * Adds a Greeter service implementation.
         * @param impl Greeter service implementation
         */
        addGreeter(impl: sample.Greeter): sample.ServerBuilder;
    }

    /** Constructs a new Greeter service. */
    export interface Greeter {

        /**
         * Calls SayHello.
         * @param request HelloRequest message or plain object
         * @param metadata Optional metadata
         * @returns Promise
         */
        sayHello(request: sample.HelloRequest, metadata?: grpc.Metadata): Observable<sample.HelloReply>;

        /**
         * Calls DeleteHello.
         * @param request HelloRequest message or plain object
         * @param metadata Optional metadata
         * @returns Promise
         */
        deleteHello(request: sample.HelloRequest, metadata?: grpc.Metadata): Observable<google.protobuf.Empty>;
    }

    /** Properties of a HelloRequest. */
    export interface HelloRequest {

        /** HelloRequest name */
        name?: (string|null);
    }

    /** Properties of a HelloReply. */
    export interface HelloReply {

        /** HelloReply message */
        message?: (string|null);

        /** HelloReply date */
        date?: (sample.DateTime|null);
    }

    /** Properties of a DateTime. */
    export interface DateTime {

        /** DateTime date */
        date?: (number|null);

        /** DateTime month */
        month?: (number|null);

        /** DateTime year */
        year?: (number|null);
    }
}

/** Namespace google. */
export namespace google {

    /** Contains all the RPC service clients. */
    export interface ClientFactory {
    }

    /** Builder for an RPC service server. */
    export interface ServerBuilder {
    }

    /** Namespace protobuf. */
    export namespace protobuf {

        /** Contains all the RPC service clients. */
        export interface ClientFactory {
        }

        /** Builder for an RPC service server. */
        export interface ServerBuilder {
        }

        /** Properties of an Empty. */
        export interface Empty {
        }
    }
}
