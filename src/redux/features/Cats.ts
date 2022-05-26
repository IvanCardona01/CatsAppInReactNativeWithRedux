import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Cats {
    catsList: Cat[]
}

export interface Cat {
        id:                  string;
        name:                string;
        origin:              string;
        description:         string;
        intelligence:        number;
        image?:              Image;
    
}

interface Image {
    id?:     string;
    width?:  number;
    height?: number;
    url?:    string;
}


const initialState: Cats = {
    catsList: []
}

const catsSlice = createSlice({
    name:'catsList',
    initialState,
    reducers: {
        addCatsList: (state, action: PayloadAction<Cat[]>) =>{
            state.catsList = action.payload
        }
    }
});

export const { addCatsList } = catsSlice.actions
export default catsSlice.reducer;