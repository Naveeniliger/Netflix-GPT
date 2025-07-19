import React from 'react'

const VideoBg = () => {
    return (
        <div className='completevideo'>

            <div className='videomain'>

                <iframe className='video'
                    width=""
                    height=""
                    frameborder="0"
                    allow="autoplay; fullscreen; encrypted-media"
                    allowFullScreen
                    
                src="https://www.youtube.com/embed/Frp0zC4643U?autoplay=1&mute=1&controls=0&rel=0&disablekb=1&fs=1&loop=1&playlist=Frp0zC4643U"
                >

                </iframe>
            </div>

            <div className='videotitle'>
                {/* <img className='titlepng' src="https://mir-s3-cdn-cf.behance.net/projects/404/8ebe04175067047.Y3JvcCw5OTUsNzc4LDQzNiwxMzA.jpg" alt="" /> */}
                <h1  className='k1'>ಕಾಂತಾರ</h1>
                <p className='k2'>Kantara - A Legend Chapter 1 - First Look Video now available in your regional language -
                    Kannada / Tamil / Telugu / Malayalam / Hindi / Bengali
                    In the video, go to settings and choose your preferred language</p>
                    <div className='playbtn'><button className='playbtn1'>▶ Play</button><button className='playbtn2'>MoreInfo</button></div>

            </div>

        </div>
    )
}

export default VideoBg