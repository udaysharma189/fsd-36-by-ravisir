const fs=require("fs"); // import the file
// create a blank file
fs.writeFile("student.txt" ,"Hello This is a student file",(error)=>{
if(error){
    console.log(error);

}
else{
    console.log("File is Successfully Created");
}
});