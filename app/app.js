function talk(){
    var know = {
    "who are you" : "Hello, Sardar Uzair here ",
    "How are you" : "Good :)",
    "what can i do for you" : "Please Give us A Follow & Like.@sardar uzair tech",
    "full form of nadra" : "National Database and Registration Authority (NADRA)",
    "full form of wapda" : "The Pakistan water and Power Development Authority (wAPDA) ",
    "full form of it" : "Information technology",
    "full form of MERN" : "MERN stands for MongoDB, Express, React, Node,",
    "full form of MEAN" : "MEAN is an acronym for MongoDB, ExpressJS, AngularJS and Node. js.",
    "father of computer" : "inventor Charles Babbage",
    "nice to meet you" : "nice to meet you also",
    "ok" : "Thank You So Much ",
    "bye" : "Okay! will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    
    }