import React  from 'react';

class Register extends React.Component {
    constructor(){
        super();
        this.state = {
            'username': '',
            'password': '',
            'email': ''
        }
    }

    onChangeUsername = (event) => {
        this.setState({'username': event.target.value})
    }
    
    onChangePassword = (event) => {
        this.setState({'password': event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({'email': event.target.value})
    }

    register = () => {
        fetch('http://localhost:3001/register', {
            method : 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email
            })
        })
        .then(res => res.json())
        .then(user => {
            if(user[0].id){
                this.props.loadUserState(user);
            }
        })
        .catch(err => console.log(err))
    }


    render(){
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
            <form className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username"  id="username" onChange={this.onChangeUsername} required/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email" onChange={this.onChangeEmail} required/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onChangePassword} required/>
                </div>
                </fieldset>
                <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Register" onClick= {this.register}/>
                </div>
            </form>
            </main>
            </article>
        )
    }
}

export default Register;