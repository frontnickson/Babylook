import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    uuid: "",
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
        timezone: ""
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
        addUser: (state, action) => {
            state.id = action.payload.id;
        }
    }
})

export default userSlice.reducer;