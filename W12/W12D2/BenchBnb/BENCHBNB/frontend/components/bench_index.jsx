import React from "react";
import BenchIndexItem from "./bench_index_item";


class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllBenches()
  }

  render() {
    <section className="benchdex">
        <ul>
            {this.props.benches.map((bench) => (
                <BenchIndexItem key={bench.id} bench={bench}/>))
            }
        </ul>
    </section>
  }
}

export default BenchIndex