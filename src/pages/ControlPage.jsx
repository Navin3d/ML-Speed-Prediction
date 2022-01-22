import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import swal from "sweetalert";

const INITIAL_BODY = {
    location: ""
}

const ControlPage = () => {

    const [body, setBody] = useState(INITIAL_BODY);

    const handleClick = async (e) => {
        const { name, value } = e.target;

        const payload = {
            [name]: value
        }

        console.log("Payload: " + JSON.stringify(payload));

        const url = `https://samzonlinecoding.herokuapp.com/api/set_location/`;
        const response = await axios.post(url, payload).catch(e => {
            swal(`Try again Later...`)
        });

        if(response.status === 200) {
            swal(`Data Modified...`);
        }

    }

    return (
        <Fragment>
            <div className="container">
                <div class="row align-items-center">
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="A Narayanapura">A Narayanapura</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Agaram">Agaram</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Banasavadi">Banasavadi</button>
                    </div>
                </div><br />

                <div class="row align-items-center">
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Basavanpura">Basavanpura</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Devasandra">Devasandra</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Dodda Nekkundi">Dodda Nekkundi</button>
                    </div>
                </div><br />

                <div class="row align-items-center">
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Hudi">Hudi</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Garudachar Playa">Garudachar Playa</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Hagadur">Hagadur</button>
                    </div>
                </div><br />

                <div class="row align-items-center">
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Hudi">Hudi</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="HAL Airport">HAL Airport</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Hemmigepura">Hemmigepura</button>
                    </div>
                </div><br />

                <div class="row align-items-center">
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Horamavu">Horamavu</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Hoysala Nagar">Hoysala Nagar</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="HSR Layout">HSR Layout</button>
                    </div>
                </div><br />

                <div class="row align-items-center">
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Hudi">Hudi</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="J P Nagar">J P Nagar</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Jeevanbhima Nagar">Jeevanbhima Nagar</button>
                    </div>
                </div><br />

                <div class="row align-items-center">
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="K R Puram">K R Puram</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Kacharkanahalli">Kacharkanahalli</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Kadugodi">Kadugodi</button>
                    </div>
                </div><br />

                <div class="row align-items-center">
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Konena Agrahara">Konena Agrahara</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Marathahalli">Marathahalli</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="New Tippasandara">New Tippasandara</button>
                    </div>
                </div><br />

                <div class="row align-items-center">
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Ramamurthy Nagar">Ramamurthy Nagar</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Sampangiram">Sampangiram</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Shantala Nagar">Shantala Nagar</button>
                    </div>
                </div><br />

                <div class="row align-items-center">
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Singasandra">Singasandra</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Varthuru">Varthuru</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Vijnana Nagar">Vijnana Nagar</button>
                    </div>
                </div><br />

                <div class="row align-items-center">
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="other">other</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Freeqay">Freeway</button>
                    </div>
                    <div class="col">
                        {/* <button type="button" class="btn btn-secondary btn-lg" onClick={handleClick} name="location" value="Vijnana Nagar">Vijnana Nagar</button> */}
                    </div>
                </div><br />
                
            </div>
            {/* <!--container--> */}
            {/* <div class="container">
                <div class="d-flex flex-row justify-content-between px-3 py-4 align-items-center">
                    <i class="fas fa-chevron-left"></i>
                    <span>Living Room - Samsung TV</span>
                    <i class="fas fa-ellipsis-h"></i>
                </div>

                <div class="d-flex flex-row justify-content-center">
                    <div class="menu-grid">
                        <div class="d-flex flex-column align-items-center">
                            <i class="fas fa-power-off active"></i>
                            <span class="label">Power</span>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <i class="fas fa-sign-in-alt"></i>
                            <span class="label">Input</span>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <i class="fas fa-cog"></i>
                            <span class="label">Control</span>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <i class="fas fa-bars"></i>
                            <span class="label">Menu</span>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <i class="fas fa-circle"></i>
                            <span class="label">Numeric</span>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <i class="fas fa-arrow-left"></i>
                            <span class="label">Back</span>
                        </div>
                    </div>
                </div>

                <div class="d-flex flex-row mt-4 justify-content-between px-2">
                    <div class="d-flex flex-column rounded-bg py-3 px-4 justify-content-center align-items-center">
                        <i class="fas fa-chevron-up py-3 control-icon"></i>
                        <span class="label py-3">Channel</span>
                        <i class="fas fa-chevron-down py-3 control-icon"></i>
                    </div>
                    <div class="d-flex flex-column align-items-center">
                        <div class="d-flex flex-row grey-bg justify-content-center align-items-center">
                            <i class="fas fa-home p-3 home-icon"></i>
                        </div>
                        <span class="label">Home</span>
                    </div>
                    <div class="d-flex flex-column rounded-bg py-3 px-4 justify-content-center align-items-center">
                        <i class="fas fa-plus py-3 control-icon"></i>
                        <span class="label py-3">Volume</span>
                        <i class="fas fa-minus py-3 control-icon"></i>
                    </div>
                </div>

                <div class="mt-5 pt-4 position-relative d-flex flex-row justify-content-center align-items-center">
                    <div class="circle ok-inner position-absolute">
                        <span>OK</span>
                    </div>
                    <div class="circle ok-outer position-absolute"></div>
                    <i class="fas fa-caret-right position-absolute control-icon right"></i>
                    <i class="fas fa-caret-right position-absolute control-icon bottom"></i>
                    <i class="fas fa-caret-right position-absolute control-icon left"></i>
                    <i class="fas fa-caret-right position-absolute control-icon top"></i>
                </div>

                <div class="d-flex flex-row justify-content-between mt-5 pt-4 px-3">
                    <div class="d-flex flex-row grey-bg">
                        <i class="fas fa-ellipsis-h p-3 control-icon"></i>
                    </div>
                    <div class="d-flex flex-row grey-bg">
                        <i class="fas fa-volume-mute p-3 control-icon"></i>
                    </div>
                </div>
            </div> */}
        </Fragment>
    )
}

export default ControlPage;