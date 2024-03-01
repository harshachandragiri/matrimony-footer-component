import React from "react";
import '../assignment/index.css'

function Demofooter() {
    return (
        <div>
            <div >
                <button className="btn">Trusted by millions</button>
            </div>
            <div className="flexb iconbox" >
                <div className="spacingleft">
                    <p > &#xf5fc; &nbsp;  &nbsp;Best Matches
                    </p>
                </div>
                <div className="spacingleft">
                    <p > &#xf5fc; &nbsp;  &nbsp; Verified Profiles
                    </p>
                </div>
                <div  className="spacingleft">
                    <p > &#xf5fc; &nbsp;  &nbsp; 100% Privacy
                    </p>
                </div>
            </div>
            <div container className="flexb">
                <div className="colone">
                    <h3 className="paddl">Need Help?</h3>
                    <ul>
                        <li><a href="#">memeber login</a></li>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#"> Partner search</a></li>
                        <li> <a href="#">How to use Vivah Bandham</a></li>
                        <li><a href="#"> Premium memberships</a></li>
                        <li><a href="#"> Site Map</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="paddl">Company</h3>

                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Bandham Blog</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Awards & recognisation</a></li>
                        <li><a href="#">Contact Us</a></li>

                    </ul>
                </div>
                <div>
                    <h3 className="paddl">Privacy & you</h3>

                    <ul>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Be Safe Online</a></li>
                        <li><a href="#">Report Mistake</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="paddl">More</h3>
                    <ul>
                        <li><a href="#">Vip VivahBandham</a></li>
                        <li><a href="#">Select VivahBandhan</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
export default Demofooter;