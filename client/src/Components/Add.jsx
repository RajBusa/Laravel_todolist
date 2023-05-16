import { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch} from "react-redux";
const Add = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const onChange = (e) => {
    setTask(e.target.value);
    console.log(e.target.value)
  }

  const addTask = () => { 
    axios.post('http://127.0.0.1:8000/api/list', {'title': task}).then((response) => {
      console.log(response);
    })
    dispatch({ type: "ADD_TASK", payload: {'title': task, start_time: null, end_time: null} })
  }

  return (
    <div className='row'>
      <div className='col-10'>
        <input type="text" class="form-control" placeholder="Add task" name='task' id='task' onChange={onChange}/>
      </div>
      <div className='d-grid gap-2 col-2'>
        <button type="button" class="btn btn-primary" onClick={addTask}>Add Task</button>
      </div>
    </div>
  )
}

export default Add
