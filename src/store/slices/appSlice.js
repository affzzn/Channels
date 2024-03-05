import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    channelID: null,
    channelName: null
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
       setChannelInfo: (state, action) => {
        state.channelID = action.payload.channelID
        state.channelName = action.payload.channelName
       }
    }
})



export const {setChannelInfo} = appSlice.actions
export default appSlice.reducer