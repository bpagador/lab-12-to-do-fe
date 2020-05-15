import React, { Component } from 'react'
import request from 'superagent';

export default class SignUp extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSignUp = async (e) => {
        e.preventDefault();
        let token = await request.post('http://localhost:3000/auth/signup', this.state)
        localStorage.setItem('TOKEN', token.body.token)
        this.props.history.push('/todos')
    }
        
    render() {
        console.log(this.state)
        
        return (
            <div className='signup-container'>
                Sign Up

                <form className='signup-form' onSubmit={this.handleSignUp}>

                    <label>
                        Email:
                        <input onChange={ (e) => this.setState({ email: e.target.value })} required />

                    </label>

                    <label>
                        Password:
                        <input onChange={ (e) => this.setState({ password: e.target.value })} required />

                    </label>

                    <button>Sign Up</button>

                </form>

            </div>
        )
    }
}
