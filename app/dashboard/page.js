'use client'
import {auth} from '../lib/firebase'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import {Button, Box, Typography} from '@mui/material'
import { useEffect, useState } from 'react'

export default function Dashboard(){
    const router = useRouter()
    const[user, setUser] = useState(null)

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(currentuser =>{
            if(currentuser) {
                setUser(currentuser)
            } else{
                router.push('/')
            }
        })
        return () => unsubscribe()
    },[])

    const handleSignOut = async() =>{
        try {
            await signOut(auth)
            router.push('/')
        } catch (error) {
            console.error("Error signing out :", error)
        }
    }
    
    return(
        <Box sx={{textAlign:'center', p:'200px'}}>
            <Typography sx={{fontSize:'25px'}}>
                Welcome {user?.displayName || "User"}
            </Typography>
            <Button
            variant='contained'
            color='error'
            onClick={handleSignOut}
            sx={{mt:2}}
            >
                Sign Out
            </Button>
        </Box>
    )
}