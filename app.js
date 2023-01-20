const jokeEL = document.getElementById('joke');
const jokeBtn = document.getElementById('jokebtn');

jokeBtn.addEventListener("click", generateJoke)

generateJoke();


async function generateJoke() {

    const config = {
        headers: {
            "Accept": "application/json"
        }
    }

    const response = await fetch(`https://icanhazdadjoke.com/`, config);
    const data = await response.json();
    jokeEL.innerHTML = data.joke
}

// function generateJoke() {

// const config = {
//     headers: {
//         "Accept": "application/json"
//     }
//  }

//  fetch(`https://icanhazdadjoke.com/`, config ).then(res => res.json()).then(data => {
//     jokeEL.innerHTML = data.joke
//  })
// }


