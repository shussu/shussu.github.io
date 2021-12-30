import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import '../styles/Post.css';

export default function Post({ article }) {
  const { id, title, preview } = article;

  return (
    <article className="Article">
      <h1>{title}</h1>
      <ReactMarkdown children={preview} />
      <Link to={`/single-post/${id}`}>Read more &rarr;</Link>
    </article>
  );
}