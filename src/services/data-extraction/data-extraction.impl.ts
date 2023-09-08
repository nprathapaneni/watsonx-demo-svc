import * as process from "process";

import {DataExtractionApi} from "./data-extraction.api";
import {DataExtractionCsv} from "./data-extraction.csv";
import {DataExtractionQuestionModel, DataExtractionResultModel} from "../../models";

interface DataExtractionBackend {
    identityUrl: string;
    wmlUrl: string;
    wmlApiKey: string;
    modelId: string;
    projectId: string;

    discoveryUrl: string;
    discoveryApiKey: string;
}

export const buildDataExtractionBackendConfig = (): DataExtractionBackend => {
    const config = {
        identityUrl: process.env.IAM_URL || 'https://iam.cloud.ibm.com/identity/token',

        wmlUrl: process.env.WML_URL || 'https://us-south.ml.cloud.ibm.com/ml/v1-beta/generation/text?version=2023-05-28',
        wmlApiKey: process.env.WML_API_KEY,
        modelId: process.env.MODEL_ID || 'google/flan-ul2',
        projectId: process.env.PROJECT_ID || '05ba9d92-734e-4b34-a672-f727a2c26440',

        discoveryUrl: process.env.DISCOVERY_URL || 'https://api.us-south.discovery.watson.cloud.ibm.com/instances/0992769e-726a-4ab0-a9d9-4352e204cc87',
        discoveryApiKey: process.env.DISCOVERY_API_KEY,
    }

    if (!config.wmlApiKey) {
        throw new Error('WML_API_KEY environment variable not provided');
    }

    if (!config.discoveryApiKey) {
        throw new Error('DISCOVERY_API_KEY environment variable not provided');
    }

    return config;
}

export class DataExtractionImpl extends DataExtractionCsv implements DataExtractionApi {

    async extractDataForQuestion(customer: string, question: {id: string}): Promise<DataExtractionResultModel> {
        return Promise.resolve(undefined);
    }

}
