async function httpGetPlanets() {
  const response = await fetch('http://localhost:8000/planets')
  return await response.json()
}

async function httpGetLaunches() {
  const response = await fetch('http://localhost:8000/launches')
  const launches = await response.json()
  return launches.sort(((a,b)=>a.flightNumber-b.flightNumber));
}

async function httpSubmitLaunch(launch) {
  try{
    return await fetch('http://localhost:8000/launches',{
      method:"post",
      body:JSON.stringify(launch),
      headers:{
        "Content-type":"application/json"
      }
    })
  }
  catch (err){
    return {
      ok:false
    }
  }

}

async function httpAbortLaunch(id) {
  try{
    return await  fetch(`http://localhost:8000/launches/${id}`,{
      method:'delete'
  })}catch (err){
    console.log(err)
    return {
      ok:false
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};
