import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show:false
}

const menuSlice = createSlice({
    name:'menuSlice',
    initialState,
    reducers:{
        menuToggle:(state=>{
            state.show = !state.show
        })
    }
})

export default menuSlice.reducer
export const menuToggleAction = menuSlice.actions.menuToggle