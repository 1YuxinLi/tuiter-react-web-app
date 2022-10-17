const PostItems = (post) => {
    return(`
         <div>
        <div class="wd-border-gray">
            <i class="fa-solid fa-ellipsis wd-color-gray float-end pe-1 text-secondary"></i>
            <img class="wd-avatar" src="${post.avatarIcon}">
            <span class="wd-name">${post.userName} <i class="fa-solid fa-circle-check"></i><span class="wd-name-handle ps-1 text-secondary">${post.handle} · ${post.time}</span> </span>
            <p class="wd-main-content">${post.comment}</p>
            <div class="wd-img-border">
                <img class="wd-img" src="${post.image}">
                <div class="wd-border-round">
                <h3 class="wd-bold-title pb-0 ">${post.title}</h3>
                <p class="wd-text pt-1 text-secondary">${post.content}</p>
                </div>
            </div>
        <ul class="wd-nav-tabs">
            <li class="wd-link"><i class="fa-regular fa-comment text-secondary"></i><span class="text-secondary ps-2 pe-5">${post.comments}</span></li>
            <li class="wd-link"><i class="fa-solid fa-forward text-secondary"></i><span class="text-secondary ps-2 pe-5">${post.retweet}</span></li>
            <li class="wd-link"><i class="fa-solid fa-heart text-secondary"></i><span class="text-secondary ps-2 pe-5">${post.likes}</span></li>
            <li class="wd-link"><i class="fa-regular fa-share-from-square text-secondary"></i></li>
        </ul>
        </div>
    </div>
   `);
}

export default PostItems