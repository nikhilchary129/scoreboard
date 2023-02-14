
let s1=0
   function one1(){
        s1 += 1;
        document.getElementById("score1").innerText=s1;
    
    }
    let s2=0
    function one2(){
        s2 += 1;
        document.getElementById("score2").innerText=s2;
    
    }
    function two1(){
        s1 += 2;
        document.getElementById("score1").innerText=s1;
    
    }
    
    function two2(){
        s2 += 2;
        document.getElementById("score2").innerText=s2;
    
    }
    function three1(){
        s1 += 3;
        document.getElementById("score1").innerText=s1;
    
    }
   
    function three2(){
        s2 += 3;
        document.getElementById("score2").innerText=s2;
    
    }
    let h=0;
    function incr(){
       
        h += 1;
        document.getElementById("foul1").innerText="foul:" + h;
    }
 