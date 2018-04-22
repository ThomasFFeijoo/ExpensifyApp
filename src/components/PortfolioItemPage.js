import React from 'react';

const PortfolioItemPage = (props) => {
    return (
        <div>
            <h1>A Thing done</h1>
            <p>Item with id of {props.match.params.id}</p>
        </div>
    );
};

export default PortfolioItemPage;