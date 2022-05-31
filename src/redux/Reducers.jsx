import { createReducer, createAction } from '@reduxjs/toolkit'

export const logIn = createAction('logIn')
export const logOut = createAction('logOut')
export const setUserData = createAction('setUserData')
export const updateUserData = createAction('updateUserData')


const initialState = {
    name: "userReducer",
    connected: false,
    JWTtoken: null,
    userData: {},
}

export default createReducer(initialState, (builder) =>
    builder
    .addCase(logIn, (draft, JWTtoken) => { 
        if (draft.connected === false) {
            draft.connected = true
            draft.JWTtoken = JWTtoken.payload
            return
        }
        if (draft.connected === true) {
            return  
        }
    })
    .addCase(logOut, (draft) => {
        if (draft.connected === true) {
            draft.connected = false
            draft.userData = {}
            draft.JWTtoken = null
            return
        }
        if (draft.connected === false) {
            return
        }
    })
    .addCase(setUserData, (draft, userData) => {
        draft.userData = userData.payload
    })
    .addCase(updateUserData, (draft, userData) => {
        draft.userData.firstName = userData.payload.firstName
        draft.userData.lastName = userData.payload.lastName
    })
)