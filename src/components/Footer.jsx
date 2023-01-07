import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "../CSS/Footer.css"
const url = "https://gmail.us21.list-manage.com/subscribe/post?u=b0c90790fd047cf57b4b2d7ba&amp;id=3b16440a66&amp;f_id=00ebd2e1f0"
export default function Footer() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            const res = await axios.post(url);
            if (res)
                alert("Subscribed!");
            else
                alert("Can't subscribe")
        } catch (error) {
            console.log(error);
            alert("Some error occured");
        }

    };
    return (
        <div className='footBox'>Footer


            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input type="submit" value="Subscribe" />
                {message && <p>{message}</p>}
            </form>

        </div>




    )
}
