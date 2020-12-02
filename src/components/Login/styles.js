import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Logo = styled.img`
  object-fit: contain;
  height: 12rem;
`

export const Button = styled.a`
  margin-top: 5rem;
  padding: 1rem 3rem;
  background-color: #1DB954;
  color: #191414;
  border-radius: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: .3s;

  :hover {
    background-color: #fff;
    transform: scale(1.04);
  }
`