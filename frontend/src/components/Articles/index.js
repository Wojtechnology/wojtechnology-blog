import React from "react";
import Card from "../Card";

const TOP_MAX_NODES = 5;
const REST_MAX_NODES = 3;

const Articles = ({ articles }) => {
  const firstArticle = articles[0];
  const restArticles = articles.slice(1, articles.length);

  return (
    <div data-uk-grid>
      <Card
        article={firstArticle}
        maxNodes={TOP_MAX_NODES}
        key={`article__${firstArticle.id}`}
      />
      <div>
        {restArticles.map((article, i) => {
          return <Card
            article={article}
            maxNodes={REST_MAX_NODES}
            key={`article__${article.id}`}
          />;
        })}
      </div>
    </div>
  );
};

export default Articles;
