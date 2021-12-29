import Post from "./components/Post";
import { useGetPosts } from "./services/useRequest";
import './styles/PostTemplate.css';



export default function PostPage() {
    const { data, error, isLoading, isSuccess } = useGetPosts();
    if (error) return <h1>Something went wrong!</h1>;
    if (isLoading) return <h1>Loading...</h1>;
    if (isSuccess)  console.log('Post page data: ', data.posts);

    return (
        <div>
            {isSuccess && data.posts.map((post) => <Post key={post._id} article={post} />)}
        </div>
      );
}