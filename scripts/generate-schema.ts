import {NestFactory} from "@nestjs/core";
import {GraphQLSchemaBuilderModule, GraphQLSchemaFactory} from "@nestjs/graphql";
import {printSchema} from "graphql/utilities";
import {promises} from 'fs';

import {KycCaseResolver} from "../src/resolvers/kyc-case";

const generateSchema = async (file: string) => {
    const app = await NestFactory.create(GraphQLSchemaBuilderModule);
    await app.init();

    const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
    const schema = await gqlSchemaFactory.create([KycCaseResolver]);

    if (file) {
        await promises.writeFile(file, printSchema(schema))
    }
}

generateSchema('schema.gql').catch(err => console.error('Unable to generate schema: ', err));
