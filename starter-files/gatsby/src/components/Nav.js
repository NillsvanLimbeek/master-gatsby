import React from 'react';
import { Link } from 'gatsby';

export function Nav() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/pizza">Pizza Menu</Link>
            </li>
        </ul>
    );
}
