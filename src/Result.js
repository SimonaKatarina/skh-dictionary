import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";
import "./Results.css";

export default function Result(props){
console.log(props.results);
    if (props.results){
    return (
        <div className="Results">
            <section>
            <h2>{props.results.word} </h2>
            {props.results.phonetics.map(function(phonetics, index){
                return (
                    <div key={index}>
                        <Phonetics phonetic={phonetics}/>
                    </div>
                )
            })}
            </section>
            {props.results.meanings.map(function(meaning, index){
                return (
                    <section key={index}>
                        <Meaning meaning={meaning} />
                    </section>
                )
            })}
        </div>
    );
} else {
    return null;
}
}