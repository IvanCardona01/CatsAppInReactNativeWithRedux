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

const vowsSlice = createSlice({
    name:'vowsList',
    initialState,
    reducers:{
        addNewLikeVote: (state, action: PayloadAction<Cat>) => {
            let cat = action.payload
            if(state.vows != []){
                for (let vote = 0; vote < state.vows.length; vote++) {
                    if (state.vows[vote].breed == cat.name) {
                        state.vows[vote].countVows++
                        return
                    }
                }
            }
            state.vows.push({
                breed: cat.name,
                imageUrl: (cat.image?.url != null)?cat.image?.url:undefined,
                origin: cat.origin,
                countVows:  1
            })
            return
        },
        addNewDislikeVote: (state, action: PayloadAction<Cat>) => {
            let cat = action.payload
            if(state.vows != []){
                for (let vote = 0; vote < state.vows.length; vote++) {
                    if (state.vows[vote].breed == cat.name) {
                        state.vows[vote].countVows--
                        return
                    }
                }
            }
            state.vows.push({
                breed: cat.name,
                imageUrl: (cat.image?.url != null)?cat.image?.url:undefined,
                origin: cat.origin,
                countVows:  -1
            })
            return
        }
    }
});

export const { addNewDislikeVote, addNewLikeVote } = vowsSlice.actions;
export default vowsSlice.reducer;