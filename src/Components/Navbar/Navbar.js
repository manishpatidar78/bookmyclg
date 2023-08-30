import React from 'react'
import { Link } from 'react-router-dom';
//  import Movies from './Movies' 
//  import Eventslider from './Eventslider';

function Navbar() {
    return (
        <div>

            <nav className='navbar'>
                <div className='right'>
                    <Link to="/">
                    <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" />
                    </Link>

                    <input type="text" name="" id="" placeholder='Search for movies here' />
                </div>
                <div className='left'>
                    <select name="" id="">
                        <option value="Kochi">Kochi</option>
                        <option value="mumbai">Mumbai</option>

                    </select>
                    <button>Sign in</button>
                </div>
            </nav>

            <div className="menu">
                <div className="menuleft">
                    <Link to="/movies">Movies</Link>
                    <Link to="/stream">Stream</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/plays">Plays</Link>
                    <Link to="/sports">Sports</Link>
                    <Link to="/activities">Activities</Link>
                    <Link to="/Buzz">Buzz</Link>
                    <Link to="/icc_mens"><a href=""><img src="https://assets-in.bmscdn.com/static/2023/08/cwc23.png" alt="" width={"250px"} /></a> </Link>
                
                    
                </div>

                <div className=" rightmenu">
                    <Link to="/listyourShow">ListYourShow</Link>
                    <Link to="/Corporates">Corporates</Link>
                    <Link to="/Offers">Offers</Link>
                    <Link to="/giftcards">Gift Cards</Link>
          
                </div>
            </div>

           
        </div>
        // ---
    )
}

export default Navbar;