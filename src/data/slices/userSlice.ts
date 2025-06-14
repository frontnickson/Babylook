import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    uuid: 0,
    email: "",
    emailVerified: false,
    phone: "",
    phoneVerified: false,
    profile: {
        firstName: "",
        secondName: "",
        nickname: "",
        avatar: "",
        gender: "",
        location: "",
        timezone: "",
        date: {
            day: "",
            month: "",
            year: "",
        }
    },
    auth: {
        token: "",
    },
    socialConnections: {
        friends: [],
        followers: [],
        followings: [],
        blockedUsers: [],
    },
    content: {
        posts: [],
        favoritesPost: [],
        comments: [],
        likes: [],
        media: [],
    },
    stats: {
        postCount: 0,
        commentCount: 0,
        likeCount: 0,
        friendCount: 0,
        lastActivityAt: "",
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addDay: (state, action) => {
            state.profile.date.day = action.payload;
        }
    }
})

export const { addDay } = userSlice.actions;
export default userSlice.reducer;