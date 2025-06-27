import React from 'react'

const Navbar = ({setCategory}) => {
  return (
     <nav className="navbar navbar-expand-lg  bg-dark ">
      <div className="container-fluid ">
      <a className="navbar-brand text-white" href="#"><span className='badge bg-white text-black'>NewsHub</span></a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <div className="nav-link text-white" onClick={()=>setCategory("technology")} >Technology</div>
        </li>
         <li className="nav-item ">
          <div className="nav-link text-white" onClick={()=>setCategory("business")} >Business</div>
        </li>
         <li className="nav-item ">
          <div className="nav-link text-white" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
         <li className="nav-item ">
          <div className="nav-link text-white" onClick={()=>setCategory("health")}>Health</div>
        </li>
         <li className="nav-item ">
          <div className="nav-link text-white" onClick={()=>setCategory("sports")}>Sports</div>
        </li>
       
       
      </ul>
     </div>
     </div>
     </nav>
  )
}

export default Navbar