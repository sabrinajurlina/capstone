const scheduleActions = {
    addToSchedule: 'addToSchedule',
    removeFromSchedule: 'removeFromSchedule',
    clearSchedule:'clearSchedule',
}

function scheduleReducer(schedule=[], {type, job}){
    switch(type){
        case scheduleActions.addToSchedule:
            return [...schedule, job];
        case scheduleActions.removeFromSchedule:
            let newSchedule = schedule.slice()
            for (let scheduleJob of newSchedule){
                if(scheduleJob.id === job.id){
                    newSchedule.splice(newSchedule.indexOf(scheduleJob), 1)
                    return newSchedule
                }
            }
            return newSchedule
        case scheduleActions.clearSchedule:
            return []
        default:
            throw new Error("Sorry, we experienced an error. Try again.")
    }
}

export{
    scheduleReducer,
    scheduleActions
}