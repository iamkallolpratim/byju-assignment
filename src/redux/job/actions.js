import * as types from './types';
import jobApi from '../../api/job';

function loadingJobs() {
    return {
      type: types.LOADING_JOBS
    }
  }
  
  function loadJobsSuccess(jobs) {
    return {
      type: types.LOAD_JOBS_SUCCESS,
      jobs
    };
  }


  export function loadJobs() {
    return function(dispatch) {
      dispatch(loadingJobs());
  
      return jobApi.getAllJobs().then(jobs => {
        dispatch(loadJobsSuccess(jobs));
        return jobs;
      });
    };
  }
  
