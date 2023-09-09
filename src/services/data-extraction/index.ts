import {Provider} from "@nestjs/common";
import {DataExtractionApi} from "./data-extraction.api";
import {DataExtractionMock} from "./data-extraction.mock";
import {DataExtractionImpl} from "./data-extraction.impl";

export * from './data-extraction.api';

let _instance: DataExtractionApi;
const dataExtractionApi = (): DataExtractionApi => {
    if (_instance) {
        return _instance;
    }

    return _instance = new DataExtractionImpl();
}

export const dataExtractionProvider: Provider = {
    provide: DataExtractionApi,
    useFactory: dataExtractionApi
}
