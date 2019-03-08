import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as jobActions from '../redux/job/actions';
import Loading from '../components/common/loading';
import SearchForm from '../components/searchForm';
import SearchResult from '../components/searchResult';

class JobContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            loading: false,
            location:'',
            experience:''

        }
    }

    searchJobs = (location, experience) => {
        this.setState({ loading: true })
        this.props.jobActions.loadJobs().then(data => {
            this.manipulateData(data, location, experience)
            this.setState({
                location: location,
                experience:experience
            });
        })
    }

    manipulateData = (data, location, experience) => {
        if (data.jobsfeed) {
            let jobs = data.jobsfeed.filter(job => {
                if (experience === 'all') {
                    return job;
                }
                else if (experience === 'experienced') {
                    return job.experience !== 'Fresher' && job.experience !== '';
                }
                else {
                    return job.experience === 'Fresher'
                }
            });

            if (location !== '') {
                let newJobs = jobs.filter(job => {
                    return  job.location.toLowerCase().includes(location.toLowerCase());
                });
                this.setState({ jobs: newJobs, loading: false });
            }
            else {
                this.setState({ jobs: jobs, loading: false });
            }


        }
    }

    filterData = (event) => {
        let jobs = this.state.jobs;
        if(event.target.value !== ''){
            let filteredJobs = jobs.filter(job => {
                return  job.title.toLowerCase().includes(event.target.value.toLowerCase()) || job.skills.toLowerCase().includes(event.target.value.toLowerCase()) || job.companyname.toLowerCase().includes(event.target.value.toLowerCase());
            });
            console.log(filteredJobs)
            this.setState({ jobs: filteredJobs });
        }
        else{
            this.manipulateData(this.props.data.jobs, this.state.location, this.state.experience)
        }

    }

    render() {
        return (
            <React.Fragment>
                <SearchForm search={this.searchJobs} />
                {
                    this.state.loading ?
                        <Loading />
                        :

                        <div>
                            
                            {
                                this.props.data.jobs.jobsfeed&&this.props.data.jobs.jobsfeed.length>0 &&
                                <div>
                                    <div className="alert alert-primary" role="alert">
                                Number of Jobs Found : {this.state.jobs.length}
                                </div>
                                <input type="text" className="form-control" onChange={this.filterData} placeholder="filter jobs by skills , titles or company name "/>
                                </div>
                            }
                            <SearchResult jobs={this.state.jobs} />
                        </div>

                }
            </React.Fragment>

        )
    }

}
const mapStateToProps = (state) => ({
    data: state.jobReducer
});

const mapDispatchToProps = (dispatch) => ({
    jobActions: bindActionCreators(jobActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobContainer);
