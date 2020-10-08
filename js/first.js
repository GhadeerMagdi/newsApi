
let myData;
getData('general');

function getData(category)
{
    myData = [];
    let http = new XMLHttpRequest();
    //http.open("GET" , "https://jsonplaceholder.typicode.com/comments");
    http.open("GET" , "http://newsapi.org/v2/top-headlines?country=eg&category="+category+"&apiKey=e6d2e0b91eb54a06aabff97432045554");
    http.send();
    http.addEventListener("readystatechange", function()
    {
        if(http.readyState == 4 && http.status == 200)
        {
            myData = JSON.parse(http.response).articles;
            console.log(myData);
            displayData();
            
        }
    })
}
function displayData()
{
    var cartoona = ``;
    for(i=0; i<myData.length; i++)
    {
        cartoona += `<div class='col-md-3'>
        <div>
            <img class='w-100' src=`+myData[i].urlToImage+`>
            <h5>`+myData[i].title+`</h5>
            <p>`+myData[i].description+`</p>
        </div>
        </div>`
    }
    document.getElementById("rowResult").innerHTML = cartoona;
}

let links = document.getElementsByClassName("nav-link");

for(var i=0 ; i<links.length ; i++)
{
    links[i].addEventListener("click", function(eventInfo){

        getData(eventInfo.target.text);
    })
}