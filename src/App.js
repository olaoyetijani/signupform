import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

const formStyle = {
    margin: 'auto',
    justifyContent: 'center',
    width: '50%',
    border: '2px solid blue',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0,0,0.8)',
    marginTop: '100px'
}



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            username: '',
            email: '',
            password: ''
        }

        this.changeFullName = this.changeFullName.bind(this)
        this.changeUserName = this.changeUserName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event) {
        this.setState({
            fullname: event.target.value
        })
    }

    changeUserName(event) {
        this.setState({
            username: event.target.value
        })
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const registered = {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password

        }
        axios.post('http://localhost:4000/app/signup', registered)
            .then(res => console.log(res.data))

        // use (window.location) if you want to redirect to another page //
        this.setState({
            fullname:'',
            username:'',
            email:'',
            password:''
        })     
    }

    render() {
        return(
            <div>
                <div className='container' style={formStyle}>
                    <form onSubmit={this.onSubmit} className='m-5'>
                        <input type='text' placeholder="Full Name" onChange={this.changeFullName} value={this.state.fullname} className='form-control mb-4'/>

                        <input type='text' placeholder="Username" onChange={this.changeUserName} value={this.state.username} className='form-control mb-4'/>

                        <input type='text' placeholder="E-mail" onChange={this.changeEmail} value={this.state.email} className='form-control mb-4'/>

                        <input type='password' placeholder="Password" onChange={this.changePassword} value={this.state.password} className='form-control mb-4'/>

                        <input type='submit' className='btn btn-primary mb-6' value='Submit' />
                    </form>
                </div>
            </div>
        );
    }
}


export default App