import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
    return (
        <div className='links'>
            <i class="fab fa-apple"></i>
            <Link to='mac'>Mac</Link>
            <Link to='ipad'>iPad</Link>
            <Link to='iphone'>iPhone</Link>
            <Link to='watch'>Watch</Link>
            <Link to='tv'>TV</Link>
            <Link to='music'>Music</Link>
            <Link to='support'>Support</Link>
            <i class="fas fa-search"></i>
            <i class="fas fa-shopping-bag"></i>
        </div>
    );

}
export default NavLinks;