

function validate()
{
    if(  users.find( o =>(o.username === document.getElementById('username').value) &&  (o.pwd === document.getElementById('pwd').value)  ))
    {
location.href="/dash";    }
    else
    {
 document.getElementById("form").reset();
setTimeout(function(){
   document.getElementById("wrong").removeAttribute("hidden");

});
    }
}
