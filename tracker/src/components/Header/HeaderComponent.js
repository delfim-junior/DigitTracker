import React from 'react';
import { FiUser, FiLogOut } from 'react-icons/fi'

import './styles.css'

function Header({ handleNavigateToInitialPage, userName }) {

    return (
        <header className="main-header">
            <div>
                <FiUser />
                <h6>{userName}</h6>
            </div>
            <div onClick={() => handleNavigateToInitialPage()}>
                <h6>Logout</h6>
                <FiLogOut />
            </div>
        </header>
    )
}

export default Header;