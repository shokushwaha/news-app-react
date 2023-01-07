import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import "../CSS/Main.css"
const url = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=a0b9e39bbcdb4eaaaf6a2274e64d8d5e&q=in';
export default function Science() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            try {
                const res = await axios.get(url);
                setNews(res.data.articles);
                console.log(res.data.articles);
            } catch (error) {
                console.log(error);
            }
        }

        getNews();
    }, [])

    return (
        <>

            <div className="heading">

                Science
            </div>

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

        </>
    )
}
