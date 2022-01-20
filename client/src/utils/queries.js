// Import the GraphQL
import gql from 'graphql-tag';

// Export GET_ME
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        title
        id
        authors
        description
        image
        link
  }
}
}
`;
