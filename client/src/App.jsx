import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import './App.css'
import Add from './Components/Add'
import TaskItem from './Components/TaskItem'
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [task, setTask] = useState([]);
  const dispatch = useDispatch();
  const list = useSelector((state) => state)
  // list = ;
  // setTask(list.reverse())
  // setTask(list)
  // console.log(list,"list")
  const getData = () => {
    // console.log("getdara")
    axios.get('http://127.0.0.1:8000/api/list').then((response) => {
      // console.log(response.data);
      dispatch({ type: "FETCH_DATA", payload: response.data });
    });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='container mt-4'>
        <Add/>
        <div>
          {list.dataReducer.map((taskItem) =>
              <TaskItem task={taskItem} key={taskItem.id} />
          )}
        </div>
      </div>
    </>
  )
}

export default App
