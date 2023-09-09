import {DataExtractionApi} from "./data-extraction.api";
import {DataExtractionConfig, DataExtractionCsv} from "./data-extraction.csv";
import {DataExtractionResultModel} from "../../models";
import {delay, first} from "../../utils";


export class DataExtractionMock extends DataExtractionCsv<{}> implements DataExtractionApi {

    async extractDataForQuestionInternal(_: string, question: {id: string}, auth: {}): Promise<DataExtractionResultModel> {
        return delay(500, () => {
            const config: DataExtractionConfig | undefined = first(this.getCsvData().filter(val => val.id === question.id))

            if (!config) {
                throw new Error('Error finding question: ' + question.id)
            }

            return Object.assign({}, config, {watsonxResponse: config.expectedResponse});
        })
    }

    async getBackends(): Promise<{}> {
        return {};
    }

}
