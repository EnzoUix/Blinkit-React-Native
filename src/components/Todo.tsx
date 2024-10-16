import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const TodoList = () => {
    const [todos,setTodos] = useState([{id:1,Todo:'buy milk'}]);
  const [task,setTask] = useState('');

  const handleAddTask = (Todo:string) =>{
    const newTodo ={id:Date.now(), Todo};
   setTodos((prev)=> [...prev,newTodo]);
   setTask('');
  }

  const handleDelete = (id:number) => {
    setTodos(todos.filter(todo => todo.id !==id));
  }

  const handleEdit = (id:number) => {
   const newTask= todos.find(todo => todo.id === id) 
   setTask(newTask?.Todo || '');
   setTodos(todos.filter(todo => todo.id !==id))
  }
  return (
    <View>
    <Text style={styles.header}>TODO LIST</Text>

    <TextInput placeholder='add your task' style={styles.input} value={task} onChangeText={(e)=>setTask(e)}/>
    <Button title='Add Task' onPress={()=>handleAddTask(task)}/>

      { todos.map((todo,i)=>(
        <View style={styles.taskView} key={i}>
        <Text style={styles.todoItem}>{todo?.Todo}</Text>
         <Button title='X' color='darkred' onPress={()=>handleDelete(todo.id)} />
         <Button title='🖋️' color='lightgreen' onPress={()=>handleEdit(todo.id)} />
        </View>
    ))}

  </View>
  )
}

export default TodoList

const styles = StyleSheet.create({
    header:{
      fontSize:20,
      fontWeight:'900',
      margin: 'auto'
    },
    input:{
      borderWidth:2,
      marginBottom:10,
      padding:4,
    },
    container:{
      flex:1,
      margin:10
      
    },
    taskView:{
      flex:2,
      flexWrap:'wrap',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:10
    },
    todoItem:{
      width:300,
      fontSize:16,
      fontWeight:'500'
    }
  });