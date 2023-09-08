import {Args, ID, Mutation, Query, Resolver, Subscription} from "@nestjs/graphql";
import {PubSub} from "graphql-subscriptions";

import {CustomerInput, KycCase} from "../../graphql-types";
import {CustomerModel, KycCaseModel} from "../../models";
import {KycCaseManagementApi} from "../../services";

const pubSub: PubSub = new PubSub();
const casesTrigger: string = 'cases';

@Resolver(() => [KycCase])
export class KycCaseResolver {
    constructor(private readonly service: KycCaseManagementApi) {
        service.subscribeToCases()
            .forEach(cases => pubSub.publish(casesTrigger, cases))
            .catch(err => console.error('Error handling cases subscription', err))
    }

    @Query(() => [KycCase])
    async listCases(): Promise<KycCaseModel[]> {
        return this.service.listCases();
    }

    @Subscription(() => [KycCase])
    subscribeToCases() {
        return pubSub.asyncIterator(casesTrigger);
    }

    @Query(() => KycCase)
    async getCase(
        @Args('id', { type: () => ID }) id: string
    ): Promise<KycCaseModel> {
        return this.service.getCase(id);
    }

    @Mutation(() => KycCase)
    async createCase(
        @Args('customer', { type: () => CustomerInput }) customer: CustomerModel,
    ): Promise<KycCaseModel> {
        return this.service.createCase(customer);
    }

    @Mutation(() => KycCase)
    async addDocumentToCase(
        @Args('caseId', { type: () => ID }) caseId: string,
        @Args('documentName', { type: () => String }) documentName: string,
        @Args('documentPath', { type: () => String }) documentPath: string,
    ): Promise<KycCaseModel> {
        return this.service.addDocumentToCase(caseId, documentName, documentPath);
    }

    @Mutation(() => KycCase)
    async reviewCase(
        @Args('caseId', { type: () => ID }) caseId: string,
        @Args('comment', { type: () => String, nullable: true }) comment?: string,
        @Args('timestamp', { type: () => String, nullable: true }) timestamp?: string,
        @Args('author', { type: () => String, nullable: true }) author?: string,
    ): Promise<KycCaseModel> {
        return this.service.reviewCase(caseId, comment, timestamp, author);
    }

    @Mutation(() => KycCase)
    async approveCase(
        @Args('caseId', { type: () => ID }) caseId: string,
        @Args('comment', { type: () => String, nullable: true }) comment?: string,
        @Args('timestamp', { type: () => String, nullable: true }) timestamp?: string,
        @Args('author', { type: () => String, nullable: true }) author?: string,
    ): Promise<KycCaseModel> {
        return this.service.approveCase(caseId, comment, timestamp, author);
    }
}
