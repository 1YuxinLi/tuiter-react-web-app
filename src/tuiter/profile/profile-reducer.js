import { createSlice } from "@reduxjs/toolkit";

const profile =
    {
        "_id": 123,
        "firstName": "Yuxin",
        "lastName": "Li",
        "handle": "@yuxinli",
        "profilePicture": "../../../images/nasa_icon.jpg",
        "bannerPicture": "../../../images/virgin-1.svg",
        "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
        "website": "youtube.com/webdevt",
        "location": "Seattle, WA",
        "dateOfBirth": "7/7/1968",
        "dateJoined": "4/2009",
        "followingCount": 340,
        "followersCount": 223,
        "tuitsCount": 6114
    };

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.handle = action.payload.handle;
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
});
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;