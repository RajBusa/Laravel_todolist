import { configureStore} from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import { persistStore } from "redux-persist";
export const store = configureStore({
    reducer: {
        user: taskReducer
    }
})

export const persistor = persistStore(store)