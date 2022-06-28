import React, { useState } from 'react'

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setinputCardTitle] = useState("タイトル");

  const handleClick = () => {
    setIsClick(true);
    console.log(isClick);
  }

  const handleChange = (e) => {
    setinputCardTitle(e.target.value);
    if(e.target.value.length > 9) {
        alert("10文字以上入力できません。");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  }

  const handleOnBlur = () => {
      setIsClick(false);
  }

  

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? 
        (<form onSubmit={handleSubmit}><input className="taskCardTitleInput" autoFocus type="text" onChange={handleChange} onBlur={handleOnBlur} value={inputCardTitle} maxLength="10"/></form>) :
        <h3>{inputCardTitle}</h3>
      }
    </div>
  )
}

export default TaskCardTitle
