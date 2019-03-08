import * as types from './types';

const initState = {
    loading: false,
    jobs: []
};

export default function jobReducer(state = initState, action) {
    switch (action.type) {
        case types.LOADING_JOBS:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_JOBS_SUCCESS:
            return {
                ...state,
                jobs: action.jobs,
                loading: false
            }

        default:
            return state;
    }
}