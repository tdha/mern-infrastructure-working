import { useState } from 'react';
// import { signUp } from '../../utilities/users-services';
import './SignUpForm.css';
import { Link } from 'react-router-dom';

const SignUpForm = ({ setUser, showSignup, setShowSignup }) => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
            error: ''
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await signUp(userData);
            setUser(user);
        } catch {
            setError('Sign Up Failed - Try Again');
        }
    }

    const disable = userData.password !== userData.confirm;

    return (
            <div>
                <div className="signup-container">
                    <h1 style={{ marginBottom: '1em' }}>{showSignup ? 'Sign Up Page' : 'Log In Page'}</h1>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <div className='username'>
                            <input type="text" name="name" value={userData.name} onChange={handleChange} required placeholder='Username' />
                        </div>
                        <div className='email'>
                            <input type="email" name="email" value={userData.email} onChange={handleChange} required placeholder='Email' />
                        </div>
                        <div className='password'>
                            <input type="password" name="password" value={userData.password} onChange={handleChange} required placeholder='Password' />
                        </div>
                        <div className='password-confirm'>
                            <input type="password" name="confirm" value={userData.confirm} onChange={handleChange} required placeholder='Password Confirm' />
                        </div>
                        <button className='signup-button' type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                    <p>Already have an account and want to login, click <Link onClick={() => setShowSignup(!showSignup)}>here</Link></p>
                </div>
                <p className="error-message">{error}</p>
            </div>
    );
}

export default SignUpForm;

// import { Component } from "react";

// class SignUpForm extends Component {

//     state = {
//         name: '',
//         email: '',
//         password: '',
//         confirm: '',
//         error: ''
//     }

//     handleChange = (evt) => {
//         this.setState({
//             [evt.target.name]: evt.target.value,
//             error: ''
//         });
//     };

//     handleSubmit = (evt) => {
//         evt.preventDefault();
//         alert(JSON.stringify(this.state));
//     }

//     render() {
//     const disable = this.state.password !== this.state.confirm;
//     return (
//         <div>
//         <div className="form-container">
//             <form autoComplete="off" onSubmit={this.handleSubmit}>
//             <label>Name</label>
//             <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
//             <label>Email</label>
//             <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
//             <label>Password</label>
//             <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
//             <label>Confirm</label>
//             <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
//             <button type="submit" disabled={disable}>SIGN UP</button>
//             </form>
//         </div>
//         <p className="error-message">&nbsp;{this.state.error}</p>
//         </div>
//     );
//     }

// }

// export default SignUpForm 