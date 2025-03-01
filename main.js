function test() {
  var x;
  let x = 0;
  if (x) {
    return 1;
  } else if (x == 1) {
    return 2;
  } else {
    return 4;
  }
}
function getName() {
  console.log("what's your name?");
  let x = window.prompt("say your name");
  if (x.length === 0) {
    x = "John Doe";
  } else {
    x = x.trim();
  }
  return x;
}
function getAge() {
  let age = window.prompt("enter your age");
  ageNum = Number.parseInt(age);
  if (ageNum == 0) {
    console.log("is that right?");
  }
  return ageNum;
}
function test2() {
  let s = "";
  s = getName();
  a = getAge();
  let ageName = "";
}
test();
