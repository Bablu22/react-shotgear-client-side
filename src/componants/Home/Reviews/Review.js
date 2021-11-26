import React from 'react';

const Review = ({ review }) => {
    const { name, title, description } = review
    return (
        <div class="">
            <div class="card-body">
                <p class="card-text text-muted py-4 fs-6">{description}</p>
                <h5 class="card-title d-inline-block">{name}</h5><br />
                <span class="card-title text-body">{title}</span>
            </div>
        </div>
    );
};

export default Review;