import {Provider} from "@nestjs/common";
import {DataExtractionApi} from "./data-extraction.api";
import {DataExtractionMock} from "./data-extraction.mock";

export * from './data-extraction.api';

let _instance: DataExtractionApi;
const dataExtractionApi = (): DataExtractionApi => {
    if (_instance) {
        return _instance;
    }

    return _instance = new DataExtractionMock();
}

export const dataExtractionProvider: Provider = {
    provide: DataExtractionApi,
    useFactory: dataExtractionApi
}
