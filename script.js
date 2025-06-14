function highlight() {
    //Write your code here
    
const boldwords=document.querySelectorAll("strong")
boldwords.forEach((tag) => {
  tag.style.color = "green";
  tag.style.fontWeight = "bold";
});


}


function return_normal() {
    //Write your code here
 const boldwords=document.querySelectorAll("strong")
boldwords.forEach((tag) => {
  tag.style.color = "rgb(0, 0, 0)";
  tag.style.fontWeight = "bold";
});
    
}
