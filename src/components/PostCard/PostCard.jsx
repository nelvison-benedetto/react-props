//PostCard.jsx
import Button from '../Button/Button'

export default function PostCard({data}){
    return(
        <div className="post-card">
            {/* <img src={data.image} alt="post img" /> */}
            <div className="post-details">
                <h3>{data.title}</h3>
                <p>{data.content}</p>
                {/* <span className="post-price">&euro;{props.price}</span> */}
            </div>
            {/* <Button/> */}
        </div>
    );
}