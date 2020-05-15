import React, { Component } from 'react'
import TodoList from './TodoList.js'

export default class TaskDetail extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map(task => <TodoList task={task} handleClick={this.props.handleClick}/>)}
                </ul>
            </div>
        )
    }
}
