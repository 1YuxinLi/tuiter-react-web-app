import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./post.js"
const PostSummaryList = () => {
    return (`
           <ul class="list-group">
           ${
        exploreItems.map(exploreItems => {
            return(PostSummaryItem(exploreItems));
        }).join('')
    }
           </ul>
`); }

export default PostSummaryList;