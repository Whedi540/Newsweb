import React from 'react'
import image from "../assets/Newslogo.jpg"
const Newitems = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-white d-inline-block mb-3 mx-3 my-3" style={{maxWidth:"420px"}}>
     <img src={src?src:image} style={{height:"250px", width:"420px"}} className="card-img-top" alt="..."/>
     <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News are not avaliable"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
    </div>
   </div>
  )
}

export default Newitems