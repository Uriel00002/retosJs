let size = 3;

const forms = [' ','/\\','\\/','_\\', '_/'];
let ar=[];
let x = 0;
let y=size;
for(let i = size; i >0; i--){
    x++;
    ar.push(forms[0].repeat(i-1) + forms[1].repeat(x) + forms[3].repeat(size));
}
for(let i = 0; i <=size-1; i++){
    y--;
    ar.push(forms[0].repeat(i) + forms[2].repeat(y+1) + forms[4].repeat(size));
}
console.log(ar);