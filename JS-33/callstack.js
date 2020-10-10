function three(){
  console.log('I love js');
}

function two(){
  three();  
}

function one(){
  two();
}

function zero(){
  one();
  throw Error("omg");
}

zero();