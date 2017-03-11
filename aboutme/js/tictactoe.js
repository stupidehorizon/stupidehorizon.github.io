///采用极大值极小值算法 参考了shuiRong的CODEPEN 在此特别感谢他 他的codepen地址是 https://freecodecamp.cn/shuiRong/
var step=1;
var map=[0,0,0,0,0,0,0,0,0];//0表示空白 1表示X 2表示O
var weight=[0,0,0,0,0,0,0,0,0];//权重

//下棋函数
function play(){
  $(".element").click(function(){
    var elementId=$(this).attr("id");
    if(map[elementId-1]===0){
       $(this).text("×");
       step=step+1;
       map[elementId-1]=1;
       var youwin=ifWin();
       if(youwin)
        return 0;
      //console.log(map);  
     //  console.log(step); 
       weightJduge();
       AI();
       weight=[0,0,0,0,0,0,0,0,0];
       var aiwin=ifWin();
       if(aiwin)
         return 0;
      }
      //console.log(map);   
      //console.log(weight);
      //console.log(step);
    }); 
  }

//console.log(step); 
//AI
function AI(){
  if(step==2){
    if(map[4]==1){
      $("#1").text("○");
      step=step+1;
      map[0]=-1;
      return 0;
     }else{
      $("#5").text("○");
       step=step+1;
       map[4]=-1;
       return 0;
      }
     }
  
  if(step==4&&map[4]==1&&map[8]==1){
    $("#3").text("○");
    map[2]=-1;
    step=step+1;
    return 0;
  }  

  var temp=-100;
  var best;
  for(var i=0;i<=8;i++){ if(weight[i]="">temp&&map[i]===0){
       temp=weight[i];
       best=i+1;
    }
  }
  
  //console.log(best);
  $('#'+best+'').text("○");
  step=step+1;
  map[best-1]=-1;
}

