import { IUsersState } from './types';
import { createSlice } from "@reduxjs/toolkit"

const initialState: IUsersState = {
    message: 'Hello World'
}

export const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        showHelloWorld: (state) => {
            const usersState = state;
            usersState.message = 'Buy';
        },
    }
})

export const {
    showHelloWorld
 } = users.actions
export default users.reducer