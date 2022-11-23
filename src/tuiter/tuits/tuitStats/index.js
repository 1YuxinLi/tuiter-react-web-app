import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";
const TuitStats = (
    {
        tuit
    }
)=>{
    const dispatch = useDispatch();
    return(
        <div className="wd-icons wd-nav-tags">
            <ul className="list-inline row">
                <li className="col flex-row "><i
                    className="fa fa-comment-o wd-color-gray"></i><span
                    className={`wd-color-gray ms-1`}>{tuit.comment}</span></li>
                <li className="col flex-row text-secondary">
                        <i onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            likes: tuit.likes + 1
                        }))} className="bi bi-heart-fill me-2 text-danger ms-2"></i> {tuit.likes}
                </li>
                <li className="col flex-row text-secondary">
                   <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes - 1
                }))} className="bi bi-hand-thumbs-down-fill me-2 text-danger"></i> {tuit.likes}

                </li>
                <li className="nav-item col-3">
                    <a className="nav-link text-secondary" href="#/">
                        <i className="bi bi-chat"></i>
                        <br/>
                        {tuit.replies}
                    </a>
                </li>
                <li className="nav-item col-3">
                    <a className="nav-link text-secondary" href="#/">
                        <i className="bi bi-reply"></i>
                        <br/>
                        {tuit.retuits}
                    </a>
                </li>

                <li className="col flex-row "><i
                    className="fa fa-exchange wd-color-gray"></i><span
                    className={`wd-color-gray ms-1`}>{tuit.transfer}</span></li>
                <li className="col flex-row "><i
                    className="fa fa-download wd-color-gray"></i></li>
            </ul>
        </div>
    )
};
export default TuitStats;