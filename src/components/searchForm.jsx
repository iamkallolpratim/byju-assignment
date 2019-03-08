import React , {Component} from 'react';

export default class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            experience : 'all',
            location : ''
        }
    }

    handleOnChange = (event , type) => {
        this.setState({
            [type] : event.target.value
        });
    }

    search = () => {
        this.props.search(this.state.location , this.state.experience)
    }


    render(){
        return(
            <React.Fragment>
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label>Select Experience Level : </label>
                                <select onChange={event => this.handleOnChange(event , 'experience')} className="form-control">
                                    <option value="all">All</option>
                                    <option value="Fresher">Fresher</option>
                                    <option value="experienced">Experienced</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="form-group">
                                <label>Location :</label>
                                <input type="text" className="form-control" placeholder="ssearch places amomng delhi , tumkur , mumbai and Bengaluru/Bangalore only" onChange={event => this.handleOnChange(event , 'location')}/>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <button className="btn btn-success" type="button" style={{marginTop:'30px'}} onClick={this.search}>
                                SEARCH
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}