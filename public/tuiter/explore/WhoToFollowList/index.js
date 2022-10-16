import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <li class="list-group-item wd-background-gray">
          <div class="row">
            <div class="col-8">
              <div class="fw-bolder wd-color-white ps-3 pt-3 pb-3">
                Who to follow
              </div>
            </div>
          </div>
        </li>
           <ul class="list-group">
           ${
        who.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
           </ul>
`); }

export default WhoToFollowList;