import React from 'react'
import './aboutus.css'
import About from '../assets/aboutus.jpg'
function Aboutussection(){
    return(
        <>
        <div className="maincontainer aboutmain">
        <h1 className='subheading'>About <span>Us</span></h1>
        <div className="aboutussection">
            <div className="content">
                <h1>About ME</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis repellendus cum optio possimus. Excepturi provident cumque recusandae, obcaecati quod quidem dignissimos officia fugiat asperiores earum vel nostrum? Odit, quia vitae.
                Labore voluptate repellendus alias iusto dolor quod tempora eum quam cupiditate provident asperiores expedita, ducimus dicta eaque illum, placeat aut, doloremque sapiente modi quibusdam laborum? Totam officia quis unde autem!
                Dolorem distinctio quam asperiores harum incidunt illo ratione doloremque facilis quibusdam fugit autem quia dolor nemo perspiciatis saepe, expedita neque et dolores! Minima ipsum recusandae repudiandae quos voluptates illum debitis?</p>
            </div>
            <div className="aboutusimage">
                <img src={About} alt="" />
            </div>
        </div>
        </div>
        </>
    )
}

export default Aboutussection;