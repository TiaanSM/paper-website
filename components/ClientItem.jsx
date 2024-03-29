"use client"

const ClientItem = (props) => {

    const inView = props.inView;

    const itemStyles = {
        position: 'absolute',
        right: inView ? props.end : props.start,
        color: 'white',
        fontSize: '1.1rem',
        fontSize: 'clamp(1.1rem, 0.13773584905660385rem + 5.132075471698113vw, 4.5rem)',
        fontFamily: 'sans-serif',
        paddingInline: '0.8rem',
        transition: 'all 1s ease',
        backgroundColor: 'transparent'
    }

  return (

    <span style={itemStyles}>{props.client}</span>

  )
}

export default ClientItem