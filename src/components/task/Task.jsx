import React from 'react'

const Task = ({task, taskList, setTaskList}) => {
  const hendleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id  !== id));
  }
  return (
    <div className='taskBox'>
      <p className='taskText'>{task.text}</p>
      <button className='taskTrashButton' onClick={() => hendleDelete(task.id)}>
        <i className="fas fa-trash-alt fa-lg"></i>
        </button>
    </div>
  )
}

export default Task
