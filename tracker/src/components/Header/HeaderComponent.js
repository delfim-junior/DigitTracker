import React from 'react';
import { FiUser, FiLogOut } from 'react-icons/fi'

import './styles.css'

function Header({ handleNavigateToInitialPage }) {
    return (
        <header>
            <div>
                <FiUser />
                <h6>John Doe</h6>
            </div>
            <div onClick={() => handleNavigateToInitialPage()}>
                <h6>Logout</h6>
                <FiLogOut />
            </div>
        </header>
    )
}

export default Header;