export default function PostCard(){
    return(
        <div className="post-card">
            <img src={postimg1} alt="post img" />
            <div className="post-details">
                <h3>Post1</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, aut.
                </p>
                <span className="post-price">10.90$</span>
            </div>
        </div>
    );
}