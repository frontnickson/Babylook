import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
    id: number;
    uuid: number;
    email: string;
    emailVerified: boolean;
    phone: string;
    phoneVerified: boolean;
    profile: UserProfile;
    auth: UserAuth;
    socialConnections: UserSocialConnections;
    content: UserContent;
    stats: UserStats;
}

interface UserProfile {
    firstName: string;
    secondName: string;
    nickname: string;
    avatar: string;
    gender: string;
    location: string;
    timezone: string;
    date: UserProfileDate;
}

interface UserAuth {
    token: string;
}

interface UserSocialConnections {
    friends: UserShort[];
    followers: UserShort[];
    followings: UserShort[];
    blockedUsers: UserShort[];
}

interface UserShort {
    id: number;
    nickname: string;
    avatar: string;
}

interface UserProfileDate {
    day: string;
    month: string;
    year: string;
}

interface UserContent {
    posts: UserPost[];
    favoritesPost: any[];
    comments: any[];
    likes: any[];
    media: any[];
}

interface UserPost{
    id: number;
    title: string;
    image: string;
    comments: UserComments[];
}

interface UserComments {
    id: number;
    nickname: string;
    image: string;
}

interface UserStats {
    postCount: number;
    commentCount: number;
    likeCount: number;
    friendCount: number;
    lastActivityAt: string;
}


const initialState: UserState = {
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
        },
        addMonth: (state, action) => {
            state.profile.date.month = action.payload;
        }
    }
})

export const { addDay, addMonth } = userSlice.actions;
export default userSlice.reducer;