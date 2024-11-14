//AppMain.jsx
import {posts} from '../components/data/posts'
import PostCard from '../components/PostCard/PostCard';

export default function AppMain(){
    console.log(posts);
    return(
        <div className='post-list'>
             {posts.map((item,index)=> <PostCard key={item.id} data={item}/>) }  {/*data is the props in param in function of PostCard */}
        </div>
    );
}