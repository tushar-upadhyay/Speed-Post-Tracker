function handleSubmit(e){
    e.preventDefault();
    document.getElementById('btn').setAttribute('disabled','true');
    document.getElementById('result').innerHTML = "";
    document.getElementById('result').className = "loader";
    let id = e.target[0].value;
    fetch(`/search?id=${id}`)
    .then(res=>res.text())
    .then(res=>{
        document.getElementById('btn').removeAttribute('disabled');
        if(res=='error'){
        document.getElementById('result').className = "";
        document.getElementById('result').innerHTML = '<br><h3>Your ID is incorrect or some server issue</h3>' 
        }
        else{
        document.getElementById('result').className = "";
        document.getElementById('result').innerHTML = res;
        }
    })
    .catch(err=>{
        document.getElementById('result').className = "";
        document.getElementById('result').innerHTML = '<br><h3>Your ID is incorrect or some server issue</h3>';
        document.getElementById('btn').removeAttribute('disabled')
    });
    
}