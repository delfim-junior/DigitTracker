import React from 'react'

import spinner from '../../assets/images/success.gif'

const style = {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    position: 'absolute',
    left: 0,
    top:0,
    top: 0,
    zIndex: 1000,
    background:'rgba(0,0,0,.5)',
    height:'100vh',
    width: '100vw',
    position:'fixed'
}

const Loading = () => {
    return (
        <div style={style}>
            <img src={spinner}/>
        </div>
    )
}

export default Loading

