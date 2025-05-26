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
        border: '1px solid #1976d2'

      }}
      >
       <Box 
       sx={{
        border: '1px solid #1976d2',
        borderRight: 'none',
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px',
        padding: '6px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
       }}
       >
         <Image 
         src="/google.png" 
         alt="not available" 
         className="google-icon"
         width={32} 
         height={32}
         />
       </Box>
      <Button 
      variant = 'contained' 
      style={{border:'none'}}
      onClick={handleGoogleSignIn}
      sx={{
        width: '300px', 
        fontSize:'1.1rem', 
        height:'100%',
        textTransform: 'primary.main',
        border: '1px solid #1976d2',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px'
      }}
      >
          Sign in WIth Google
      </Button>
      </Box>
    </div>
  );
}
