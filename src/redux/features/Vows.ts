import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { Cat } from './Cats';

interface VowsListState {
    vows: Vote[]
}

export interface Vote {
    breed: string
    imageUrl?: string
    origin: string
    countVows: number
}

const initialState: VowsListState = {
    vows: []
}

interface PropsReducer {
    cat: Cat
    value: number
}

const vowsSlice = createSlice({
    name:'vowsList',
    initialState,
    reducers:{
        addNewVote: (state, action: PayloadAction<PropsReducer>) => {
            let {cat, value} = action.payload
            if(state.vows != []){
                for (let vote = 0; vote < state.vows.length; vote++) {
                    if (state.vows[vote].breed == cat.name) {
                        state.vows[vote].countVows += value
                        return
                    }
                }
            }
            state.vows.push({
                breed: cat.name,
                imageUrl: (cat.image?.url != null)?cat.image?.url:undefined,
                origin: cat.origin,
                countVows: value
            })
            return
        }
    }
});

export const { addNewVote } = vowsSlice.actions;
export default vowsSlice.reducer;