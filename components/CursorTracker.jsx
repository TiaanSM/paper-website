import { useEffect, useState, useRef } from 'react';

const CursorTracker = () => {

  const [x, setX] = useState()
  const [y, setY] = useState()
  const containerRef = useRef(null);

  useEffect(
    () => {
      const update = (e) => {
        setX(e.x)
        setY(e.y)
      }
      window.addEventListener('mousemove', update)
      window.addEventListener('touchmove', update)
      return () => {
        window.removeEventListener('mousemove', update)
        window.removeEventListener('touchmove', update)
      }
    },
    [setX, setY]
  )

  const cursorStyle = {
    width: '60px',
    height: '60px',
    position: 'absolute',
    top: `${y}px`,
    left: `${x}px`,
    backgroundColor: 'white',
    borderRadius: '100%',
    mixBlendMode: 'difference'
  }
  const containerStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0'
  }
  
  return (

    <div ref={containerRef} style={containerStyle}>
        <div style={cursorStyle}></div>
    </div>

  )
}

export default CursorTracker