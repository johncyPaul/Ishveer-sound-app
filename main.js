function startclassification(){ navigator.mediaDevices.getUserMedia({audio:true});
  classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LDEBwhUqk/model.json", modelReady);
}
function modelReady(){
  classifier.classify(gotResults);
}
function gotResults(error,results){
  if(error){
    console.error(error);
  }
   else{
     console.log(results);
     randomNumber_r=Math.floor(Math.random()*255)+1;
     randomNumber_g=Math.floor(Math.random()*255)+1;
     randomNumber_b=Math.floor(Math.random()*255)+1;
     document.getElementById("result_label").innerHTML="I can hear:"+results[0].label;
     document.getElementById("result_confidence").innerHTML=(results[0].confidence*100).toFixed(2)+"%";
     document.getElementById("result_label").style.color="rgb("+randomNumber_r+","+randomNumber_g+","+randomNumber_b+")";
 document.getElementById("result_confidence").style.color="rgb("+randomNumber_r+","+randomNumber_g+","+randomNumber_b+")";
   img1=document.getElementById("alien1");
   img2=document.getElementById("alien2");
   img3=document.getElementById("alien3");
   img4=document.getElementById("alien4");
   
   if(results[0].label=="Clap"){ img1.src="https://i.postimg.cc/Bnysk8wC/aliens-01.gif";
 img2.src="https://i.postimg.cc/prktvYZQ/aliens-02.png";
 img3.src="https://i.postimg.cc/FHwXhKj6/aliens-03.png";
 img4.src="https://i.postimg.cc/cHSq85kM/aliens-04.png";
   }
     else
       if(results[0].label=="Snap"){ img1.src="https://i.postimg.cc/fR8kCYQ9/aliens-01.png";
 img2.src="https://i.postimg.cc/Y0pwYQht/aliens-02.gif";
 img3.src="https://i.postimg.cc/FHwXhKj6/aliens-03.png";
 img4.src="https://i.postimg.cc/cHSq85kM/aliens-04.png";
   }
     else
       if(results[0].label=="Alarm"){ img1.src="https://i.postimg.cc/fR8kCYQ9/aliens-01.png";
 img2.src="https://i.postimg.cc/prktvYZQ/aliens-02.png";
 img3.src="https://i.postimg.cc/L61VLGF6/aliens-03.gif";
 img4.src="https://i.postimg.cc/cHSq85kM/aliens-04.png";
   }
    else{
      img1.src="https://i.postimg.cc/fR8kCYQ9/aliens-01.png";
 img2.src="https://i.postimg.cc/prktvYZQ/aliens-02.png";
 img3.src="https://i.postimg.cc/FHwXhKj6/aliens-03.png";
 img4.src="https://i.postimg.cc/TwBtXxvF/aliens-04.gif";
    }
   }
 }
 