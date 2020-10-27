
//function displayResults(responseJson) {
    //console.log(responseJson);

    //let result =
//}

//function formatQueryParam(param) {
    //const queryItems = Object.keys(param)
    //    .map(key => `${key}=${param[key]}`)
    //return queryItems;
//}


function getRepos(query) {
    const searchURL = `https://api.github.com/users/DuanLeeWatkins/repos`
    //const params = {
        //q: "DuanLeeWatkins"
    //};

    //const queryString = formatQueryParam(param)
    //const url = searchURL + queryString + "/repos";

    //console.log(url);

    fetch(searchURL)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
                
        })
        .then(responseJson => console.log(responseJson))
        .catch(error => {
            alert(error.message)
        });
    console.log(responseJson)
}


function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const searchUser = $('#user-handle').val();
        getRepos(searchUser);
        
    });
}

$(watchForm);