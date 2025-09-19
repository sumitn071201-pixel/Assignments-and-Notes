// creating and inserting elements to it
let a=["HTML", "CSS","JS"];
//add element to the end of array
a.push("Node.js");
console.log("after pushing 1 element to at the end: ",a);
a.unshift("Web Dev");
console.log("After inserting one element to the first: ",a);
//adding element
a.push("sumit","suyog")
console.log("After pushing 2 more elements coz y not bruh: ",a)
//removing and returning the last element
let lst=a.pop();
console.log("After removing last element: ",a);
//removing and returning the first element
let fst=a.shift();
console.log("After removing first element: ",a);
//removing 2 elements from index 1 and 2
a.splice(0,0);
console.log("after removing from index 1 and 2",a);
//using for loop to iterate
for (let i=0; i<(a.length)-2;i++){
    console.log(a[i])
}

//converting the array to string
console.log(a.toString());
