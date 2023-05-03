import React from 'react'
import star from '../../public/assets/star.png'

export default function Card(props) {

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (

        <div className='card'>

            {badgeText && <div className='card-badge'>{badgeText}</div>}

            <img className='card-image' src={`../assets/${props.item.coverImg}`} alt="image" />

            <div className='card-stats'>
                <img className='card-stats-star' src={star} alt="*" />
                <span>{props.item.stats.rating}</span>
                <span className='gray'>({props.item.stats.reviewCount}) • </span>
                <span className='gray'>{props.item.location}</span>
            </div>

            <p className='title'>{props.item.title}</p>

            <p className='price'><strong>From ${props.item.price}</strong> / person</p>
            
        </div>

    )
}