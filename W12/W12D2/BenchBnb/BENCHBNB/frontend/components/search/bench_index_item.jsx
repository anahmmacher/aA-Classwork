import React from "react";
import { withRouter } from 'react-router-dom';

import BenchShowContainer from '../bench_show/bench_show_container';

class BenchIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const benchId = this.props.bench.id;
        this.props.history.push(`/benches/${benchId}`);
    }

    render(){
        const { average_rating, description, seating, picture_url } = this.props.bench;
        return(
            <div className="index-item" onClick={this.handleClick}>
                <div className="i-item-info">
                <span className="i-item-category">Description:</span>
                <span className="i-item-copy"> {description}</span>
                <br/>
                <span className="i-item-category">Seating:</span>
                <span className="i-item-copy"> {seating}</span>
                <br/>
                <span className="i-item-category">Rating:</span>
                <span className="i-item-copy"> {average_rating || 'No reviews yet'}</span>
                </div>
                <img src={picture_url}/>
            </div>
    );
}
}

export default withRouter(BenchIndexItem);