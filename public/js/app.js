const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch( '/weather?cityName=' + location ).then( ( response ) => {
        response.json().then( ( data ) => {
            if (data.error) {
                messageOne.textContent = JSON.stringify( data.error ,null,4);
            } else {
                messageOne.textContent = JSON.stringify( data.weather,null,4 );
                messageTwo.textContent = JSON.stringify( data.wind,null,4);
            }
        })
    })
})