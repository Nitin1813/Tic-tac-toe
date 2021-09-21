function reset(){
    // var button = document.getElementsByTagName('button');
    // document.addEventListener('onclick', function(){
        document.querySelectorAll('button').forEach(function (button){
            b1 = document.getElementById('11').innerHTML = 1;
            b2 = document.getElementById('12').innerHTML = 2;
            b3 = document.getElementById('13').innerHTML = 3;
            b4 = document.getElementById('21').innerHTML = 4;
            b5 = document.getElementById('22').innerHTML = 5;
            b6 = document.getElementById('23').innerHTML = 6;
            b7 = document.getElementById('31').innerHTML = 7;
            b8 = document.getElementById('32').innerHTML = 8;
            b9 = document.getElementById('33').innerHTML = 9;
        button.disabled = false;
        })
    // })
}
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
    var num1 = 0;
    var bu = 0;
    var symbol = 0;
    document.querySelectorAll('.button').forEach(function (button){
        button.onclick = function (){
            
            bu = button.innerHTML;
            // console.log(bu);
            if(bu == '/' || bu == '*' || bu == '-' || bu == '+' || bu == '=' || bu == 'C'){
                if(bu == 'C'){
                    document.getElementById('input').value = '';
                    num1 = 0;
                }else if(bu == '+'){
                    if(num1 != 0){
                        let result = parseFloat(document.getElementById('input').value);
                        result += parseFloat(num1);
                        document.getElementById('input').value = '';
                        num1 = result;
                        // document.getElementById('input').value = '';
                    }else{
                    num1 = document.getElementById('input').value;
                    symbol = bu;
                    console.log(symbol)
                    // console.log(num1);
                    document.getElementById('input').value = '';
                    }
                }else if(bu == '='){
                    // console.log(num1);
                    let num2 = document.getElementById('input').value;
                    console.log(num2);
                    console.log(num1)
                    console.log(symbol)
                    // console.log(num1);
                    // console.log(num2);
                    if(symbol == '+'){
                    let result = parseFloat(num1) + parseFloat(num2);
                    document.getElementById('input').value = result;
                    symbol = 0;
                    num1 = 0;
                    }else if(symbol == '-'){
                        let result = parseFloat(num1) - parseFloat(num2);
                    document.getElementById('input').value = result;
                    symbol = 0;
                    num1 = 0;
                    }else if(symbol == '*'){
                        let result = parseFloat(num1) * parseFloat(num2);
                    document.getElementById('input').value = result;
                    symbol = 0;
                    num1 = 0;
                    }else if(symbol == '/'){
                        let result = parseFloat(num1) / parseFloat(num2);
                    document.getElementById('input').value = result;
                    symbol = 0;
                    num1 = 0;
                    }
                }else if(bu == '-'){
                    if(num1 != 0){
                    let result = parseFloat(document.getElementById('input').value);
                    result -= parseFloat(num1);
                    document.getElementById('input').value = '';
                        num1 = result;
                    }else{
                        num1 = document.getElementById('input').value;
                        document.getElementById('input').value = '';
                        symbol = '-';
                    }

                }else if(bu == '*'){
                    if(num1 != 0){
                        let result = parseFloat(document.getElementById('input').value);
                        result = result * parseFloat(num1);
                        document.getElementById('input').value = '';
                        num1 = result;
                        }else{
                            num1 = document.getElementById('input').value;
                            document.getElementById('input').value = '';
                            symbol = '*';
                        }
                }else if(bu == '/'){
                    if(num1 != 0){
                        let result = parseFloat(document.getElementById('input').value);
                        result = result / parseFloat(num1);
                        document.getElementById('input').value = '';
                        num1 = result;
                        }else{
                            num1 = document.getElementById('input').value;
                            document.getElementById('input').value = '';
                            symbol = '/';
                        }
                }
                // num1 = document.getElementById('input').value;
                // document.getElementById('result').value = num1; 
            }else{
                var m =document.getElementById('input').value;
                m += bu;
            document.getElementById('input').value = m;

            }
        }
    })
})




// flex-flow: column-reverse wrap;
// justify-content:center;
// align-self:end

// align-items:end;
// flex-flow: column-reverse wrap;
// justify-content:center;
// align-content:space-between;

// flex-direction:row-reverse;
// flex-wrap:wrap;
// align-content:space-between;
