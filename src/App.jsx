import './App.css'
import { useState, useEffect } from 'react'
import { db } from "./firebase"
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { AddTodo } from './AddTodo';
import { RenderTodos } from './RenderTodos';

function App() {
  const [input, setInput] = useState();
  const [todos, setTodos] = useState();


  useEffect(() => {
    onSnapshot(collection(db, 'todos'), (querySnapshot) => {
      setTodos(querySnapshot.docs);
    })
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    let id = crypto.randomUUID();

    await setDoc(doc(db, `todos/${id}`), {
      todoText: input,
      id,
    });

  };


  const handleDelete = async id => {
    await deleteDoc(doc(db, `todos/${id}`))
  }

  return (
    <>
      <h1>TazTrcka</h1>
      <AddTodo
        handleSubmit={handleSubmit}
        setInput={setInput}
      />
      <RenderTodos
        handleDelete={handleDelete}
        todos={todos}
      />
    </>
  )
}

export default App
