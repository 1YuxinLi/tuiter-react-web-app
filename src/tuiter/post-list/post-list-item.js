import React from "react";
const PostListItem = (
    {
        post = {
            "userName": "Elon Musk",
            "time": "23h",
            "comment": "Amazing show about @inspiration4x mission!",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "content": "From trainning to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space...",
            "image": "../../../images/js_icon.jpg",
            "handle": "@elonmusk",
            "avatarIcon": "../../../images/virgin-1.svg",
            "comments": "4.2K",
            "retweet": "3.5K",
            "likes": "37.5K"
        }
    }
) => {
    return(
        <div>
            <div className="wd-border-gray pt-2">
                <i className="fa-solid fa-ellipsis wd-color-gray float-end pe-1 text-secondary"></i>
                <img className="wd-avatar" src={`/images/${post.avatarIcon}`}/>
                    <span className="wd-name">{post.userName} <i className="fa-solid fa-circle-check"></i><span
                        className="wd-name-handle ps-1 text-secondary">{post.handle} · {post.time}</span> </span>
                    <p className="wd-main-content">{post.comment}</p>
                    <div className="wd-img-border">
                        <img className="wd-img" src={`/images/${post.image}`}/>
                            <div className="wd-border-round">
                                <h3 className="wd-bold-title pb-0 ">{post.title}</h3>
                                <p className="wd-text pt-1 text-secondary">{post.content}</p>
                            </div>
                    </div>
                    <ul className="wd-nav-tabs">
                        <li className="wd-link"><i className="fa-regular fa-comment text-secondary"></i><span
                            className="text-secondary ps-2 pe-5">{post.comments}</span></li>
                        <li className="wd-link"><i className="fa-solid fa-forward text-secondary"></i><span
                            className="text-secondary ps-2 pe-5">{post.retweet}</span></li>
                        <li className="wd-link"><i className="fa-solid fa-heart text-secondary"></i><span
                            className="text-secondary ps-2 pe-5">{post.likes}</span></li>
                        <li className="wd-link"><i className="fa-regular fa-share-from-square text-secondary"></i></li>
                    </ul>
                    <span className="wd-color-blue ps-5">Show this thread</span>
            </div>
        </div>
    );
};
export default PostListItem;