//weightJudge权重判断函数
function weightJduge(){
  if(map[0]===0){
    if ((map[1]+map[2]==-2)||(map[3]+map[6]==-2)||(map[4]+map[8]==-2))
       weight[0]=4;
    else if((map[1]+map[2]==2)||(map[3]+map[6]==2)||(map[4]+map[8]==2))
       weight[0]=3;
    else if((map[1]+map[2]==-1)||(map[3]+map[6]==-1)||(map[4]+map[8]==-1))
      weight[0]=2;
    else if((map[1]+map[2]==1)||(map[3]+map[6]==1)||(map[4]+map[8]==1))
      weight[0]=1;
    else if((map[1]+map[2]===0)||(map[3]+map[6]===0)||(map[4]+map[8]===0))
      weight[0]=0;    
  }
  if(map[1]===0){
    if ((map[0]+map[2]==-2)||(map[4]+map[7]==-2))
       weight[1]=4;
    else if((map[0]+map[2]==2)||(map[4]+map[7]==2))
       weight[1]=3;
    else if((map[0]+map[2]==-1)||(map[4]+map[7]==-1))
       weight[1]=2;
    else if((map[0]+map[2]==1)||(map[4]+map[7]==1))
       weight[1]=1;
    else if((map[0]+map[2]===0)||(map[4]+map[7]===0))
      weight[1]=0;  
  }
 if(map[2]===0){
    if ((map[0]+map[1]==-2)||(map[4]+map[6]==-2)||(map[5]+map[8]==-2))
       weight[2]=4;
    else if((map[0]+map[1]==2)||(map[4]+map[6]==2)||(map[5]+map[8]==2))
       weight[2]=3;
   else if((map[0]+map[1]==-1)||(map[4]+map[6]==-1)||(map[5]+map[8]==-1))
       weight[2]=2;
   else if((map[0]+map[1]==1)||(map[4]+map[6]==1)||(map[5]+map[8]==1))
       weight[2]=1;
    else if((map[0]+map[1]===0)||(map[4]+map[6]===0)||(map[5]+map[8]===0))
      weight[2]=0;  
  }
  if(map[3]===0){
    if ((map[0]+map[6]==-2)||(map[4]+map[5]==-2))
       weight[3]=4;
    else if((map[0]+map[6]==2)||(map[4]+map[5]==2))
       weight[3]=3;
    else if((map[0]+map[6]==-1)||(map[4]+map[5]==-1))
       weight[3]=2;
    else if((map[0]+map[6]==1)||(map[4]+map[5]==1))
       weight[3]=1;
    else if((map[0]+map[6]===0)||(map[4]+map[5]===0))
      weight[3]=0;  
  }
  if(map[4]===0){
    if ((map[1]+map[7]==-2)||(map[3]+map[5]==-2)||(map[0]+map[8]==-2)||(map[2]+map[6]==-2))
       weight[4]=4;
    else if((map[1]+map[7]==2)||(map[3]+map[5]==2)||(map[0]+map[8]==2)||(map[2]+map[6]==2))
       weight[4]=3;
     else if((map[1]+map[7]==-1)||(map[3]+map[5]==-1)||(map[0]+map[8]==-1)||(map[2]+map[6]==-1))
       weight[4]=2;
     else if((map[1]+map[7]==1)||(map[3]+map[5]==1)||(map[0]+map[8]==1)||(map[2]+map[6]==1))
       weight[4]=1;
    else if((map[1]+map[7]===0)||(map[3]+map[5]===0)||(map[0]+map[8]===0)||(map[2]+map[6]===0))
      weight[4]=0;  
  }
  if(map[5]===0){
    if ((map[2]+map[8]==-2)||(map[3]+map[4]==-2))
       weight[5]=4;
    else if((map[2]+map[8]==2)||(map[3]+map[4]==2))
       weight[5]=3;
    else if((map[2]+map[8]==-1)||(map[3]+map[4]==-1))
       weight[5]=2;
    else if((map[2]+map[8]==1)||(map[3]+map[4]==1))
       weight[5]=1;
    else if((map[2]+map[8]==-2)||(map[3]+map[4]==-2))
      weight[5]=0;  
   }
  if(map[6]===0){
    if ((map[0]+map[3]==-2)||(map[7]+map[8]==-2)||(map[4]+map[2]==-2))
       weight[6]=4;
    else if((map[0]+map[3]==2)||(map[7]+map[8]==2)||(map[4]+map[2]==2))
       weight[6]=3;
    else if((map[0]+map[3]==-1)||(map[7]+map[8]==-1)||(map[4]+map[2]==-1))
       weight[6]=2;
    else if((map[0]+map[3]==1)||(map[7]+map[8]==1)||(map[4]+map[2]==1))
       weight[6]=1;
    else if((map[0]+map[3]===0)||(map[7]+map[8]===0)||(map[4]+map[2]===0))
      weight[6]=0;  
   }
  if(map[7]===0){
    if ((map[1]+map[4]==-2)||(map[6]+map[8]==-2))
       weight[7]=4;
    else if((map[1]+map[4]==2)||(map[6]+map[8]==2))
       weight[7]=3;
    else if((map[1]+map[4]==-1)||(map[6]+map[8]==-1))
       weight[7]=2;
    else if((map[1]+map[4]==1)||(map[6]+map[8]==1))
       weight[7]=1;
    else if((map[1]+map[4]===0)||(map[6]+map[8]===0))
      weight[7]=0;  
   }
  if(map[8]===0){
    if ((map[2]+map[5]==-2)||(map[6]+map[7]==-2)||(map[0]+map[4]==-2))
       weight[8]=4;
    else if((map[2]+map[5]==2)||(map[6]+map[7]==2)||(map[0]+map[4]==2))
       weight[8]=3;
    else if((map[2]+map[5]==-1)||(map[6]+map[7]==-1)||(map[0]+map[4]==-1))
       weight[8]=2;
    else if((map[2]+map[5]==1)||(map[6]+map[7]==1)||(map[0]+map[4]==1))
       weight[8]=1;
    else if((map[2]+map[5]===0)||(map[6]+map[7]===0)||(map[0]+map[4]===0))
       weight[8]=0;  
   }
}

//判断输赢函数
function ifWin(){
  if(map[0]+map[1]+map[2]==3||map[3]+map[4]+map[5]==3||map[6]+map[7]+map[8]==3||map[0]+map[3]+map[6]==3||map[1]+map[4]+map[7]==3||map[2]+map[5]+map[8]==3||map[0]+map[4]+map[8]==3||map[2]+map[4]+map[6]==3){
   setTimeout(function(){
    alert("真棒！你赢了");
    map=[0,0,0,0,0,0,0,0,0,0];
    weight=[0,0,0,0,0,0,0,0,0,0];
    $(".element").text("");
    step=1;
    return 1;},500);
   }
  
  else  if((map[0]+map[1]+map[2]==-3||map[3]+map[4]+map[5]==-3||map[6]+map[7]+map[8]==-3||map[0]+map[3]+map[6]==-3||map[1]+map[4]+map[7]==-3||map[2]+map[5]+map[8]==-3||map[0]+map[4]+map[8]==-3||map[2]+map[4]+map[6]==-3)){
  setTimeout(function(){
    alert("AI赢了");
    map=[0,0,0,0,0,0,0,0,0,0];
    weight=[0,0,0,0,0,0,0,0,0,0];
    $(".element").text("");
    step=1;
    return 1;},500);
   
  }
 else if(step==10){
  setTimeout(function(){
    alert("平局");
    map=[0,0,0,0,0,0,0,0,0,0];
    weight=[0,0,0,0,0,0,0,0,0,0];
    $(".element").text("");
    step=1;
    return 1;},500);
   }
 
}



$(document).ready(function(){
  play();
})
</=8;i++){>