import React, {useState} from "react";
import Result from "./Result.js";
import Images from "./Images.js";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(props){
let [keyword, setKeyword]=useState(props.defaultKeyword);
let [results, setResults]=useState(null);
let [loaded, setLoaded]=useState(false);
let [images, setImages]=useState(null);

function handleDictionaryResponse(response){
    setResults(response.data[0]);
}

function handleImageResponse(response){
 setImages(response.data.photos);
}

function search(){
      // documentation: https://api.dictionaryapi.dev/
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

     let apiImgKey=`bfoaa9tbb9f25fdb436074c0df5a4b84`;
    let apiImgUrl=`https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiImgKey}`
    axios.get(apiImgUrl).then(handleImageResponse);
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
          <Images images={images}/>
        </div>
    );
    }
  else {
    load();
    return ("Loading");
 }
}