import {store} from '../store/index.js';

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
