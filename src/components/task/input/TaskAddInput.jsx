import React from 'react'
import {v4 as uuid} from "uuid";

const TaskAddInput = ({inputText, setInputText, taskList, setTaskList}) => {
  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    if(inputText === "") return;
    
    //カードを追加する記述をする
    setTaskList([...taskList, {
      id: taskId,
      draggableId: `tack-${taskId}` ,
      text: inputText,
    },
  ]);
  setInputText("");
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='add a task' className='tastAddInput' onChange={handleChange} value={inputText}/>
        </form>
    </div>
  )
}

export default TaskAddInput
