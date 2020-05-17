import React, { Component } from 'react'
// import TodoList from './TodoList.js'

export default class TaskDetail extends Component {
    render() {
        return (
            <div>
                <ul>
                    Task Detail
                    {this.props.tasks.map(task => <div>{JSON.stringify(task.name, task.urgency_level)}</div>)}
                </ul>
            </div>
        )
    }
}
