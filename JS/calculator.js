function Calculate1(){
    var num1_1 = document.getElementById("num1.1").value;
    var num1_2 = document.getElementById("num1.2").value;
    var ans1   = parseFloat(num1_1) + parseFloat(num1_2);
    alert("计算结果为："+ans1);
}

function Calculate2(){
    var num2_1 = document.getElementById("num2.1").value;
    var num2_2 = document.getElementById("num2.2").value;
    var ans2   = parseFloat(num2_1) - parseFloat(num2_2);
    alert("计算结果为："+ans2);
}

function Calculate3(){
    var num3_1 = document.getElementById("num3.1").value;
    var num3_2 = document.getElementById("num3.2").value;
    var ans3   = parseFloat(num3_1) * parseFloat(num3_2);
    alert("计算结果为："+ans3);
}
            
function Calculate4(){
    var num4_1 = document.getElementById("num4.1").value;
    var num4_2 = document.getElementById("num4.2").value;
    var ans4   = parseFloat(num4_1) / parseFloat(num4_2);
    alert("计算结果为："+ans4);
}

function Calculate5(){
    var num5_ = document.getElementById("num5.").value;
    var num5  = parseFloat(num5_);
    var x;
    var i = 1;
    var ans5 = 0;
    do
    {
    x = num5 % 2;
    ans5 = ans5 + x * i;
    num5 = (num5 - x) / 2;
    i = i * 10;
    }while(num5 != 0);
    alert("计算结果为："+ans5);
}

function Calculate6(){
    var num6_ = document.getElementById("num6.").value;
    var num6  = parseFloat(num6_);
    var ans6  = Math.sin(num6);
    alert("计算结果为："+ans6);
}

function Calculate7(){
    var num7_ = document.getElementById("num7.").value;
    var num7  = parseFloat(num7_);
    var ans7  = Math.cos(num7);
    alert("计算结果为："+ans7);
}

