import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

const Task = ({task, taskList, setTaskList, index}) => {
  const hendleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id  !== id));
  }
  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div 
          className='taskBox'
          key={task.id} 
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className='taskText'>{task.text}</p>
          <button className='taskTrashButton' onClick={() => hendleDelete(task.id)}>
            <i className="fas fa-trash-alt fa-lg"></i>
          </button>
        </div>
      )}
      
    </Draggable>
  )
}

export default Task
