function sum(x, y){
    try {
        if (typeof(x) !== "number" || typeof(y) !== "number") {
            console.log();
            throw new Error("One of the arguments is not a valid number.")
        }

        return x + y;
        }
        
        catch (error) {
        console.log(error);
    }
}
console.log(sum(3,9))

var user = {username: "sam", password: "123abc"};
function login(username, password){
    try {
        if (username !== "sam" || password !== "123abc") {
        console.log();
        throw new Error("Username or Password Incorrect")}

        else {console.log("Login Successful")}
        }
        
        catch (error) {
            console.log(error)
        }
    }
login("sam", "dog")
