import {Provider} from "@nestjs/common";

import {helloWorldProvider} from "./hello-world";
import {kycCaseProvider} from "./kyc-case";

export * from './hello-world';
export * from './kyc-case';

export const providers: Provider[] = [
    helloWorldProvider,
    kycCaseProvider,
];
