let suchData;

fetch('./muchJson.json')
    .then(response  => response.json())
    .then(data => suchData = data);


document.querySelector(number).innerHTML = 'abi sende lol'