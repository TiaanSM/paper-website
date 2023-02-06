"use client"

const ClientItem = (props) => {

    const inView = props.inView;

    const itemStyles = {
        position: 'absolute',
        right: inView ? props.end : props.start,
        color: 'white',
        fontSize: '4.5rem',
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