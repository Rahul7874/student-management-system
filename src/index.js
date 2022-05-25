document.getElementById("data").addEventListener('submit' ,submitFunction);
var data =  JSON.parse(localStorage.getItem("s-data")) || [];


function studentData(n, c, u, b, i){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.batch=b;
    this.image=i;
}
var length = data.length;

 
document.querySelector("#length").innerText = ` [Batch-web-17] :- ${length} `;

function submitFunction(){
    event.preventDefault();
  
    var name =document.getElementById("name");
    var course =document.getElementById("course");
    var unit =document.getElementById("unit");
    var batch =document.getElementById("batch"); 
    var image =document.getElementById("image");
    let dataarry = new studentData(name.value, course.value, unit.value, batch.value, image.value);
    data.push(dataarry)
    localStorage.setItem("s-data", JSON.stringify(data))
    alert("Data added succesfully.....")
    name.value="";
    course.value="";
    unit.value="";
    batch.value="";
    image.value="";
    window.location.reload();


}


