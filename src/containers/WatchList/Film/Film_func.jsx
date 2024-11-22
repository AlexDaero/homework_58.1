import React, { memo } from "react";
import './Film.css'

const Film_func = memo(function Film_func(props) {
    console.log(props.film)
    return (
        <div className="Film" >
            <input className="Film_input" type="text" value={props.film} onChange={props.onChange} />
            <button className="Film_btn" onClick={props.click}>X</button>
        </div >
    )
})

export default memo(Film_func, () => true)