import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Patient {
  @Field(() => ID)
  name!: string;
}
