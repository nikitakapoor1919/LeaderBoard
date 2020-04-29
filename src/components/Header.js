import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire} from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    return (
        <div>
            <header className="header">
            <p className="header__title">{props.name}&nbsp; <FontAwesomeIcon icon={ faFire }/></p>
            <nav>
                <div className="nav-right hidden-xs">
                    <div className="button" id="btn">
                        <div className="bar top"></div>
                        <div className="bar middle"></div>
                        <div className="bar bottom"></div>
                    </div>
                </div>
            </nav>
        </header>
        </div>
    )
}

export default Header
