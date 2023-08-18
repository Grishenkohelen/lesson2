let x = prompt("enter value");

if (x == "" || x=='' || x==0 || x==false || x==-0 || x==null || x==NaN || x==undefined){
    x = "default";
}

alert(x);
console.log(x);