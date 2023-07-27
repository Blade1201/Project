import React from 'react'
import { FaSortDown } from 'react-icons/fa';

const OurGuestSaid= ({ content, name, whoIs }) => {
    return (
        <>
            <p className='content'>{content}</p>
            <FaSortDown size="30" color='grey'/>
            <p className='person'>{name}, {whoIs}</p>
        </>
    )
}

export default OurGuestSaid;