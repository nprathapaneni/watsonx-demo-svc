import {Provider} from "@nestjs/common";
import {HelloWorldResolver} from "./hello-world";
import {KycCaseResolver} from "./kyc-case";

export const providers: Provider[] = [
    HelloWorldResolver,
    KycCaseResolver
]
