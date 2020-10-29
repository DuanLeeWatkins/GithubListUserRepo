function displayResults(responseJson) {

    console.log(responseJson);

    $('#results-list').empty();

    for (let i = 0; i < responseJson.length; i++) {
        $('#results-list').append(`<li><h3>${responseJson[i].name}</h3>
        <a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a>
        </li>`)
    }

    $('#results').removeClass('hidden');
};     





function getRepos(userHandle) {
    const searchURL = `https://api.github.com/users/${userHandle}/repos`
    

    fetch(searchURL)
        .then(response => {
            if (response.ok) return response.json()
            return response.json().then((e) => Promise.reject(e))
        })
        .then(responseJson => displayResults(responseJson))
        .catch(error => {
            console.error(error)

            alert(error.message)
        });
}


function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let input = $('#user-handle').val();
        $('#user-handle').val('');
        getRepos(input);
        
    });
}

$(watchForm);