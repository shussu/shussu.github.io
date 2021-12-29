import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { useGetPost } from "../services/useRequest";
import '../styles/PostTemplate.css';

export default function PostTemplate() {
  const { id } = useParams();
  const { data, error, isLoading, isSuccess } = useGetPost(id);

  if (error) return <h1>Something went wrong!</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  if (isSuccess)  console.debug('Post data: ', data.post);


  return (
    isSuccess && (
      <article className="Post">
        <h1>{data.post.title}</h1>
        <ReactMarkdown children={data.post.content} />
      </article>
    )
  );
}