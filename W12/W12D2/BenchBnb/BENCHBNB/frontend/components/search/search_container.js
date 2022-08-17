import { connect } from "react-redux";
import { fetchAllBenches } from "../../actions/bench_actions";
import Search from "./search"
import { asArray } from '../../reducers/selectors'
import { updateFilter } from "../../actions/filter_actions";

const mapStateToProps = (state) => ({
    benches: Object.values(state.entities.benches),
    minSeating: state.ui.filters.minSeating,
    maxSeating: state.ui.filters.maxSeating
}); 

const mapDispatchToProps = (dispatch) => ({
fetchAllBenches: (filters) => dispatch(fetchAllBenches(filters)),
updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

