import React from "react";
import { withRouter } from 'react-router-dom'

class BenchForm extends React.Component {
    constructor(props) {
        super(props);
        this.coords = { lat: props.lat, lng: props.lng};
        this.state = {
            description: '',
            seating: 2,
            photoFile: null,
            photoUrl: null
            // lat: this.props.lat,
            // lng: this.props.lng
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToSearch = this.navigateToSearch.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    navigateToSearch() {
        this.props.history.push('/');
    }

    update(property) {
        return e => this.setState({
            [property]: e.target.value
        });
    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result})
        };
        if (file){
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('bench[description]', this.state.description);
        formData.append('bench[seating]', this.state.seating);

//         for (var pa of formData.entries()) {
//         console.log(`${pa[1]}`);
// }

        formData.append('bench[lat]', this.coords['lat']);
        formData.append('bench[lng]', this.coords['lng']);
        // const newState = {}
        // newState.append(this.state, this.coords)
        if(this.state.photoFile){
            formData.append('bench[photo]', this.state.photoFile);
        }


        this.props.createBench(formData);
        // for (var val of formData.values()) {
        // console.log(`${val[0]}, ${val[1]}, ${val[2]}`);}
        // const newBench = Object.assign({}, this.state);
        // this.props.createBench(newBench)
        this.navigateToSearch();
    }

    render() {
        const {description, seating } = this.state;
        const { lat, lng } = this.coords;
        const preview = this.state.photoUrl ? <img height="200px" width="200px" src={this.state.photoUrl} /> : null;

        return(
            <div className="new-bench-container">
                <div className="new-bench-form">
                    <h3 className="new-bench-title">Create A Bench!</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label className="bench-field">Description</label>
                        <input type="text"
                                value ={description}
                                onChange={this.update('description')}
                                className='bench-field'
                                />
                        <label className="bench-field">Number of Seats</label>
                        <input min="0"
                                type="number"
                                value={seating}
                                onChange={this.update('seating')}
                                className="bench-field"
                                />
                        <label className="bench-field">Latitude</label>
                        <input type="text"
                                disabled
                                value={lat}
                                className="bench-field"
                                />
                        <label className="bench-field">Longitude</label>
                        <input type="text"
                                disabled
                                value={lng}
                                className="bench-field"
                                />
                        <div className="button-holder">
                            <h3>Image Preview</h3>
                            {preview}
                            <h3 className="button-holder">Add a Picture!</h3>
                            <input type="file" className="new-bench-button"
                                onChange={this.handleFile.bind(this)}/>
                        </div>

                            <hr/>
                         <div className="button-holder">
                        <input
                            type="submit"
                            value="Create Bench"
                            className="new-bench-button"
                             />
                        </div>
                    </form>
                    <div className="button-holder">
                        <button
                            className="new-bench-button"
                            onClick={this.navigateToSearch}
                            >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(BenchForm);