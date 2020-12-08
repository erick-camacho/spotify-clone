import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`

export const Logo = styled.img`
  
`

export const Button = styled.a`
  padding: 1rem 3rem;
  background-color: #1DB954;
  color: #191414;
  border-radius: 99px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  cursor: pointer;
  transition: .3s;

  :hover {
    background-color: #fff;
    transform: scale(1.04);
  }
`