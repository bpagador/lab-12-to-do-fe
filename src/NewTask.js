import React, { Component } from 'react'

export default class NewTask extends Component {
    render() {
        return (
            <div>

                <form onSubmit={this.props.handleSubmit}>

                    <label>
                        New Task
                        <input name='name' onChange={this.props.handleNameChange}/>

                    </label>

                    <label>
                        Urgency levels: low, medium, high
                        <input name='urgency_level' type='text' onChange={this.props.handleUrgencyChange}/>

                    </label>

                    <button>Add to my to-do list</button>

                </form>

            </div>
        )
    }
}
