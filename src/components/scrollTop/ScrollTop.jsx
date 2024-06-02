import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
export default {
  build: {
    rollupOptions: {
      external: ['styled-components']
    }
  }
}
// Define a styled component for the scroll to top button
const ScrollButton = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: grey;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: black;
        transform: translateY(-5px);
    }
`

const ScrollTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 0)
    }, [pathname])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return <ScrollButton onClick={scrollToTop}>↑</ScrollButton>
}

export default ScrollTop
