import React from "react";
import ReactMarkdown from "react-markdown";
import markdown from "remark-parse";
import unified from "unified";
import { Link } from "react-router-dom";

function getFormattedPublishedAt(article) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const publishedAt = new Date(article.published_at);
  return publishedAt.toLocaleDateString("en-US", options);
}

function truncatedContent(article, numNodes) {
  const processor = unified().use(markdown);
  const tree = processor.parse(article.content);
  const nthNode = tree.children[Math.min(numNodes, tree.children.length) - 1];
  return article.content.slice(0, nthNode.position.end.offset);
}

const ReadFull = ({ article }) => {
  return (
    <Link
      to={`/article/${article.id}`}
      className="card-read-full card-read-full-link uk-width-1-1"
    >
      <div className="card-read-full-gradient"></div>
      <div className="card-read-full-bottom">
        <h4 className="card-read-full-text">Read full article</h4>
      </div>
    </Link>
  );
}

const Card = ({ article, maxNodes }) => {
  const trunc = !!maxNodes;
  const content = trunc ? truncatedContent(article, maxNodes) : article.content;
  return (
    <div className="uk-card uk-width-1-1">
      <Link to={`/article/${article.id}`}>
        <h4 className="uk-card-title card-title">
          {article.title}
        </h4>
      </Link>
      <p className="card-published-at">
        {getFormattedPublishedAt(article)}
      </p>
      <Link to={`/category/${article.category.id}`} className="category-tag">
        <p className="category-tag-text">{article.category.name}</p>
      </Link>
      <ReactMarkdown source={content} />
      { trunc ? <ReadFull article={article} /> : null }
    </div>
  );
};

export default Card;
