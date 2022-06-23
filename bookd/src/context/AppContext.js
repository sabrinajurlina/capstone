import React, {createContext, useReducer, useState, useEffect} from 'react';
import {scheduleReducer, scheduleActions} from '../reducers/scheduleReducer';

export const AppContext = createContext();
    const AppContextProvider=({children})=>{
        const getUserFromLS = ()=>{
            let user = localStorage.getItem('user')
            if(user){
                return JSON.parse(user)
            }
        }
        const getScheduleFromLS=()=>{
            let schedule = localStorage.getItem('schedule')
            if (schedule){
                return JSON.parse(schedule)
            }
        }
    const [user, _setUser] = useState(getUserFromLS()??{})
    const [alert, setAlert] = useState({})
    const [schedule, dispatch] = useReducer(scheduleReducer, getScheduleFromLS()??[])

        useEffect(
            ()=>{
                localStorage.setItem('schedule', JSON.stringify(schedule))
            }, [schedule]
        )

        const setUser = (user)=>{
            localStorage.setItem('user', JSON.stringify(user))
            _setUser(user)
        }

        const values = {
            user,
            setUser,
            alert,
            setAlert,
            schedule,
            addToSchedule:(job)=>{
                dispatch({type:scheduleActions.addToSchedule, job})
            },
            removefromSchedule: (job)=>{
                dispatch({type:scheduleActions.removeFromSchedule, job})
            },
            clearSchedule:()=>{
                dispatch({type:scheduleActions.clearList})
            }
        
        }
        return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider