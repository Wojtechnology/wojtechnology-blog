import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
      id
      name
      articles (sort: "published_at:desc") {
        id
        title
        content
        published_at
        image {
          url
        }
        category {
          id
          name
        }
      }
    }
  }
`;

export default CATEGORY_ARTICLES_QUERY;
