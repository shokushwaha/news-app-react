import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/News.css'

import { RotatingSquare } from 'react-loader-spinner'
const urlHead = 'https://gnews.io/api/v4/search?q=example&token=d2506f2e4b590427f97cf7e75395a841&lang=en&country=us&max=40';

const oneUrl = 'https://gnews.io/api/v4/top-headlines?topic=';
const apiKey = '&token=d2506f2e4b590427f97cf7e75395a841&lang=en&country=us&max=10';
export default function News() {

    const [news, setNews] = useState([]);
    const [text, setText] = useState('');
    const [filt, setFilt] = useState('');
    const [heading, setHeading] = useState('Top Headlines');
    const [loading, setLoading] = useState(false);


    const handleFilt = (e) => {
        setFilt(e.target.value);
        setText(e.target.value);

    }
    const showNews = async () => {
        try {

            setLoading(true);
            setHeading(text);
            setFilt('');
            const finalUrl = `${oneUrl}${filt}${apiKey}`;
            const res = await axios.get(finalUrl);
            setNews(res.data.articles);
            console.log(res.data.articles);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const getNews = async () => {
            try {
                setLoading(true);
                const res = await axios.get(urlHead);
                setNews(res.data.articles);
                console.log(res.data.articles);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }

        getNews();
    }, [])

    if (loading)
        return (<>
            <RotatingSquare
                height="500px"
                width="100%"
                color=" #65e3c7"
                ariaLabel="rotating-square-loading"
                strokeWidth="2"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            /></>)
    return (
        <div className='wrapper'>
            <div className="navbar">
                <div className="newsHead">

                    <a href="/" >NEWS</a>
                </div>
                <input type="text" placeholder='Filter....' value={filt} onChange={handleFilt} />
                <button onClick={showNews} className="searchBtn"  >SEARCH</button>



            </div>

            <div className="heading">

                {heading}
            </div>
            <div className='newsBox'>
                {news.map((item) => {
                    return (



                        <div className="singleNews">


                            <div className="one">

                                <img src={item.image} className="newsImage" />
                                <span className="title">

                                    {item.title}
                                </span>
                            </div>

                            <span className="desc">

                                {item.content}
                            </span>
                            <span className="link">

                                <a href={item.url} target="_blank" className='readMore' >Read More</a>
                            </span>

                        </div>


                    )
                })}   </div>
        </div>
    )
}
