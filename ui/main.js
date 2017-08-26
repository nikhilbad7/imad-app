var button=document.getElementById("counter");
button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
       if(request.readyState===XMLHttpRequest.DONE){
           if(request.status===200){
               var counter=request.responseText;
               var span=document.getElementById("count");
               span.innerHTML=counter.toString();
           }
       } 
    };
request.open("GET","http://nikhilbadani.imad.hasura-app.io/counter",true);
request.send(null);
    };
   var submit='';
    submit.onclick=function(){
            var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
       if(request.readyState===XMLHttpRequest.DONE){
           if(request.status===200){
               
      var names=request.responseText;
      names=JSON.parse(names);
      var list='';
      for(var i=0;i<names.length;i++){
          list +="<li>" + names[i] +"</li>";}
      var ui=document.getElementById("namelist");
      ui.innerHTML=list;
           }
       }
    };
     var name=document.getElementById("name").value;
    var submit=document.getElementById("sub");
    request.open("GET","http://nikhilbadani.imad.hasura-app.io/submit-name?name="+ name,true);
request.send(null);
    };