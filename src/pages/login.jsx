import React, { Component } from 'react';
import Joi from 'joi-browser'
import Input from './input'
class Login extends Component {
    state = { 
        account: {
            username:'',
            password:''
           },
        errors:{}   
     } 
     schema = {
        username: Joi.string().required().label('Your error message in here'),
        password: Joi.string().required().label('Password')

     }
     validate = () => {
        const options = { abortEarly:false } 
        const { error } = Joi.validate(this.state.account, this.schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details)
         errors[item.path[0]] = item.message;
         return errors;
        //console.log('result', result)
        //  const errors = {};
        // const { account } = this.state;
        //  if(account.username.trim() === '')
        //  errors.username = 'Username is required';
        //  if(account.password.trim() === '')
        //  errors.password = 'Password is required';   
        // return Object.keys(errors).length === 0 ? null : errors;
    }
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

  

     handleSubmit = (e) =>{
        e.preventDefault();
        const errors = this.validate();
        //console.log('c',errors)
        this.setState({errors: errors || {} })
        if (errors) return;
        
    }
    handleChange = ({currentTarget: input}) =>{
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        //console.log('cd',errors)
        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState ({account, errors})
        
    }
    render() { 
        const {account, errors} = this.state;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="pt-4">
                        <h1>Login</h1>
                        <form onSubmit={this.handleSubmit}>
                            <Input
                                 value={account.username} 
                                 name='username'
                                 label='Username'
                                 type="text"
                                 onChange={this.handleChange}
                                 error ={errors.username}
                                 
                            />
                            <Input
                                 value={account.password} 
                                 name='password'
                                 label='Password'
                                 type="password"
                                 onChange={this.handleChange}
                                 error ={errors.password}
                            />     
                            {/* <div className="form-group mb-3">
                                <label htmlFor="username">Username</label>
                                <input 
                                   
                                    
                                    id="username" 
                                    
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Username"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input 
                                    value={account.password}  
                                    onChange={this.handleChange}
                                    type="text" 
                                    className="form-control" 
                                    id="password" 
                                    name='password'
                                    placeholder="Password"
                                />
                            </div> */}
                            <button 
                               disabled={this.validate()}
                                type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Login;