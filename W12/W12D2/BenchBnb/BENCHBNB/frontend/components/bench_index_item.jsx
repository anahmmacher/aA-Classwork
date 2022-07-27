import React from "react";

class BenchIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <li className="benchdex-item">
            <span>
                {this.props.bench.description}
            </span>
        </li>
    )}
}

export default BenchIndexItem;