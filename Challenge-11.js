function listproperties(obj){
    var result =[];
    for ( var prop in obj)
    if (obj.hasOwnProperty(prop)){
        result.push(obj[prop]);
        
    }
    return result.join(",");
}

var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
console.log(listproperties(student));