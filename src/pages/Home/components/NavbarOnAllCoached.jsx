import React from 'react'
import "./components.css"
import {Link} from 'react-scroll'
export const NavbarOnAllCoached = () => {
    return (
        <div className="">



            <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3">
                <a href='/' className="navbar-brand" style={{color:"#D27100"}} >Bi'Atalet Koçluk</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i color='white' class="fa fa-caret-down" aria-hidden="true"></i>

                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Link</a>
                        </li>
                       
                      
                    </ul> */}
                    <ul className="navbar-nav ml-auto">
                        {/* <li className="nav-item active">
                            <a className="nav-link text-white" >SOSYAL MEDYA <span className="sr-only">(current)</span></a>
                        </li> */}
                        <li className="nav-item active">
                            <a href="/tumkoclar" className="nav-link text-white" style={{borderRadius:"12px", border:"solid 1px #D27100", textAlign:"center", backgroundColor: "#D27100"}} >TÜM KOÇLAR <span className="sr-only">(current)</span></a>
                        </li>
                      
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
        </div>
    )
}
