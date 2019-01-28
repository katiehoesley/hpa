import React from 'react'; 

const WelcomeBar = ( props) => {

    const user = props.user.split(' ').map((el) => 
        `${el[0].toUpperCase()}${el.toLowerCase().slice(1)} `
    )

    const { checkUsers, loggedInUsers } = props;

    return(
        <div className="welcome-bar">
            Welcome to HP, { user } 

            <button id='see-all' onClick={ checkUsers }>
                See all users
            </button>
            <div id="logged-in-users">
                { loggedInUsers }
            </div>
        </div>
    )
}

export default WelcomeBar;


