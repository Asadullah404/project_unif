import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

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

    const buttonStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        backgroundColor: 'grey',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s, transform 0.3s'
    }

    const buttonHoverStyle = {
        backgroundColor: 'black',
        transform: 'translateY(-5px)'
    }

    return (
        <div 
            onClick={scrollToTop} 
            style={buttonStyle}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = buttonHoverStyle.backgroundColor
                e.target.style.transform = buttonHoverStyle.transform
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = buttonStyle.backgroundColor
                e.target.style.transform = 'none'
            }}
        >
            ↑
        </div>
    )
}

export default ScrollTop
