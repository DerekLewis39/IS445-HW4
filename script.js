
//BEGIN XMLHttpRequest METHOD WITH CALLBACK SEGMENT
const xhr = new XMLHttpRequest();//define XMLHttpRequest

xhr.open('get','https://jsonplaceholder.typicode.com/users', true);// 'what to do with file' , 'url(source)' , true = async false = sync

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) { //if request successful
        const targetData = JSON.parse(xhr.responseText); //turn url content from string to array
        console.log(targetData);
        var emailList = []
        for (var i = 0 in targetData) { //loop through url content
            emailList.push(targetData[i].email); //add each email property to list
            emailList=emailList.sort(); //sort list
            console.log(emailList);
        }
        for (var i = 0 in emailList) { //loop through email list
            document.getElementById('emails').innerHTML += emailList[i] + ' </br> ' ; //write each emailList element to HTML, along with line break.
        }
    }
}
xhr.send(); //send request
//END XMLHttpRequest SEGMENT

fetch('https://jsonplaceholder.typicode.com/users') //fetch content from url
    .then(function(response){ //promise containing response from fetch
        return response.json(); //returns json file from url
    }).then(function(response){ //promise regarding json file
        const JSONstring = JSON.stringify(response); //convert json file to string
        const dataList = JSON.parse(JSONstring);//convert json string to array
        let usernameList=[];
        for (var i = 0 in dataList){ //for loop to add each username property to list
            usernameList.push(dataList[i].username);
            usernameList = usernameList.sort(function(a,b){ //sort usernameList by length
                return a.length - b.length; //sorting criteria ==> sort by length
            });
            console.log(usernameList);
        }
        for (var i = 0 in usernameList){ //loop through usernameList
            document.getElementById('usernames').innerHTML += usernameList[i] + ' </br> '; //write each usernameList element to HTML, along with line break.
        }
    });