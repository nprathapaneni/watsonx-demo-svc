import {Provider} from "@nestjs/common";

import {KycCaseManagementMock} from "./kyc-case-management.mock";
import {KycCaseManagementApi} from "./kyc-case-management.api";

export * from './kyc-case-management.api';

let _instance: KycCaseManagementApi;

export const kycCaseProvider: Provider = {
    provide: KycCaseManagementApi,
    useFactory: (): KycCaseManagementApi => {
        if (_instance) {
            return _instance;
        }

        return _instance = new KycCaseManagementMock();
    },
};
