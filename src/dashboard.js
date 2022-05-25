var data =  JSON.parse(localStorage.getItem("s-data")) || [];
console.log(data);


var length = data.length;

 
  document.querySelector("#length").innerText = ` [Batch-web-17] :- ${length} `;

  

data.map(function (elem,index) {
    var tr = document.createElement("tr");
  
    var name = document.createElement("td");
    name.innerText = elem.name; 
    var course = document.createElement("td");
    course.innerText = elem.course;
  
    var unit = document.createElement("td");
    unit.innerText = elem.unit;

    var batch =document.createElement("td");
    batch.innerText= elem.batch

    var image =document.createElement("img");
    image.src = elem.image

    var btn=document.createElement("button");
    btn.setAttribute=("id" ,"addstud");
    btn.innerText="remove";
    btn.addEventListener("click",function (){
      removestudents(elem,index);
    });

    tr.append(image,name,course,unit,batch,btn);
    document.querySelector("#container").append(tr);
});


function removestudents(elem,index){
    console.log(elem,index);
    data.splice(index,1);
    console.log(data);
    localStorage.setItem("s-data",JSON.stringify(data));
    window.location.reload();
}