function fibonacci(n){
      if (n>2){
      return fibonacci(n-1) + fibonacci(n-2);
    }else if(n==2){
      return n;
    }
}

const cantidad=20;
var secuencia = Array(cantidad);
secuencia.fill(0);

for (i=0;i<cantidad;i++){
  console.log(i)
  secuencia[i] =fibonacci(i);
}
 console.log(fibonacci(8));
