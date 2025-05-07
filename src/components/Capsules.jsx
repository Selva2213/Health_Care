import React, { useState } from 'react'

const Capsules = ({ name }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(clicked => !clicked);
    }

    return (
        <button
            className='py-2 px-7 rounded-full border-[1px] border-gray-400 font-semibold hover:bg-gray-300 transition-all duration-300'
            onClick={handleClick}
            style={{ background: clicked && "#0263eb", color: clicked ? "white" : "black" }}>
            {name}
        </button>
    )
}

Capsules.defaultProps = {
    name: "Verified"
}

export default Capsules
