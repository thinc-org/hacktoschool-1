import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CourseWhereInput } from './course-where.input';
import { Type } from 'class-transformer';
import { CourseOrderByWithAggregationInput } from './course-order-by-with-aggregation.input';
import { CourseScalarFieldEnum } from './course-scalar-field.enum';
import { CourseScalarWhereWithAggregatesInput } from './course-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CourseCountAggregateInput } from './course-count-aggregate.input';
import { CourseMinAggregateInput } from './course-min-aggregate.input';
import { CourseMaxAggregateInput } from './course-max-aggregate.input';

@ArgsType()
export class CourseGroupByArgs {

    @Field(() => CourseWhereInput, {nullable:true})
    @Type(() => CourseWhereInput)
    where?: CourseWhereInput;

    @Field(() => [CourseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CourseOrderByWithAggregationInput>;

    @Field(() => [CourseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CourseScalarFieldEnum>;

    @Field(() => CourseScalarWhereWithAggregatesInput, {nullable:true})
    having?: CourseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CourseCountAggregateInput, {nullable:true})
    _count?: CourseCountAggregateInput;

    @Field(() => CourseMinAggregateInput, {nullable:true})
    _min?: CourseMinAggregateInput;

    @Field(() => CourseMaxAggregateInput, {nullable:true})
    _max?: CourseMaxAggregateInput;
}
