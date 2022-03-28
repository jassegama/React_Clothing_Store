import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import '../components/Navbar.css'


const navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-left">
                    <div className="navbar-lang">
                        EN
                        <div className="navbar-search">
                            <input className="navbar-search-input" type="text" />
                            <Search style={{color:"gray", fontSize:16}}/>
                        </div>
                    </div>
                </div> 
                <div className="navbar-center">
                    <h1>
                        JAZZTORE
                    </h1>
                </div>
                <div className="navbar-right">
                    <div className="navbar-menu-item">REGISTER</div>
                    <div className="navbar-menu-item">SIG IN</div>
                    <div className="navbar-menu-item">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default navbar
