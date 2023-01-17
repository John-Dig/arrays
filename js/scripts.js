window.addEventListener("load", function(){
  document.querySelector("#button1").addEventListener("click", function(e){
    
    let array1 = [document.getElementById("f1").value, document.getElementById("f2").value, document.getElementById("f3").value];
    const first = array1[0];
    const second = array1[1];
    const third = array1[2];
  
    let array2 = [];
    array2.push(second, first, third);
    console.log(array2);

    const ulElement = document.createElement('ul');
    const bodyEl = document.querySelector('body');
    bodyEl.append(ulElement);
    const liElement1 = document.createElement('li'); 
    liElement1.append(array2[0]);
    const liElement2 = document.createElement('li')
    liElement2.append(array2[1]);
    const liElement3 = document.createElement('li')
    liElement3.append(array2[2]);
    
    
    ulElement.append(liElement1, liElement2, liElement3);


    e.preventDefault;
  })

  



})