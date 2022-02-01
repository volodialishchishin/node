const express = require('express')
const {httpGetAllLaunches,httpAddAllLaunches,httpDeleteLaunch} = require("./launches.controller");

const launchesRouter = express.Router()

launchesRouter.get('/',httpGetAllLaunches)
launchesRouter.post('/',httpAddAllLaunches)
launchesRouter.delete('/:id',httpDeleteLaunch)

module.exports=launchesRouter
