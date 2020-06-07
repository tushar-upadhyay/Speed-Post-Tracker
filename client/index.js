let result = document.getElementById('result');
function handleSubmit(e){
    e.preventDefault();
    document.getElementById('btn').setAttribute('disabled','true');
    result.innerHTML = "";
    result.className = "loader";
    let id = e.target[0].value;
    fetch(`/search?id=${id}`)
    .then(res=>res.text())
    .then(res=>{
        document.getElementById('btn').removeAttribute('disabled');
        result.className = "";
        if(res=='error'){
        result.innerHTML = '<br><h3>Your ID is incorrect or some server issue</h3>' 
        }
        else{
        result.innerHTML = res;
        }
    })
    .catch(err=>{
        result.className = "";
        result.innerHTML = '<br><h3>Your ID is incorrect or some server issue</h3>';
        document.getElementById('btn').removeAttribute('disabled')
    });
    
}