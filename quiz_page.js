player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + ": ";
document.getElementById("player2_name").innerHTML = player_2_name + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question turn: " + player_1_name;
document.getElementById("answer_turn").innerHTML = "Answer turn: " + player_2_name;

function send(){
    number1=document.getElementById("number-1").value;
    number2=document.getElementById("number-2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    questioned_number = "<h4 class='text-left'>Q. " + number1 +" X "+ number2 + "</h4>";
    answer_input = "<br>Answer : <input type='number'>";
    check_button = "<br> <br> <button class='btn btn-danger' onclick='check()'>Check</button>";
    column = questioned_number + answer_input + check_button;
    document.getElementById("number-1").value = "";
    document.getElementById("number-2").value = "";
    document.getElementById("output").innerHTML = column;
}