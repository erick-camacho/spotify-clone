import React from 'react'
import { loginUrl } from '../../spotify'
import { Container, Logo, Button } from './styles'

const Login = () => {
  return (
    <Container>
      <Logo src="https://cdn.usbrandcolors.com/images/logos/spotify-logo.svg" alt="Spotify Logo"/>
      <Button href={loginUrl}>Login with Spotify</Button>
    </Container>
  )
}

export default Login
