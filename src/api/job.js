export default class caseApi {
    
    
    static getAllJobs() {

        let url = 'https://api.myjson.com/bins/kez8a';

        return fetch(url).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}