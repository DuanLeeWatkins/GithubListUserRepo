// - [ ] Build a basic HTML page w/ a form containing:
//   - [x] A title for the whole page (<h1> element)
//   - [x] A form containing:
//     - [x] A text field to enter a GitHub username
//     - [x] A Submit button
//   - [x] A "region" where repositories should be rendered
// - [ ] Whenever the form is submitted:
//   - [ ] Fetch a user's repositories
//   - [ ] Renders them into the repositories region as a list
//         of titles wrapped into anchors (hyperlinks)




//fetch('asdfasdf')
    //.then(response => response.json())
    //.then(repos => renderRepos(repos))

//const renderRepos = (repos) => {
    //let html = '';

    //for (...) {
        // append each repo to html
    //}

    //return html;
//}



function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const searchUser = $('#')
    })
}