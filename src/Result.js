import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Result(props){
console.log(props.results);
    if (props.results){
    return (
        <div className="Results">
            <h2>{props.results.word} </h2>
            {props.results.phonetics.map(function(phonetics, index){
                return (
                    <div key={index}>
                        <Phonetics phonetic={phonetics}/>
                    </div>
                )
            })}
            {props.results.meanings.map(function(meaning, index){
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                )
            })}
        </div>
    );
} else {
    return null;
}
}