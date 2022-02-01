const launches = new Map();
let latestFlightNumber = 100
const launch={
    flightNumber:100,
    mission:'Kepler exploration',
    rocket:'Explorer 202',
    launchDate: new Date('December 27,2030'),
    target:"Earth",
    customer:["ZTM",'NASA'],
    upcoming:true,
    success:true
}
launches.set(launch.flightNumber,launch)

function getAllLaunches() {
    return Array.from(launches.values())
}
function existsLaunchWithId(id){
    return launches.has(id)
}
function addNewLaunch(launch){
    latestFlightNumber++
    launches.set(latestFlightNumber,Object.assign(launch,{
        flightNumber:latestFlightNumber,
        customers:['Zero to mastery','Nasa'],
        upcoming: true,
        success: true
    }))
}

function abortLaunchById(launchId) {
   const aborted =  launches.get(launchId)
    aborted.upcoming=false
    aborted.success=false
    return aborted
}

module.exports={
    launches,
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById
}
