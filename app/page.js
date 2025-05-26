'use client';
import {auth, provider} from './lib/firebase'
import {signInWithPopup} from 'firebase/auth';
import {Button, Box, Typography} from '@mui/material'
import Image from 'next/image'

export default function Home() {
   const handleGoogleSignIn = async () =>{
      try {
          const result = await signInWithPopup(auth ,provider)
          console.log(result.user)
      } catch (error) {
          console.error(error)
      }
    }

  return (
    <div className='main'>
      <Button
      variant='outlined'
      sx={{color:'black', height:'4rem'}}
      >Sign up</Button>

      <Button
      variant='outlined'
      sx={{color:'black', height:'4rem'}}
      >Sign In</Button>

      <Box
      sx={{
        mt:4, 
        display:'flex',
        flexDirection:'row',
        height: '4rem',
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
      style={{border:'none'}}
      onClick={handleGoogleSignIn}
      sx={{
          height: '100%',
          fontSize: '1.1rem',
          textTransform: 'none',
          backgroundColor: '#1976d2',
          color: 'white',
          borderRadius: 0,
            '&:hover': {
            backgroundColor: '#1565c0',
          },
      }}
      >
          Sign in WIth Google
      </Button>
      </Box>
    </div>
  );
}
