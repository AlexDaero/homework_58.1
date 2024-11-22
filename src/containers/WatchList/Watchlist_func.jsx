import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Watchlist.css';
import Film_func from './Film/Film_func';

function WatchList_func() {
    const [films, setFilms] = useState([])
    const inputNameRef = useRef(null)

    const addFilm = () => {
        if (inputNameRef.current.value.length > 0) {
            const copyState = [...films]
            copyState.push(inputNameRef.current.value)
            setFilms(copyState)
            return
        }
        alert('Некорректный ввод!')
    }

    useEffect(() => {
        console.log(films)
    }, [films])

    const removeFilm = (index) => {
        const copyState = [...films]
        copyState.splice(index, 1)
        setFilms(copyState)
    }

    const handleValue = (index, value) => {
        const copyState = [...films]
        copyState[index] = value
        setFilms(copyState)
    }

    return (
        <div className="WatchList" >
            <div className='add_block'>
                <input className='add_block_input' ref={inputNameRef} type="text" placeholder='Введите название фильма' />
                <button className='add_block_btn' onClick={addFilm}>Добавить</button>
            </div>
            <div className='film_block'>
                <h3>Что посмотреть:</h3>
                {films.map((film, index) => {
                    return (
                        <Film_func
                            key={index}
                            onChange={(e) => handleValue(index, e.target.value)}
                            film={film}
                            click={() => removeFilm(index)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default WatchList_func;