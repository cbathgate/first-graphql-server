import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql/lib/type';

let count = 0;


// top level query object returns 'RootQueryType' with count FIELD
// GraphQLInt means it takes and integer

// What are the advantages of using graphQL over other apis?
let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        resolve: function() {
          return count;
        }
      }
    }
  })
});

export default schema;