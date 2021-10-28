player_1_name=localStorage.getItem("player_1_name");
player_2_name=localStorage.getItem("player_2_name");
question_turn="player_1";
answer_turn="player_2";

player_1_score=0;
player_2_score=0;

document.getElementById("player_1_name").innerHTML=player_1_name+":";
document.getElementById("player_2_name").innerHTML=player_2_name+":";
document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;
document.getElementById("player_question").innerHTML= "Question Turn -"+player_1_name;
document.getElementById("player_answer").innerHTML= "Answer Turn -"+player_2_name;

function send(){
    Number1=document.getElementById("Number1").value;
    Number2=document.getElementById("Number2").value;
    actual_answer =parseInt(Number1) * parseInt(Number2);

    question_word ="<h4>"+Number1+"X"+Number2+"</h4>" ;
    input_box="<br> Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
}

function check(){
    get_answer=document.getElementById("input_check_box").value;
    if (get_answer==actual_answer) {
 
     if (answer_turn =="player_1") {
        player_1_score = player_1_score + 1 ;
        document.getElementById("player_1_score").innerHTML = player_1_score;
    }
    else{
     player_2_score = player_2_score + 1 ;
     document.getElementById("player_2_score").innerHTML = player_2_score;
    }
    }
    if (question_turn=="player_1") {
        question_turn="player_2";
        document.getElementById("player_question").innerHTML = "Question Turn -"+player_2;
    }
    else{
     question_turn="player_1";
     document.getElementById("player_question").innerHTML = "Question Turn -"+player_1;
    }
 
 if (answer_turn=="player_1") {
     answer_turn="player_2";
     document.getElementById("player_answer").innerHTML = "Answer Turn"+player_2;
 }
 else{
  answer_turn="player_1";
  document.getElementById("player_answer").innerHTML = "Answer Turn"+player_1;
 }
 document.getElementById("output").innerHTML = "";
 }
