Call stack as a region in memory that runs in First in Last out mode

```
function subtract(num){
    return num-2
}


function calculate(){
let num=16;

return subtract(num)
}
```

In the above case calculate is added to the call stack then subtract function is add next,
so here first the subtract function is executed then one this is over it goes to the next function
