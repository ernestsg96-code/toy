'use client'
import {supabase} from '../../lib/supabase'
import {useRouter} from 'next/navigation'
import {useEffect} from "react"


export default function Dashboard() {

    const router = useRouter()
    
    useEffect(() => {
        const checkUser = async () => {
            const {data, error} = await supabase.auth.getUser()
            if(!data.user){
                router.push('./signup')
            }
        }
        checkUser()
    },[])

    return (    
        <div>

            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
        </div>
    )   
}