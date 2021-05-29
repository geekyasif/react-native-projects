const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://corona.lmao.ninja/v2/all', true);
xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function(){
    console.log(responseText)
}