import React, { useState } from 'react'
import './App.css'

function App() {
  const [content, setContent] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, content: "리액트 공부하기"},
    { id: 2, content: "css 공부하기"},
  ]);
  const onChangeHandler = (event) => {
    setContent(event.target.value);
  };
  const onClickHandler = () => {
    setTodos([...todos, { id: todos.length+1, content: content}])
  };

  return (
    <div className='layout'>

      {/* 입력파트 */}
      <div className='input'>
        <input type="text" onChange={onChangeHandler}/> 
        <button onClick={onClickHandler}>추가하기</button>
      </div>

      {/* 출력 파트 */}
      <h1>Todo List</h1>
      <div className='main'>
        {todos.map((todo) => {
          return <div className='box' key={todo.id}>
            {todo.content}
          </div>;
        })}
      </div>

    </div>
  )
}

export default App