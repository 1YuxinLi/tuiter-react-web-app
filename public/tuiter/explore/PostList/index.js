import PostItems from "./PostItems.js";
import post from "./post.js"
const PostList = () => {
    return (`
           ${
        post.map(post => {
            return(PostItems(post));
        }).join('')
    }
           </ul>
`); }

export default PostList;