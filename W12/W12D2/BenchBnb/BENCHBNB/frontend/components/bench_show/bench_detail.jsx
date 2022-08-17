import React from "react";

import ReviewListItemContainer from './review_list_item_container';


const reviewList = (reviews) => (
    reviews.map(review => (
        <ReviewListItemContainer
            review={review}
            key={review.id}
        />
    ))
);

const BenchDetail = ({bench, reviews}) => {
    return (
        <>
        <ul className="bench-list">
            < img className="index-image" src={bench.picture_url}/>
            <li>Rating: { bench.average_rating || 'no reviews yet'} </li>
            <li>Description: {bench.description}</li>
            <li>Seats: {bench.seating}</li>
            <li>Latitude: <span id="lat">{bench.lat}</span></li>
            <li>Longitude: <span id="lng">{bench.lng}</span></li>
        </ul>
        <br/>
        <div className="reviews">
            <h3>Reviews</h3>
            {reviewList(reviews)}
        </div>
        </>
    );
};


export default BenchDetail;