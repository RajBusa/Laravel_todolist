import { actions } from "./action";
import { combineReducers } from "redux";
// let initialState ={
//     x: []
// }
const dataReducer = (state = [], action) => {
    console.log(action.payload);
    switch (action.type) {
        case actions.FETCH_DATA:
            return action.payload;
        case actions.ADD_TASK:
            state.dataReducer.push({ ...actions.payload, id: state.length })
            return action.payload;
        case actions.START_TIME:
            let a = action.payload;
            a.start_time = new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
            return [...state]
        case actions.END_TIME:
            let b = action.payload;
            b.end_time = new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
            return [...state]
        default:
            return state;
    }
};

const btnReducer = (state = false, action) => {
    console.log(action.payload);
    switch (action.type) {
        case actions.BTN_CLICKED:
            console.log("btn clicked")
            if (state === true) {
                state = false;
            } else {
                state = true;
            }
            console.log(state);
            return state;
        default:
            return state;
    }
};


export const rootReducer = combineReducers({ dataReducer, btnReducer });