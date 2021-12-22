import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const Home = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      {me && <PostForm></PostForm>}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post}></PostCard>
      ))}
    </AppLayout>
  );
};

export default Home;
