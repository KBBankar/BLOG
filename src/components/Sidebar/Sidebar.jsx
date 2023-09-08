import React from 'react';
import "./sidebar.css"


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://scontent.fnag10-1.fna.fbcdn.net/v/t39.30808-6/375827620_2258676174316251_1807184559511405941_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=7OtlyfaACosAX9eptYb&_nc_ht=scontent.fnag10-1.fna&oh=00_AfBtW1YfeHHkHbMWfQ3__FxrdJObNyQMkjytaH7ibB_FHw&oe=64FED8D3" alt="" />
            <p>I have a deep passion for music, movies, and poetry. These art forms have a unique way of touching my soul and allowing me to express myself. Whether I'm losing myself in the melodies of my favorite songs, immersing in the captivating stories of films, or finding solace in the beauty of words woven into poems, these creative outlets are my sanctuary. They provide me with inspiration, joy, and a sense of connection to the world around me. In the world of music, cinema, and literature, I find my truest self and endless opportunities for exploration and self-expression.   
            </p>
        </div>
        <div className="sidebarItem">
           <span className="sidebarTitle">CATAGORIES</span> 
           <ul className="sidebarList">
            <li className="sidebarListItems">Life</li>
            <li className="sidebarListItems">Music</li>
            <li className="sidebarListItems">Style</li>
            <li className="sidebarListItems">Sport</li>
            <li className="sidebarListItems">Tech</li>
            <li className="sidebarListItems">Photography</li>
           </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}
