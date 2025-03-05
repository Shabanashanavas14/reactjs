import React from 'react'

export default function TodoForm() {
  return (
    <div className='head'>
        <h1>Get Things Done</h1>
      <form>
        <input type="text" placeholder='What is the task today'/><br /><br />
        <button type='submit'>Add a Task</button>
      </form>
    </div>
  )
}
