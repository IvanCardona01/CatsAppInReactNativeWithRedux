import { configureStore } from '@reduxjs/toolkit'
import Cats from '../features/Cats';
import Vows from '../features/Vows';

export const Store = configureStore({
    reducer: {
        vowsList: Vows,
        catsList: Cats,
    }
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;