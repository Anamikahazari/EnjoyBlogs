import Post from '../post/Post'
import './posts.css'

export default function Posts() {
    return (
        <div className="posts flex-9">
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
