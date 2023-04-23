var number=19;
var index =0;
var array =[3,5,79,45,0,-67,23,77,19,78,12];
var flag = false;
for(var i = 0; i<array.length; i++){
    if(array[i]==number){
        index++;
        flag = true;
    }
    
}
if(flag == true){
    console.log(index);
}else{
    console.log("not found");
}