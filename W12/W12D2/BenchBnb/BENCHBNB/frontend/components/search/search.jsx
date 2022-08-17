import React from "react";

import FilterForm from "./filter_form";
import BenchIndex from "./bench_index";
import BenchMap from "../bench_map/bench_map";

const Search = (props) => (
    <div className="user-pane">
        <div className="left-half">
            <h5>Click Map to Add Bench</h5>
            <BenchMap benches={props.benches}
                    updateFilter={props.updateFilter}
                    singleBench={false} />
        </div>
        
        <div className="right-half">
        <FilterForm minSeating={props.minSeating}
                    maxSeating={props.maxSeating}
                    updateFilter={props.updateFilter}
        />
        <BenchIndex benches={props.benches}
        />
        </div>
    </div>
);

export default Search;