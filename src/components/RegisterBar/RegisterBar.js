import React from 'react';

const RegisterBar = ({changeRoute}) => {

        return(
        <nav style={{display:'flex', justifyContent: 'flex-end'}}>
            <p onClick= {() => changeRoute('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
            <p onClick= {() => changeRoute('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
        </nav>
            )
}
export default RegisterBar;