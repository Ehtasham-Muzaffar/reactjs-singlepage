import React from 'react'
import './getintouch.css'
import Getphoto from  '../assets/m2.png'
function GetinTouch(){
    return (
        <div className="getcontainer">
            <div className="img">
            <img src={Getphoto} alt="" />
            </div>
            <div className="form">
                <h1>GET IN TOUCH</h1>
                <form action="">
                    <input type="text" placeholder='Name' />
                    <br />
                    <input type="email" placeholder='Email' />
                    <br />
                    <input type="number" placeholder='Age' />
                    <br />
                    <textarea name="" id="" cols="30" rows="10" placeholder='enter your address'></textarea>

                </form>
            </div>
        </div>
    )
}

export default GetinTouch;