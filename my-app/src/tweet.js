import React from "react";

function Tweet({name,text,likes}){
    return(
        <div className="tweet">
            <h3>{name}</h3>
            <p>{text}</p>
            <h3>{likes} likes</h3>
        </div>
    )
}

export default Tweet;