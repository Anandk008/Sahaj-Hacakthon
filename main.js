const xhr = new XMLHttpRequest();

function fetch() {
    xhr.open('GET', data.json, true);

    xhr.onload= function() {
        if(this.status == 200)
            console.log(this.responseText);
    }
}