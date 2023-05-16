import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import './App.css'
import Add from './Components/Add'
import TaskItem from './Components/TaskItem'
// import { useDispatch, useSelector } from "react-redux";
// import { getTask, addTask } from "./redux/taskSlice";

function App() {
  const [task, setTask] = useState([]);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const a = useContext(taskContext)
  // const { getTask } = a
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/list').then((response) => {
            console.log(response.data);
            setTask(response.data);
        });  
    // dispatch(getTask());
  }, [])

  return (
    <>
    <div className='container mt-4'>
      <Add />
      <div>
        {task.map((taskItem) => <TaskItem task={taskItem} key={taskItem.id} />)}
      </div>
    </div>
    </>
  )
}

export default App
