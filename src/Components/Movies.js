import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Movies = () => {

    const [data, setData] = useState([]);
    

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
            setData(await response.clone().json());
        }
        getProducts();
    },[]);
    
    return (
        <>

            <div className='container'>
                <div className='row justify-content-around'>
                    {
                        data.map((item, id) => {
                            return (
                                <>
                                
                                    <div className="card my-5 py-4" key={item.show.id}>
                                        <img src={item.show.image.original} className="card-img-top" alt={item.title} style={{ height: "20rem" }}/>
                                        <h5 className='mt-3' >{item.show.name}</h5>
                                        <p>Language: {item.show.language}</p>
                                        <p>Genres: {item.show.genres}</p>
                                        <p>Rating: {item.show.rating.average}/10</p>
                                        <NavLink to={`/movieinfo/${item.show.id}`} className="btn btn-outline-primary">Book Ticket</NavLink>
                                        <div className='text-center'>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Movies