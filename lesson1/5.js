let promises = [];

for(let i = 1 ; i <= 10; i++){
  let url = "https://jsonplaceholder.typicode.com/users/" + i;  
  promises[i] = httpGet(url);
};

Promise.all(promises).then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
});

function httpGet(url) {

  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {        
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

}

