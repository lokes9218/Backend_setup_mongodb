(async ()=>{
  try{
    const res = await fetch('http://localhost:3000/api/auth/register',{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({username:'lokiiii',email:'lok@gmail.com',password:'12345'})
    });
    console.log('status',res.status);
    const body = await res.text();
    console.log('body',body);
  }catch(e){
    console.error('request error',e);
  }
})();