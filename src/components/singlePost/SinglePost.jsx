import "./singlePost.css"
export default function SinglePost() {
    return (
        <div className="singlePost flex-9">
            <div className="singlePostWrapper flex flex-col ">
            <img className="singlePostImage" src="https://i.pinimg.com/736x/7d/48/0f/7d480f68a907d5f2bc49919f1855b7a8.jpg" alt="here it is"/>
             <h1 className="postTitle my-0 mx-auto">
                Lorem Ipsum dolor site amet
                <div className="singlePostEdit flex justify-evenly">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
             </h1>
             <div className="singlePostInfo my-0 mx-auto">
                 <span className="singlepostAuthor">Author:<b>Anamika</b></span>
                 <span className="singlepostDate">1 hour ago</span>
             </div>
             <p>
             Lorem Ipsum is simply dummy text of the printing and 
             typesetting industry. Lorem Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer took a galley of type and 
             scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
             </p>
        </div>
        </div>
    )
}
