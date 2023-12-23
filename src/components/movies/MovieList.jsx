import React, { useEffect, useState } from 'react'

import './movie-list.styled.css'
import axios from 'axios';
import _ from 'lodash';

const MovieList = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/movie/popular', {
            params: {
                page,
                api_key: process.env.REACT_APP_API_KEY
            }
        })
            .then((res) => {
                setData(state => (_.uniqBy([...state, ...res.data.results], 'id')))
            })

    }, [page])

    return (
        <div className='movies'>
            <div className='search'>
                <input type='text' placeholder='Search movie' />
            </div>
            <h2 className="movie-title">Popular</h2>
            <div className='movie-list'>
                {
                    data.map(movie => (
                        <div className='movie-list__card'>
                            <img src= {`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="thumbnail" className='card-thumb' />
                            <div className='box'>
                                <h2 className='card-title'>
                                    {movie.title}
                                    <span className='card-rate'>{movie.vote_average.toFixed(1)}</span>
                                </h2>
                                <time className='card-date'>{movie.release_date}</time>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='pagination'>
                <div className='nav' onClick={() => setPage(state => state + 1)}>Loadmore</div>
            </div>
        </div>
    );
};

export default MovieList;