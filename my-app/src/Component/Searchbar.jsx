import React, { useState } from 'react'
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import CloseIcon from '@material-ui/icons/Close';

const Searchbar = ({data}) => {
    //created a usestate for my filter function
    const [filterdata, setfilterdata]=  useState([]);

    //making it an empty string,so that whenever click it will erase every targeted value
    const [wordEntered, setwordEntered] = useState("");

    //writing a function to target the inputed word and also filtering the targeted word
    const handleFilter = (e)=>{
    const searchword = e.target.value
    setwordEntered(searchword)
    const newfilter = data.filter((e)=>{
        //coverting to lowercase to aviod case sensitivity
        return e.title.toLowerCase().includes(searchword.toLowerCase());
    });
        //saying if the searchword is empty string, it should erase the word
    if(searchword === ""){
        setfilterdata([])
    }else{
        setfilterdata(newfilter)
    }
    
    }

    //function for the  clear button
    const clearinput = () => {
        setfilterdata([]);
        setwordEntered("");
    }

    return (
        <div className="search">
             <h3>Search filter by Bright's Tech</h3>
            <div className="searchinput">
             <input type="text"  required placeholder="Enter a Book Name..." data-testid="input1" value={wordEntered} onChange={handleFilter}/>  
             <div className="searchIcon">
                 {filterdata.length === 0 ? (<YoutubeSearchedForIcon/>) :(<CloseIcon className="clearBtn" onClick={clearinput}/>)}
                 
             </div>
            </div>
            
            {filterdata.length !== 0 && (
                 
                 <div className="dataresult">
                 {filterdata.slice(0, 10).map((e, key)=>{
                     return <a className="dataiteam" href={e.link} target="_blank" rel="noreferrer">
                         <p>{e.title}</p>
                         </a>
                 })}
             </div>

            )}
           
        </div>
    )
}

export default Searchbar
