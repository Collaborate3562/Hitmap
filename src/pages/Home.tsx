import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

type Props = {}

const Home = (props: Props) => {
    const {authenticated, setAuthenticated} = useContext(AuthContext)

    const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        setAuthenticated(false);
    }

    return (
        <div>
            <div>We are in Homepage</div>
            <button onClick={() => handleLogout()}>Logout</button>
        </div>
    )
}

export default Home;