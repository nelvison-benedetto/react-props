//PostCard.jsx
import Button from '../Button/Button'
import TagHtml from '../Tags/TagHtml'
import TagCss from '../Tags/TagCss'
import TagJS from '../Tags/TagJS'

export default function PostCard({data}){
    let is_tag_html = false;
    let is_tag_css = false;
    let is_tag_js = false;
    if(data.tags.includes('html')){is_tag_html = true;}
    if(data.tags.includes('css')){is_tag_css = true;}
    if(data.tags.includes('js' || 'javascript')){is_tag_js = true;}

    return(
        <div className="post_card">
            <img src={data.image} alt="post img" />
            <div className="post_details">
                <h3>{data.title}</h3>
                <p>{data.content}</p>

                {/* <span className="post-price">&euro;{props.price}</span> */}
                {data.published? <Button/> : null}
                
                <span className='post_tags'>
                    {is_tag_html? <TagHtml/> : null}
                    {is_tag_css? <TagCss/> : null}
                    {is_tag_js? <TagJS/> : null}
                </span>
            </div>
        </div>
    );
}