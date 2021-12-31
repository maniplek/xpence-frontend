import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../table/Table'
import Sidebar from '../sidebar/Sidebar'
import MainStyle from '../Main/MainStyle.css'
import MainCenter from '../center/mainCenter/mainCenter'


const Main = () => {
    // const dispatch = useDispatch()
    // const [allAccounts, setAllAccounts] = useState([])
    // useEffect(async() => {
    //     await dispatch(getAccountsAction());
    //     const accounts = useSelector((state) => state.allAccountsReducer)
    //     setAccounts(accounts)
    // }, [])
    return (
        <div className='main'>
            <Sidebar/>
            <MainCenter/>
           <Table/>

        </div>
    )
}

export default Main
