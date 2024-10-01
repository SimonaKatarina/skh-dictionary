import React, {useState} from "react";
import Result from "./Result";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(){
let [keyword, setKeyword]=useState(null);
let [results, setResults]=useState(null);

function handleResponse(response){
    setResults(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
}

 function search(event){
    event.preventDefault();
    
    // documentation: https://api.dictionaryapi.dev/
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}


 function handleKeywordChange(event){
 
    setKeyword(event.target.value);
 }

    return (
        <div className="Dictionary">
          <form onSubmit={search}>
            <input type="search" placeholder="Your word here..." onChange={handleKeywordChange} />
          </form>
          <Result results={results}/>
        </div>
    );
    }