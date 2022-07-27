import { connect } from "react-redux";
import { fetchAllBenches } from "../actions/bench_actions";
import BenchIndex from "./bench_index.jsx";
import { asArray } from '../reducers/selectors'

const mapStateToProps = (state) => ({
    benches: asArray(state.entities)
}); 

const mapDispatchToProps = (dispatch) => ({
fetchAllBenches: () => dispatch(fetchAllBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);

