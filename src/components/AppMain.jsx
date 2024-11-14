//AppMain.jsx
import {posts} from '../components/data/posts'
import PostCard from '../components/PostCard/PostCard';

export default function AppMain(){
    console.log(posts);
    return(
        <main id="">
            <div className='col-8 post-list'>
                    {posts.map((item,index)=> <PostCard key={item.id} data={item}/>) }  {/*data is the props in param in function PostCard */}
            </div>
        </main>
    );
}