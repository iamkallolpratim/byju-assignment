import React , {Component} from 'react';

export default class Searchresult extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
              {
                this.props.jobs.map((job , index) => 
                  <div className="col-sm-12" style={{marginTop:'15px'}} key={index}>
                      
                      <div className="card">
                        <div className="card-body"> 
                        <div className="media">
                        <div className="media-body">
                          <h6 className="mt-0">{job.title}</h6>
                          <p className="small"><b>Company</b> : {job.companyname!=='' ? job.companyname : <span className="text-danger">N/A</span>}</p>
                          <p className="small"><b>Location</b> : {job.location ?job.location : <span className="text-danger">N/A</span> }</p>
                          <p className="small"><b>Experience</b>: {job.experience!=='' ? job.experience : <span className="text-danger">not mentioned</span>}</p>
                          <p className="small"><b>Salary</b>: {job.salary!=='' ? job.salary : <span className="text-danger">not mentioned</span>}</p>
                          <p className="small">Skills Required : {job.skills!=='' ? job.skills : <span className="text-danger">not mentioned</span>}</p>
                          <p className="small">
                              <b>Description</b> : {job.jd!=='' ? job.jd : <span className="text-danger">not mentioned</span>}
                          </p>
                          <a href={job.applylink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Apply</a>

                        </div>
                      </div>
                      </div>
                        </div>
                      </div>
                  
                )
              }
          </div>
            </React.Fragment>
        );
    }
}