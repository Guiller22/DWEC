function esFestivo(_fecha){
    var festivos = [
        new Date(2020,0,1),
        new Date(2020,0,6),
        new Date(2020,3,23),
        new Date(2020,4,1),
        new Date(2020,4,13),
        new Date(2020,6,25),
        new Date(2020,8,8),
        new Date(2020,9,12),
        new Date(2020,10,1),
        new Date(2020,11,6),
        new Date(2020,11,8),
        new Date(2020,11,25)
    ];

    var flag = false;

    for(i=0; i<festivos.length;i++){
        if(_fecha.getTime() == festivos[i].getTime())
        flag = true;
    }
    return flag;
}
var cantidad = [31,28,31,30,31,30,31,31,30,31,30,31];
var fecha = new Date();

    
