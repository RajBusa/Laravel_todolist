import React from 'react'
import axios from 'axios'
import datetimeDifference from "datetime-difference";
const TaskItem = (props) => {

    const start = (task) => {
        console.log(task)
        console.log(format(new Date()));
        console.log();
        // axios.put('http://127.0.0.1:8000/api/list/'+task.id, {title: task.title,'start_time': new Date().getFullYear()+"-"+new Date().getMonth()+"-" + new Date().getDate()+" " + new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds(), end_time: null})
    }

    const end = (task) => {
        console.log(task)
        // axios.put('http://127.0.0.1:8000/api/list/'+task.id, {title: task.title, 'start_time': task.start_time, end_time: new Date().getFullYear()+"-"+new Date().getMonth()+"-" + new Date().getDate()+" " + new Date().getHours()+ ":" + new Date().getMinutes() + ":" + new Date().getSeconds()})
    }
    
    const duration = (task) => { 
        const date1 = new Date(task.start_time);
        const date2 = new Date(task.end_time);
        const result = datetimeDifference(date1, date2);
        console.log(result)
        const readme = Object.keys(result)
            .filter(k => !!result[k])
            .map(k => `${result[k]} ${k}`)
            .join(", ");
        console.log(readme)
        return readme;
    }


    return (
        <div className='row mt-2 '>
            <div className='col-8'>
                <div>{props.task.title}</div>
            </div>
            {
                (!props.task.start_time && !props.task.end_time) &&
                <div className='d-grid gap-2 col-2'>
                    <button type="button" class="btn btn-success" onClick={() => start(props.task)}>Start</button>
                </div>
            }
            {
                (!props.task.start_time && !props.task.end_time) &&
                <div className='d-grid gap-2 col-2'>
                    <button type="button" class="btn btn-danger" onClick={() => end(props.task)}>End</button>
                </div>
            }
            {
                (props.task.start_time && props.task.end_time) &&
                <div className='d-grid gap-2 col-4'>
                    <button type="button" class="btn btn-light" disabled>{duration(props.task)}</button>
                </div>
            }
        </div>
    )
}

export default TaskItem