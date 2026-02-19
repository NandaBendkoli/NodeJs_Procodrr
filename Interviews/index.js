// clouser
function outer(b) {
  function inner() {
    console.log(a,b);
  }
  let a = 10;
  inner();
}
outer("Hello");

//
