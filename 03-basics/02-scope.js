//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);.log(c);


function one(){
    const username = "Jahanzaib"

    function Two(){
        const website = "Youtube"
        console.log(username)
    }
    console.log(website);
    Two()
    
}

// one()
if (true) {
    const username = "Jahanzaib"
    if (username === "Jahanzaib") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }