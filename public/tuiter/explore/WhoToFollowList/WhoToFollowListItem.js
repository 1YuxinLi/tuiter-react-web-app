const WhoToFollowListItem = (who) => {
    return(`
         <li class="list-group-item wd-background-gray">
          <div>
            <div>
              <div>
                <button type="submit" class="btn btn-primary float-end rounded-pill fw-bolder">Follow</button>
                <img class="float-start rounded-pill wd-img-size" src="${who.avatarIcon}" height="100px">

              </div>
              <div class="fw-bolder wd-color-white position-relative">
                <span class="ps-2">${who.userName}</span> <i class="fa-regular fa-circle-check wd-color-white"></i>
              </div>
              <div class="wd-color-white position-relative">
                <span class="ps-2">@${who.handle}</span>
              </div>
            </div>
          </div>
        </li>
   `);
}

export default WhoToFollowListItem