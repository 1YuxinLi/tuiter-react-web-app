const PostSummaryItem = (post) => {
    return(`
          <li class="list-group-item">
            <div class="row">
                <div class="col-8">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <div class="fw-bolder">
                        ${post.userName}<i class="fa-solid fa-circle wd-color-white ps-2"></i><span class="text-secondary"> - ${post.time}</span>
                    </div>
                    <div>
                        ${post.title}
                    </div>
                </div>
                <div class="col-4">
                    <img class="float-end" src="${post.image}" height="100px">
                </div>
            </div>
        </li>
   `);
}

export default PostSummaryItem