import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { InstructorProfileCreateNestedOneWithoutUserInput } from '../instructor-profile/instructor-profile-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutStudentProfileInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => UserRole, {nullable:false})
    role!: keyof typeof UserRole;

    @Field(() => Boolean, {nullable:true})
    online?: boolean;

    @Field(() => InstructorProfileCreateNestedOneWithoutUserInput, {nullable:true})
    InstructorProfile?: InstructorProfileCreateNestedOneWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
