import React, { Component } from 'react';
import './Watchlist.css';
import Film from './Film/Film';

class WatchList extends Component {
    inputNameRef = null
    state = {
        films: []
    }
    constructor(props) {
        super(props)
        this.inputNameRef = React.createRef()
    }

    addFilm = () => {
        if (this.inputNameRef.current.value.length > 0) {
            const copyState = { ...this.state }
            copyState.films.push(this.inputNameRef.current.value)
            this.setState(copyState)
            console.log(this.state.films)
            return
        }
        alert('Некорректный ввод!')
    }

    removeFilm(index) {
        const copyState = { ...this.state }
        copyState.films.splice(index, 1)
        this.setState(copyState)
    }

    handleValue(index, value) {
        const copyState = { ...this.state }
        copyState.films[index] = value
        this.setState(copyState)
    }

    render() {
        return (
            <div className="WatchList" >
                <div className='add_block'>
                    <input className='add_block_input' ref={this.inputNameRef} type="text" placeholder='Введите название фильма' />
                    <button className='add_block_btn' onClick={this.addFilm}>Добавить</button>
                </div>
                <div className='film_block'>
                    <h3>Что посмотреть:</h3>
                    {this.state.films.map((film, index) => {
                        return (
                            <Film
                                key={index}
                                onChange={(e) => this.handleValue(index, e.target.value)}
                                film={film}
                                click={() => this.removeFilm(index)}
                            />
                        )
                    })}
                </div>
            </div>
        )
    };
}

export default WatchList;