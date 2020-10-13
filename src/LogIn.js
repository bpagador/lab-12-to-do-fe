import React, { Component } from 'react'
import request from 'superagent';

export default class LogIn extends Component {
    State = {
        email: '',
        password: ''
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        let token = await request.post(`http://localhost:3000/auth/signin`, this.state)
        localStorage.setItem('TOKEN', token.body.token)
        this.props.history.push('/todos')
    }

    render() {
        return (
            <div>
                Log In Page
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email: 
                    <input onChange={(e) => this.setState({ email: e.target.value})} />
                    </label>
                    <label>
                        Password: 
                    <input onChange={(e) => this.setState({ password: e.target.value})} />
                    </label>
                    <button>Sign In</button>
                </form>
            </div>
        )
    }
}