import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const ENDPOINT = 'https://api-us-west-2.graphcms.com/v2/ckxe0tkow4ifv01xi9ms69zca/master';

const access_token = process.env.REACT_APP_GRAPH_CMS_ACCESS_TOKEN;

const graphQLClient = new GraphQLClient(ENDPOINT, {
    headers: {
      authorization: `Bearer ${access_token}`
    },
})

const getPostsQuery = gql`
    query {
        posts {
            id
            title
            content
            preview
            createdAt
        }
    }
`;

export function useGetPosts() {
    return useQuery("get-posts",  async () => {
        const  getPostList = await graphQLClient.request(getPostsQuery)
        console.debug('useGetPosts response: ', getPostList);
        return getPostList;
      }
    );
}

const getPostByIdQuery = gql`
    query getPost($id: ID!) {
        post(where: {id: $id}) {
            id
            content
            title
            preview
        }
    }
`;

export function useGetPost(postId) {
    console.debug("Post Id: ", postId);
    return useQuery(["get-post", postId], async () => {
      const getPost = await graphQLClient.request(
        getPostByIdQuery,
        { id: postId }
      );
      console.debug("useGetPost response: ", getPost);
      return getPost;
    });
  }
