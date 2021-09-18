var x = 1  ;
var Text = "X";
var b1 = document.getElementById('11');
var b2 = document.getElementById('12');
var b3 = document.getElementById('13');
var b4 = document.getElementById('21');
var b5 = document.getElementById('22');
var b6 = document.getElementById('23');
var b7 = document.getElementById('31');
var b8 = document.getElementById('32');
var b9 = document.getElementById('33');
document.addEventListener('DOMContentLoaded', function (){
   
    document.querySelectorAll('button').forEach(function (button){
        button.onclick =function (){
             b1 = document.getElementById('11');
             b2 = document.getElementById('12');
             b3 = document.getElementById('13');
             b4 = document.getElementById('21');
             b5 = document.getElementById('22');
             b6 = document.getElementById('23');
             b7 = document.getElementById('31');
             b8 = document.getElementById('32');
             b9 = document.getElementById('33');
            b = button.id;
            if(x== 0){
                Text = "O";
                x = 1;
            }else{
                Text = "X";
                x = 0;
            }
            document.getElementById(b).innerHTML = Text;
            document.getElementById(b).disabled = true;
            if(b1.innerHTML == b2.innerHTML && b2.innerHTML == b3.innerHTML){
                alert("Winner is " + b1.innerHTML);
            }else if(b4.innerHTML == b5.innerHTML && b5.innerHTML == b6.innerHTML){
                alert("Winner is " + b4.innerHTML);
            }else if(b7.innerHTML == b8.innerHTML && b8.innerHTML == b9.innerHTML){
                alert("Winner is " + b7.innerHTML);
            }else if(b1.innerHTML == b4.innerHTML && b4.innerHTML == b7.innerHTML){
                alert("Winner is " + b1.innerHTML);
            }else if(b2.innerHTML == b5.innerHTML && b5.innerHTML == b8.innerHTML){
                alert("Winner is " + b2.innerHTML);
            }else if(b3.innerHTML == b6.innerHTML && b6.innerHTML == b9.innerHTML){
                alert("Winner is " + b3.innerHTML);
            }else if(b1.innerHTML == b5.innerHTML && b5.innerHTML == b9.innerHTML){
                alert("Winner is " + b1.innerHTML);
            }else if(b7.innerHTML == b5.innerHTML && b5.innerHTML == b3.innerHTML){
                alert("Winner is " + b3.innerHTML);
            }

        }
    })
});


document.addEventListener('DOMContentLoaded', function (){
    document.querySelectorAll('.button').forEach(function (button){
        button.onclick = function (){
            var bu = document.q
            document.getElementById('input')
        }
    })
})