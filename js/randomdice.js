let dice = document.getElementsByClassName("dice");
let res = [];
for (let i = 0; i < dice.length; i++) {
  let random = Math.floor(Math.random() * 6) + 1;
  res.push(random);
  let path = "../images/dice" + random + ".png";
  dice[i].setAttribute("src", path);
}
//winner Logic
if (res[0] > res[1]) {
  //player 1 wins
  document.getElementById("result").innerHTML = "Player A Wins";
} else if(res[0]<res[1]){
  //player 2 wins
  document.getElementById("result").innerHTML = "Player B wins";
}
else{
    document.getElementById("result").innerHTML = "It's Draw";
}
