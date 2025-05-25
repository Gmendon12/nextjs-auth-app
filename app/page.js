import Image from "next/image";
import {auth, provider} from './lib/firebase'
import {signInWithPopup} from 'firebase/auth';
import {Button} from '@mui/material'

export default function Home() {
   const handleGoogleSignIn = async () =>{
      try {
          await signInWithPopup(auth ,provider)
          console.log(RenderResult.user)
      } catch (error) {
          console.error(error)
      }
    }

  return (
    <div>
      <Button variant = 'contained'>
          Sign in WIth Google
      </Button>
    </div>
  );
}
