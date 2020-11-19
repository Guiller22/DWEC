var cantidad = 10;
var i =0;
function uuidv4() {
    return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}


do{
    uuidv4();
    console.log(uuidv4());
    i++
}while(i<cantidad);