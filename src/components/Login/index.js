import React from 'react'
import { Container, Logo, Button } from './styles'

const Login = () => {
  return (
    <Container>
      <Logo src="https://cdn.usbrandcolors.com/images/logos/spotify-logo.svg" alt="Spotify Logo"/>
      <Button>Login with Spotify</Button>
    </Container>
  )
}

export default Login
