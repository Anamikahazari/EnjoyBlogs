import './post.css'

export default function post() {
    return (
        <div className="post  m-6 flex flex-col">
            <img className="postImg" src="https://i.pinimg.com/736x/7d/48/0f/7d480f68a907d5f2bc49919f1855b7a8.jpg" alt="here it is"/>
            <div className="postIntro flex item-center flex-col">
                    <div className="postCatagorys flex justify-center">
                        <span className="postCat">Music</span>
                        <span className="postCat">Life</span>
                    </div>
                    <span className="postTitle flex justify-center">
                        Lorem ipsum dolor site amet
                    </span>
                    <hr/>
                    <span className="postDate flex justify-center">1 hour ago</span>
             </div>
        </div>
    )
}
