import React, { useState, useEffect } from 'react';
import GlobalStyle from './globalStyle';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
    } else {
      const err = hash.error;
      console.error(err);
    }
  }, [])

  console.log("token", token);
  return (
    <>
      <GlobalStyle />
      {token ? <h1 style={{color:'#fff'}}>Logged in</h1> : <Login />}
    </>
  )
}

export default App;
