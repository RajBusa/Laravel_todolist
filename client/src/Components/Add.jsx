import { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch } from "react-redux";
const Add = (props) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const onChange = (e) => {
    setTask(e.target.value);
    // console.log(e.target.value)
  }

  const addTask = () => {
    axios.post('http://127.0.0.1:8000/api/list', { 'title': task }).then((response) => {
      // console.log(response);
    })
    dispatch({ type: "ADD_TASK", payload: { title: task, start_time: null, end_time: null } })
    setTask("");
  }

  return (
    <>
      {/* <div className='row mx-1'>
        <div className='col-10 p-0'>
          <input type="text" className="form-control py-3" placeholder="Add task" name='task' id='task' onChange={onChange} />
        </div>
        <div className='d-grid gap-2 col-2 pe-0'>
          <button type="button" className="btn btn-primary" onClick={addTask}>Add Task</button>
        </div>
      </div> */}

      <div class="input-group my-3">
        <input type="text" className="form-control border-0 shadow-sm" placeholder="Add task" name='task' id='task' value={task} onChange={onChange} />
        <button className="input-group-text btn btn-primary p-3 px-4" type='button' onClick={addTask} disabled={task.length < 5}>Add</button>
      </div>
    </>
  )
}

export default Add
