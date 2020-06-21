import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles(sort: "published_at:desc") {
      id
      title
      category {
        id
        name
      }
      image {
        url
      }
      published_at
      content
    }
  }
`;

export default ARTICLES_QUERY;
