const score = 85;

// if(score>=80){
//     console.log('A+')
// }
// else if(score>=70){
//     console.log('A')
// }
// else if(score >=60){
//     console.log('A-')
// }
// else if(score >=50){
//     console.log('B')
// }
// else if (score >=40){
//     console.log('C')
// }
// else if (score >=33){
//     console.log('D')
// } else {
//     console.log('F')
// }

switch (true) {
  case score >= 80:
    console.log("A+");
  break;
  case score >= 70:
    console.log("A");
    break;
  case score >= 60:
    console.log("A-");
    break;
  case score >= 50:
    console.log("B");
    break;
  case score >= 40:
    console.log("C");
    break;
  case score >= 33:
    console.log("D");
    break;
  default:
    console.log("F");
}

const color = "green";

// color -> red -> danger
// color -> green-> safe
// color -> orange -> warning

switch (color) {
  case "red":
    console.log("Danger");
    break;
  case "green":
    console.log("safe");
    break;
  case "orange":
    console.log("Warning");
  default:
    console.log("Normal");
}
