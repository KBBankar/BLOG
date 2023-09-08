import React from 'react';
import "./post.css"
import Posts from '../posts/Posts';

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://bit.ly/4613dol" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr />
            <span className="postDate">
                1 hr ago
            </span>
        </div>
        <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore repellat perspiciatis, facilis porro odio fugiat molestiae officia quibusdam cumque nam ad voluptates rem ex similique! Numquam pariatur non ullam iure.
        </p>
    </div>
  )
}

