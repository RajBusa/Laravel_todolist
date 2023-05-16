import { createSlice } from "@reduxjs/toolkit";
export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        currenttask: null
    },
    reducers: {
        getTask: () => {
            axios.get('http://127.0.0.1:8000/api/list').then((response) => {
                console.log(response.data);
                state.currenttask = response.data;
            }); 
        },
        addTask: (state, action) => {
            console.log(action.payload);
            currenttask.push(action.payload);
        }
    }
})

export const { getTask, addTask } =
    taskSlice.actions;

export default taskSlice.reducer;