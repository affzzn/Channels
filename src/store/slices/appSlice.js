import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    channelID: null,
    channelName: null
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
       setChannelID: (state, action) => {
        state.app = action.payload
       }
    }
})



export const {setChannelID} = appSlice.actions
export default appSlice.reducer