import {NotFoundException} from "@nestjs/common";
import {Query, Resolver} from "@nestjs/graphql";

import {Greeting} from "../../graphql-types";
import {GreetingModel} from "../../models";
import {HelloWorldApi} from "../../services";

@Resolver(() => Greeting)
export class HelloWorldResolver {
    constructor(private readonly service: HelloWorldApi) {}

    @Query(() => Greeting)
    async helloWorld(): Promise<GreetingModel> {
        const greeting = await this.service.getHello();
        if (!greeting) {
            throw new NotFoundException();
        }
        return greeting;
    }
}
