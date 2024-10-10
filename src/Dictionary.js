import React, {useState} from "react";
import Result from "./Result";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(props){
let [keyword, setKeyword]=useState(props.defaultKeyword);
let [results, setResults]=useState(null);
let [loaded, setLoaded]=useState(false);

function handleResponse(response){
    setResults(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
}

function search(){
      // documentation: https://api.dictionaryapi.dev/
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}

 function handleSubmit(event){
    event.preventDefault();
    search();
 }


 function handleKeywordChange(event){
 
    setKeyword(event.target.value);
 }

 function load(){
  setLoaded(true);
  search();
 }
 if (loaded){
  return (
        <div className="Dictionary">
          <section>
          <h1>What are you looking for ?</h1>
          <form className="Search" onSubmit={handleSubmit}>
            <input  type="search" placeholder="Your word here..." onChange={handleKeywordChange} />
          </form>
          <div className="hint">
          examples words: creativity, sunset, book...
          </div>
          </section>
          <Result results={results}/>
        </div>
    );
    }
  else {
    load();
    return ("Loading");
 }
}