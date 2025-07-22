import React, { useEffect, useState } from 'react'
import Newitems from './Newitems';
import { API_KEY } from '../Data';
const Newboard = ({category}) => {
    const [articles ,setArticals]=useState([]);
    useEffect(()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
    fetch(url).then(response=>response.json().then(data=>setArticals(data.articles)));
    },[category]);
  return (
    <div>
        <h3 className='text-center mt-3 mb-3'>Latest <span className='badge bg-danger'>News</span></h3>
        {articles.map((news,index)=>{
             return <Newitems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}
export default Newboard
