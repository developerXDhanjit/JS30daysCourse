/* Understanding Promises */
// let a = 123
// console.log("Are you Okay Node");

/* let promise1 = new Promise((resolve, reject) => {
    if (a == 123) {
        setTimeout(() => {
            resolve(console.log("A is 123"))
        }, 1000)
    } else {
        reject(" A is not right")
    }

}) */

/* let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject( new Error("Whoops !!! some error occured"))
    }, 1000)
})
 */



/* 2. Chaining Promises  */

/* function fetchData(message = "Error", delay = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay)
    })
}

fetchData("Fetching Data......", 2000)
    .then(()=> fetchData("Fetching user details ..." , 1000))
    .then(()=> fetchData("Fetching Likes count " , 2000))
    .then(()=> fetchData("Getting User Comments " , 300))
    .then(()=> fetchData("Fething followers count" , 1000))
    .then(()=>  console.log("All data fetched successfully"))
    .catch((error)=> console.log("Error :" , error)) */

/* 3. Async / Await  */

const sayMyName = (userName) => {
    return new Promise((res, rej) => {
        if (userName == "Dhanjit Nath") {
            setTimeout(() => {
                res(`${userName} You are the admin `);
            }, 1000)
        } else {
            rej(new Error("Whoops"))
        }

    })
}

/* async function getdata() {
    let name1 = await sayMyName("Dhanjit Nath ")
    console.log(name1);
    let name2 = await sayMyName("Vaibhav")
    console.log(name2);
} */

/* async function getData() {
    try {
        let name1 = await sayMyName("Dhanjit ?")
        console.log(name1);
    } catch (error) {
        console.log(error);
    }
} */
// getData()

/* 4. Fetching Data from Public Api */

let url = "https://api.freeapi.app/api/v1/public/randomusers/user/random"

/* function fetchUrl(url){
    fetch(url)
    .then((response)=> response.json())
    .then((data)=> data.data.name)
    .then((value)=> {
     console.log(value);
    } )
} */

// fetchUrl(url)

/* async function fetchUrl(url) {
    try {
        let request = await fetch(url)
        let json = await request.json()
        console.log(json.data.name);

    } catch (error) {
        throw new Error("Whoops :" , error )
    }
} */

// fetchUrl(url)

/* 5. Concurrent Promises  */

// using Promise.all for waiting multiple promises to be resolved and then actually loging them again 

/* Promise.all([
    new Promise(resolve => setTimeout(()=> console.log(1),1000)),
    new Promise(resolve => setTimeout(()=> console.log(2),2000)),
    new Promise(resolve => setTimeout(()=> console.log(3),3000)),
]) */


Promise.race([
    new Promise(resolve => setTimeout(()=> console.log(1),1000)),
    new Promise(resolve => setTimeout(()=> console.log(2),2000)),
    new Promise(resolve => setTimeout(()=> console.log(3),3000))
])
