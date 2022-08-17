import React from "react";
import BenchIndexItem from "./bench_index_item";

  const BenchIndex = ({ benches }) => (
           <div className="benchdex">
       <h1>Benches: </h1>
          {benches.map((bench) => ( 
            <BenchIndexItem
              key={bench.id}
              bench={bench}
            />
          ))}
       </div>
    );


export default BenchIndex