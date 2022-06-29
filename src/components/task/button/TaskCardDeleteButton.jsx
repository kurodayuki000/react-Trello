import React from 'react'

const TaskCardDeleteButton = ({ taskCardsList, setTaskCardsList, taskCard }) => {

  const taskCardDeleteButton = (id) => {
    const isBool = window.confirm("本当に削除しますか？");
    if(isBool) {
      //タスクカードを削除する
      setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
    }
  }

  return (
    <div>
      <button className='taskCardDeleteButton' onClick={() => taskCardDeleteButton(taskCard.id)}><i className='fas fa-times fa-lg'></i></button>
    </div>
  )
}

export default TaskCardDeleteButton
