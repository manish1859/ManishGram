import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
            <div style={manish.row}>
                    <span style={manish.text}>Meta</span>
                    <span style={manish.text}>About</span>
                    <span style={manish.text}>Blog</span>
                    <span style={manish.text}>Jobs</span>
                    <span style={manish.text}>Help</span>
                    <span style={manish.text}>Api</span>
                    <span style={manish.text}>Privacy</span>
                    <span style={manish.text}>Terms</span>
                    <span style={manish.text}>Location</span>
                    <span style={manish.text}>Instagram Lite</span>
                    <span style={manish.text}>Threads</span>
                    <span style={manish.text}>Contact Uploading & Non-User</span>
                    <span style={manish.text}>Meta Varified</span>  
        </div>
        </div>
      </footer>
    </div>
  )
}

const manish ={
    text:{
        color:'gray',
        fontSize:13,
        marginLeft:10
    },
    row:{
        display:'flex',
        cursor: 'pointer' ,
    }
}

export default Footer
