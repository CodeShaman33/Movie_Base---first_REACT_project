import {React, useEffect} from 'react';
import './App.css'

//20849a0e

const API_URL = 'https://www.omdbapi.com?apikey=20849a0e';



const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        console.log(data);
    };


    useEffect(() => {
        searchMovies('The Shawshank Redemption');
        
    }, []);
    return (
        <div>
            <h1>Hello Wccorld</h1>
        </div>
    )
}



export default App;