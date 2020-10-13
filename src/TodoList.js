import React, { Component } from 'react'
import './App.css'
import request from 'superagent';
import TaskDetail from './TaskDetail.js';
import NewTask from './NewTask.js';

export default class App extends Component {

  state = {
    tasks:[],
    newTask: {
        name: '',
        urgency_level: '',
        is_complete: false
      }
  }

  async componentDidMount() {
    console.log('component did mount', this.props.token)
    const fetchedData = await request.get('http://localhost:3000/api/tasks').set('Authorization', this.props.token)
    const data = fetchedData.body

    this.setState({ tasks: data })
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    const newArrayOfTasks = this.state.tasks;

    const newTask = await request.post('http://localhost:3000/api/tasks', {

      name: this.state.name,
      urgency_level: this.state.urgency_level,
      is_complete: false

    }).set('Authorization', this.props.token)

    
    newArrayOfTasks.push(newTask);
    this.setState({
      tasks: newArrayOfTasks
    })
  }
  
  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleUrgencyChange = (e) => {
    this.setState({ urgency_level: e.target.value })
  }

  handleClick = async(id) => {
    await request.put(`http://localhost:3000/api/tasks/${id}`).set('Authorization', this.props.token)
    console.log(this.props.token)
    const fetchedData = await request.get('http://localhost:3000/api/tasks/').set('Authorization', this.props.token)
    const newArrayOfTasks = fetchedData.body

    this.setState({ tasks: newArrayOfTasks })
  }

  render() {
  
    return (
      <div>
          To Do
          <NewTask handleNameChange={this.handleNameChange} handleUrgencyChange={this.handleUrgencyChange} handleSubmit={this.handleSubmit}/>

          <TaskDetail tasks={this.state.tasks} handleClick={this.handleClick}/>
      </div>

          
    
    )
  }
}