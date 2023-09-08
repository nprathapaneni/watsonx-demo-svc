import {Provider} from "@nestjs/common";

import {helloWorldProvider} from "./hello-world";
import {kycCaseProvider} from "./kyc-case";
import {dataExtractionProvider} from "./data-extraction";

export * from './hello-world';
export * from './kyc-case';

export const providers: Provider[] = [
    helloWorldProvider,
    kycCaseProvider,
    dataExtractionProvider,
];
