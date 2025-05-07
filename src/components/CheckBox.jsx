import React from 'react'

const CheckBox = ({ value, nameAtt, idAtt, handler, setter, checkedOption }) => {
    return (
        <div className='flex items-center gap-2'>
            <input className='w-4 h-4 cursor-pointer' type="checkbox" name={nameAtt} id={idAtt} onChange={e => handler(e)} checked={checkedOption === nameAtt} onClick={() => setter(nameAtt)} />
            <label htmlFor={nameAtt} className='cursor-pointer'>{value}</label>
        </div>
    )
}

export default CheckBox
