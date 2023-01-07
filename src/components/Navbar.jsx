import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Navbar.css'
import { NavLink } from 'react-router-dom';
export default function Navbar() {
    const navigate = useNavigate();
    const handleSportsRequest = async () => {
        try {
            navigate('/sport');

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="mainBox">


                <a href="/" className='headLink' >

                    News App
                </a>
                <div className="sideBox">

                    <input type="text" placeholder='Search' />

                    <div className="subHeading">

                        Filter by -
                    </div>


                    <div className="filterOptions">

                        <NavLink to="/sport" style={({ isActive }) => ({
                            color: isActive ? 'yellow' : 'rgb(231, 241, 149)',
                            fontWeight: isActive ? "bold" : "thin",
                            textDecoration: isActive ? "underline" : "none"
                        })}>
                            Sports
                        </NavLink>

                        <NavLink to="/science" style={({ isActive }) => ({
                            color: isActive ? 'yellow' : 'rgb(231, 241, 149)',
                            fontWeight: isActive ? "bold" : "thin",
                            textDecoration: isActive ? "underline" : "none"
                        })} >
                            Science
                        </NavLink>

                        <NavLink to="/technology" style={({ isActive }) => ({
                            color: isActive ? 'yellow' : 'rgb(231, 241, 149)',
                            fontWeight: isActive ? "bold" : "thin",
                            textDecoration: isActive ? "underline" : "none"
                        })} >
                            Technology
                        </NavLink>

                        <NavLink to="/health" style={({ isActive }) => ({
                            color: isActive ? 'yellow' : 'rgb(231, 241, 149)',
                            fontWeight: isActive ? "bold" : "thin",
                            textDecoration: isActive ? "underline" : "none"
                        })}>
                            Health
                        </NavLink>

                        <NavLink to="/business" style={({ isActive }) => ({
                            color: isActive ? 'yellow' : 'rgb(231, 241, 149)',
                            fontWeight: isActive ? "bold" : "thin",
                            textDecoration: isActive ? "underline" : "none"
                        })}>
                            Business
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
