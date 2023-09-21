import {Provider} from "@nestjs/common";

import {HelloWorldResolver} from "./hello-world";
import {KycCaseResolver} from "./kyc-case";
import {DataExtractionQuestionResolver, DataExtractionResultResolver} from "./data-extraction";
import {FormOptionResolver} from "./form-option";
import {KycCaseSummaryResolver} from "./kyc-case-summary";

export const providers: Provider[] = [
    HelloWorldResolver,
    KycCaseResolver,
    DataExtractionQuestionResolver,
    DataExtractionResultResolver,
    FormOptionResolver,
    KycCaseSummaryResolver,
]
