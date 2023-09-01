import {Field, InputType, ObjectType} from "@nestjs/graphql";
import {
    CommentModel,
    CustomerModel,
    CustomerRiskAssessmentModel,
    DocumentModel,
    KycCaseModel,
    NegativeScreeningModel
} from "../models";

@ObjectType({description: 'KYC Customer'})
export class Customer implements CustomerModel {
    @Field()
    name: string;
    @Field()
    dateOfBirth: string;
    @Field()
    countryOfResidence: string;
}

@ObjectType({ description: 'KYC Document' })
export class Document implements DocumentModel {
    @Field()
    name: string;
    @Field()
    path: string;
}

@ObjectType({ description: 'Negative screening' })
export class NegativeScreening implements NegativeScreeningModel {
    @Field()
    result: string;
}

@ObjectType({ description: 'Customer risk assessment' })
export class CustomerRiskAssessment implements CustomerRiskAssessmentModel {
    @Field()
    result: string;
}

@ObjectType({description: 'Case comment'})
export class Comment implements CommentModel {
    @Field()
    comment: string;
    @Field()
    timestamp: string;
    @Field({ nullable: true })
    author?: string;
}

@ObjectType({ description: 'KYC Case' })
export class KycCase implements KycCaseModel {
    @Field()
    id: string;
    @Field()
    status: string;
    @Field(() => Customer)
    customer: CustomerModel;
    @Field(() => [Document])
    documents: DocumentModel[];
    @Field(() => [Comment])
    comments: CommentModel[];
}

@InputType()
export class CustomerInput implements CustomerModel {
    @Field()
    name: string;
    @Field()
    dateOfBirth: string;
    @Field()
    countryOfResidence: string;
}
