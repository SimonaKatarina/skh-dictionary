import React, {useState} from "react";

export default function Dictionary(){
let [keyword, setKeyword]=useState(null);


 function search(event){
    event.preventDefault();
    alert(`${keyword}`);
 }

 function handleKeywordChange(event){
 
    setKeyword(event.target.value);
 }

    return (
        <div className="Dictionary">
          <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
            <input type="submit" placeholder="Search" />
          </form>
        </div>
    );
    }