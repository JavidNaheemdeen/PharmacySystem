import React from 'react'
import fb from '../../images/facebook.png'
import inst from '../../images/instagram.png'
import twt from '../../images/twitter.png'

export default function Footer() {
    return (
        <div>
            <div className="row bg-dark white">

                <div class="col-md-4 text-center">
                    <br /><br /><br />
                    <h3>@PillTrack 2023</h3>
                    <h5 style={{ color: "yellow" }}><i>Greatness starts here</i></h5>
                </div>
                <div class="col-md-4">
                    <div class="container-fluid">
                        <br />
                        <p class="text-center" style={{ fontSize: "25px" }}>Need help? | (+94) 77 123 1234 </p>
                        <h6 class="text-center">pilltrack@gmail.com</h6>
                        <h6 class="text-center">0352345678</h6>
                        <h6 class="text-center">A25, Kandy Road, Mawanella</h6>


                    </div>
                    <br />

                    <div class="text-center">
                        <br />
                        {/* <button href="#" class="btn btn-def btn-def-hoverout "> Apply Now</button> */}
                    </div>
                </div>
                <div class="col-md-4 text-center">
                    <br /> <br />
                    <br />
                    <div class="social-media">
                        You can find us on -
                        <p class="mb-0 d-flex">
                            <a href="#" class="d-flex align-items-center justify-content-center"> <img src={fb} alt="image" style={{ height: '25px', width: '25px' }} /></a>
                            <a href="#" class="d-flex align-items-center justify-content-center"> <img src={twt} alt="image" style={{ height: '25px', width: '25px' }} /></a>
                            <a href="#" class="d-flex align-items-center justify-content-center"> <img src={inst} alt="image" style={{ height: '25px', width: '25px' }} /></a>
                        </p>
                        <br />
                    </div>
                </div>
                <br /><br />
            </div>
        </div>
    )
}
