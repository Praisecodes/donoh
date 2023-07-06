'use client'

import { Button } from "../atoms";

const AuthButtons = ():JSX.Element => {
  return(
    <section className={`flex`}>
      <Button width={'7'} transparent={true} margin={'0.2'} onClick={()=>{}}>
        Sign in
      </Button>

      {' '}

      <Button width={'7'} transparent={false} margin={'0.2'} onClick={()=>{}}>
        Sign Up
      </Button>
    </section>
  )
}

export default AuthButtons;
