let counter = 0;
function newItem(){

  //javascript
  //1. Adding a new item to the list of items: 
    let li = $("<li></li>");
    let inputValue = $("input").val();
    li.append(inputValue);
    
    if(inputValue === '' && counter === 0) {
      alert("Please write something!");
      counter++;
    }
    else if(inputValue === '' && counter === 1) {
      alert("I would really appreciate it if you would fill in the input box!!");
      counter++;
    }
    else if(inputValue === '' && counter === 2) {
      alert("Put something in the box... please!");
      counter++;
    }
    else if(inputValue === '' && counter === 3) {
      alert("Now you're just pissing me off");
      counter++;
    }
    else if(inputValue === '' && counter === 4) {
      alert("No inputs for you!!!");
      $(".container").addClass("no-inputs-for-you")
    }
    else {
      let list = $("#list");
      list.append(li);
      $("input").val('');
      counter = 0;
    }
  
   //2. Crossing out an item from the list of items:
     function crossOut() {
       li.toggleClass("strike");
     }
  
     li.on("dblclick",crossOut);
  
   //3(i). Adding the delete button "X": 
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append("X");
     li.append(crossOutButton);
  
     crossOutButton.on("click", deleteListItem);
   //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
     function deleteListItem(){
       li.remove();
     }
   // 4. Reordering the items: 
     $('#list').sortable();
  
  }
  