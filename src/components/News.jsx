import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/News.css'

import { RotatingSquare } from 'react-loader-spinner'
const urlHead = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=a0b9e39bbcdb4eaaaf6a2274e64d8d5e&q=in';

const oneUrl = `https://newsapi.org/v2/top-headlines?country=in&category=`;
const apiKey = `&apiKey=a0b9e39bbcdb4eaaaf6a2274e64d8d5e&q=in`;
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
            const res = await axios.get(finalUrl); setNews(res.data.articles); console.log(res.data.articles);
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
                color="red"
                ariaLabel="rotating-square-loading"
                strokeWidth="2"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            /></>)
    return (
        <div>

            <input type="text" placeholder='filter' value={filt} onChange={handleFilt} />
            <button onClick={showNews}>Search</button>
            {heading}
            <a href="/">Home</a>



            {news.map((item) => {
                return (

                    <div className='newsBox'>

                        <div className="singleNews">


                            <div className="one">

                                <img src={item.urlToImage} className="newsImage" />
                                <span className="title">

                                    {item.title}
                                </span>
                            </div>
                            <span className="author">

                                {item.author}
                            </span>
                            <span className="desc">

                                {item.description}
                            </span>
                            <span className="link">

                                <a href={item.url} target="_blank" >Read More</a>
                            </span>

                        </div>
                    </div>

                )
            })}
        </div>
    )
}
