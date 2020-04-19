import { gql } from 'apollo-server';

const typeDefs = gql`
type Test {
    field: String,
    
}
input testInput {
    field: String,
}

type Query {
getTests:[Test] 
}

type Mutation {
createTest(input:testInput):Test
}
`;
export default typeDefs;