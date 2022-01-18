import React from 'react'
import { useHistory } from 'react-router'

export default function Footer() {
    let History = useHistory();
    const map = () => {
        window.open("https://maps.google.com?q=" + 18.579397462481754 + "," +  73.73879886249456);
    }
    return (
        <div className="text-white row " style={{ marginTop: "50px", backgroundColor: "black", width: "101%" }}>
            <div className='col-md-4 text-center' style={{ marginTop: "10px" }}>
                <h5>About Company</h5>
                <span>NeoSOFT Technologies is here at your quick and </span><br />
                easy service for shopping.<br/>
                <br />
                <span>Email: contact@neosofttech.com</span><br />
                <span>Phone: +91 9146704996</span><br />
                <span>MUMBAI, INDIA</span>

            </div>
            <div className='col-md-4 text-center' style={{ marginTop: "10px" }}>
                <h5>Information</h5>
                <a href='Images/TC.pdf' target='_blank' rel='noopener noreferrer' style={{ color: "white", textDecoration: "none" }}>Terms and Condition</a><br />
                <span>Guarantee and Return Policy</span><br />
                <span>Contact US</span><br />
                <span>Privacy Policy</span><br /><br/>
                <p onClick={map} style={{color:"red"}}>Locate US</p>

            </div>
            <div className='col-md-4 text-center' style={{ marginTop: "10px" }}>
                <h5>Newsletter</h5>
                <span>Sign Up to get exclusive offer from our favourite brands and to be well up in the news</span><br />
                <br />
                <input className='form-control' placeholder='your email' type="text" style={{ width: "230px", marginLeft: "128px" }}></input>
                <button className="btn btn-danger" style={{ marginTop: "10px" }} onClick={() => {
                    History.push("/subscribe")
                }}>Subscribe</button>

            </div>
            <span className='text-center' style={{ marginTop: "10px" }}>Copyright 2022 NeoSOFT Technologies All Rights reserved
                | Design By Abhay Chaskar
            </span>
        </div>
    )
}
