import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateTuitThunk}
    from "../../services/tuits-thunks";

// eslint-disable-next-line react-hooks/rules-of-hooks
const dispatch = useDispatch();
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
    dispatch(updateTuitThunk())
}, [])


const TuitStats = (
    {
        tuit = { "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": " .2h",
            "image": "starship.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": " @spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }

) => {

    return(
        <div className="row">
            <ul className="nav mb-2 ">
                <li className="nav-item col-3">
                    <a className="nav-link text-secondary" href="#/">
                        <i className="bi bi-chat"></i> {tuit.replies}
                    </a>
                </li>
                <li className="nav-item col-3">
                    <a className="nav-link text-secondary" href="#/">
                        <i className="bi bi-reply"></i> {tuit.replies}
                    </a>
                </li>
                <li className="nav-item col-3">

                    <a className="nav-link text-secondary fg-color-red" href="#/">
                        <div>
                            Likes: {tuit.likes}
                            <i onClick={() => dispatch(updateTuitThunk({
                                ...tuit,
                                likes: tuit.likes + 1
                            }))} className="bi bi-heart-fill me-2 text-danger"></i>
                        </div>
                    </a>
                </li>
                <li className="nav-item col-3">
                    <a className="nav-link text-secondary" href="#/">
                        <i className="bi bi-share"></i>
                    </a>
                </li>
            </ul>
        </div>

    );


}; export default TuitStats;