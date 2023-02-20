
const WorkCard = (props) => {

    const cardStyle = {
        width: '100%',
        aspectRatio: props.ratio,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer'
    }

    const imageContainerStyle = {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const imageStyle = {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        objectFit: 'cover'
    }

    const textContainerStyle = {
        width: '100%',
        overflow: 'hidden'
    }

    const titleStyle = {
        fontFamily: 'sans-serif',
        fontSize: '1.3rem',
        fontWeight: '300',
        padding: '1rem 0'
    }

  return (

    <div style={cardStyle}>
        <div style={imageContainerStyle}>
            <img src="" alt="" style={imageStyle} />
        </div>
        <div style={textContainerStyle}>
            <h2 style={titleStyle}>{props.title}</h2>
        </div>
    </div>

  )
}

export default WorkCard