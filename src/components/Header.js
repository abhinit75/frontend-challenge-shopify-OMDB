import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
    <header>
        <div>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">MovieNominations</Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Add</Link>
                        </li>

                        <li>
                            <Link to="/Watchlist">Watch List</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </header>
    );
};