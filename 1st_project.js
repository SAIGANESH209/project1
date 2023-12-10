let initial_value = document.getElementById("num_value");
let updated_value =0
let next_value=0;
let super_value;





function reset(){
    updated_value=0
    super_value=document.getElementById("num_value").style.color="black";
    super_value=initial_value.textContent=updated_value
    console.log(super_value);

}


function increment(){
    next_value=parseInt(updated_value)+1
    if (updated_value===0){
        updated_value=next_value
        super_value=document.getElementById("num_value").style.color="black";
        super_value=initial_value.textContent=updated_value
        console.log(super_value);
    }
    else if (updated_value>0){
        updated_value=next_value
        super_value=document.getElementById("num_value").style.color="green";
        super_value=initial_value.textContent=updated_value
        console.log(super_value);

    }
    else if (updated_value<0){
        updated_value=next_value
        super_value=document.getElementById("num_value").style.color="red";
        super_value=initial_value.textContent=updated_value
        console.log(super_value);
    }
    
}


function decrement(){
    next_value=parseInt(updated_value)-1
    if (updated_value===0){
        updated_value=next_value
        super_value=document.getElementById("num_value").style.color="black";
        super_value=initial_value.textContent=updated_value
        console.log(super_value);
    }
    else if (updated_value>0){
        updated_value=next_value
        super_value=document.getElementById("num_value").style.color="green";
        super_value=initial_value.textContent=updated_value
        console.log(super_value);

    }
    else if (updated_value<0){
        updated_value=next_value
        super_value=document.getElementById("num_value").style.color="red";
        super_value=initial_value.textContent=updated_value
        console.log(super_value);
    }
    
    
}