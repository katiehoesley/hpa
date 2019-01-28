import React from 'react'; 

const LoginForm = ( props ) => {

    const { onSubmit, onChange } = props; 

    return(
        <div className="login-form">
            <div id="top">Please Log in To enter the site</div>
                <label>Enter your name: </label>
                    <input type="text" name="name" onChange={ onChange } />
                    <input type="submit" value="Submit" onClick={ onSubmit }/>
        </div>  
    )
}

export default LoginForm;