'use client';
import {auth, provider} from './lib/firebase'
import {signInWithPopup, getAuth, GoogleAuthProvider} from 'firebase/auth';
import {Button, Box, Snackbar, Alert} from '@mui/material'
import Image from 'next/image'
import {useState} from 'react'
import {useRouter} from 'next/navigation';

export default function Home() {
   const router = useRouter()
   const[loading, setLoading] = useState(false)
   const[snackbar, setSnackBar] = useState({open:false, message:"", severity: 'info' })

  const handleCloseSnackbar = () =>{
  setSnackBar({...snackbar, open:false})
  }
   
   const handleGoogleSignIn = async () =>{
    setLoading(true)
      try {
          const result = await signInWithPopup(auth ,provider)
          console.log(result.user)
          router.push('/dashboard')
      } catch (error) {
          if(error.code === 'auth/popup-closed-by-user'){
            console.log("User closed the popup before completing the sign-in")
            setSnackBar({
              open: true,
              message: "Popup closed before completing Sign-in",
              severity: 'warning'
            })
          } else{
            console.error("Sign in error", error)
            setSnackBar({
              open: true,
              message: 'Sign-in failed. Please try again',
              severity:'error'
            })
          } 
          } finally{
            setLoading(false)
      }
    }

  return (
    <div className='main'>
      <div className='main-contents'>
              <Button
      variant='outlined'
      sx={{color:'black', height:'3rem'}}
      >Sign up</Button>

      <Button
      variant='outlined'
      sx={{color:'black', height:'3rem', width:'100%'}}
      >Sign In</Button>

      <Box
      sx={{
        mt:4, 
        display:'flex',
        flexDirection:'row',
        height: '3rem',
        border: '1px solid #1976d2',
        borderRadius: '4px',
        overflow:'hidden'
      }}
      >
       <Box 
       sx={{
            backgroundColor: '#fff',
            padding: '0 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRight: '1px solid #1976d2',
       }}
       >
         <Image 
         src="/google.png" 
         alt="not available"
         width={32} 
         height={32}
         />
       </Box>
      <Button 
      variant = 'contained'
      onClick={handleGoogleSignIn}
      disabled={loading}
      sx={{
          height: '100%',
          width: '100%',
          fontSize: '1rem',
          textTransform: 'none',
          backgroundColor: '#1976d2',
          color: 'white',
          borderRadius: 0,
          border: 'none',
          '&:hover': {
          backgroundColor: '#1565c0',
       },
      }}
      >
          {loading ? "Signing in..." : "Sign in with Google"}
      </Button>
      </Box>

      <Snackbar
      open={snackbar.open}
      autoHideDuration={4000}
      onClose={handleCloseSnackbar}
      anchorOrigin={{vertical:'bottom', horizontal:'center'}}
      >
        <Alert
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
        sx={{width: '100%'}}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      </div>
    </div>
  );
}
