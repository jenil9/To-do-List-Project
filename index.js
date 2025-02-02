let add_task_btn=document.querySelector("#add-task-btn");
dragged_element=null;
class task_box
{
  constructor(task_name,priority)
  {
    this.task_name=task_name;
    this.priority=priority;
  }
   makediv()
  {
    let div=document.createElement('div');
    div.setAttribute("draggable","true");
    div.innerHTML=`<b>${this.task_name}</b> <i class="fa-solid fa-circle-check"></i> <i class="fa-solid fa-trash"></i>`;
    div.classList.add("task-box");
    // div.querySelectorAll(i).style("align-self:end;");
    if(this.priority==="high")
    {
      let main_high_body=document.querySelector(".main-high-body");
      main_high_body.prepend(div);
    }
    else if(this.priority==="low")
    {
        let main_high_body=document.querySelector(".main-low-body");
        main_high_body.prepend(div);
    }
    else 
    {
     let main_high_body=document.querySelector(".main-medium-body");
       main_high_body.prepend(div);
    }
    let btn=div.querySelectorAll("i");
    btn[0].addEventListener("click",()=>{
       let div=btn[0].parentElement;
      //  btn[0].classList.remove("fa-hourglass");
      //  btn[0].classList.add("");
       btn[0].style.color = "#409179";
       let parent=div.parentElement;
       parent.removeChild(div);
       parent.appendChild(div);
    });

    btn[1].addEventListener("click",()=>{
      let div=btn[1].parentElement;
       let main_body=div.parentElement;
       main_body.removeChild(div);
      //  delete(div);
    });
    div.addEventListener("dragstart", (event) => {
      // Store the draggable element's ID in dataTransfer
      dragged_element=div;
  });
  }
   
};



add_task_btn.addEventListener("click",()=>{
   
   let task_name=document.querySelector("#task").value;
   let priority=document.querySelector('#priority').value;
   // console.log(`${task_name} and ${task_type}`);
   if(task_name)
   {
   let obj=new task_box(task_name,priority);
   obj.makediv();
   }  
   
});
document.querySelector(".main-high-body").addEventListener("dragover", (event) => {
  event.preventDefault(); // Allow drop
});
document.querySelector(".main-medium-body").addEventListener("dragover", (event) => {
  event.preventDefault(); // Allow drop
});
document.querySelector(".main-low-body").addEventListener("dragover", (event) => {
  event.preventDefault(); // Allow drop
});
document.querySelector(".main-high-body").addEventListener("drop", (event) => {
  event.preventDefault();
  // Retrieve the ID of the dragged element
  // Append the dragged node to the dropzone
  document.querySelector(".main-high-body").prepend(dragged_element);
  dragged_element=null;
});
document.querySelector(".main-low-body").addEventListener("drop", (event) => {
  event.preventDefault();
  // Retrieve the ID of the dragged element
  
  // Append the dragged node to the dropzone
  document.querySelector(".main-low-body").prepend(dragged_element);
  dragged_element=null;
});
document.querySelector(".main-medium-body").addEventListener("drop", (event) => {
  event.preventDefault();
  // Retrieve the ID of the dragged element
  
  // Append the dragged node to the dropzone
  document.querySelector(".main-medium-body").prepend(dragged_element);
  dragged_element=null;
});