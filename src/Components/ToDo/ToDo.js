import React from 'react';
import {Container} from 'reactstrap';
import ToDoForm from './ToDoForm';

//? In this challenge your goal is to create a to do list: 
//? 1.) ability to accept a task from a user
//? 2.) ability to add this to the state
//? 3.) ability to display all of the tasks
//? 4.) ability to evaluated if a task was completed and update the state

const ToDo = () => {
  return(
    <Container className="App">
      <br />
      <h1>To Do List</h1>
      <ToDoForm />
    </Container>
  );
};

export default ToDo