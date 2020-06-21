import React from "react";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { useParams } from "react-router";

import Card from "../../components/Card";
import Query from "../../components/Query";

import ARTICLE_QUERY from "../../queries/article/article";

const Article = () => {
  let { id } = useParams();
  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article } }) => {
        return (
          <div>
            <div className="uk-section">
              <div className="uk-container uk-container-small">
                <Card article={article}/>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Article;
