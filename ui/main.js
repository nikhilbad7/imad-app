

   var submit=document.getElementById('submit_btn');
    submit.onclick=function(){
            var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
       if(request.readyState===XMLHttpRequest.DONE){
           if(request.status===200){
               
      console.log("userlogged in");
      alert("logged in succesfully");
       }
       else if(request.status===403){
        alert("invalid password");   
       }
       else if(request.status===500){
           alert("something went wrong");
       }
       
    }
    };
     var username=document.getElementById("username").value;
     var password=document.getElementById("password").value;
    console.log(username);
    console.log(password);
    request.open("POST","http://nikhilbadani.imad.hasura-app.io/login"+ name,true);
    request.setRequestHeader('Content-Type','application/json');
request.send(JSON.stringify({username: username,password: passowrd}));
    };