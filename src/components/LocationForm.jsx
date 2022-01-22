import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Alert } from "reactstrap";

const INITIAL_BODY = {
    location: "",
    time: ""
}

const LocationForm = () => {

    const [body, setBody] = useState(INITIAL_BODY);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBody(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitted..." + JSON.stringify(body));

        const url = `https://samzonlinecoding.herokuapp.com/api/service`;
        const response = await axios.post(url, body).catch(e => {
            swal(`Try again Later...`)
        });

        if(response.status === 200) {
            swal(`The Recomonded Speed is: ${response.data}.`);
        }
        console.log("Response: " + JSON.stringify(response.data));
    }

    return (
        <div className="form">
            <h2>Check Custom Input</h2><br />
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label htmlFor="formGroupExampleInput">Choose a Location</label>
                    <select name="location" vqlue={body.location} onChange={handleChange} class="form-control" id="formGroupExampleInput">
                        <option default>Choose...</option>
                        <option value="A Narayanapura">A Narayanapura</option>
                        <option value="Agaram">Agaram</option>
                        <option value="Banasavadi">Banasavadi</option>
                        <option value="Basavanpura">Basavanpura</option>
                        <option value="Bellanduru">Bellanduru</option>
                        <option value="Devasandra">Devasandra</option>
                        <option value="Dodda Nekkundi">Dodda Nekkundi</option>
                        <option value="Garudachar Playa">Garudachar Playa</option>
                        <option value="Hagadur">Hagadur</option>
                        <option value="HAL Airport">HAL Airport</option>
                        <option value="Hemmigepura">Hemmigepura</option>
                        <option value="Horamavu">Horamavu</option>
                        <option value="Hoysala Nagar">Hoysala Nagar</option>
                        <option value="HSR Layout">HSR Layout</option>
                        <option value="Hudi">Hudi</option>
                        <option value="J P Nagar">J P Nagar</option>
                        <option value="Jeevanbhima Nagar">Jeevanbhima Nagar</option>
                        <option value="K R Puram">K R Puram</option>
                        <option value="Kacharkanahalli">Kacharkanahalli</option>
                        <option value="Kadugodi">Kadugodi</option>
                        <option value="Konena Agrahara">Konena Agrahara</option>
                        <option value="Marathahalli">Marathahalli</option>
                        <option value="New Tippasandara">New Tippasandara</option>
                        <option value="Ramamurthy Nagar">Ramamurthy Nagar</option>
                        <option value="Sampangiram">Sampangiram</option>
                        <option value="Shantala Nagar">Shantala Nagar</option>
                        <option value="Singasandra">Singasandra</option>
                        <option value="Varthuru">Varthuru</option>
                        <option value="Vijnana Nagar">Vijnana Nagar</option>
                        <option value="other">other</option>
                    </select>
                </div><br />
                <div class="form-group">
                    <label htmlFor="formGroupExampleInput2">Enter Time in 24 Hrs format.</label>
                    <input type="text" class="form-control" name="time" value={body.time} id="formGroupExampleInput2" placeholder="Use . instead of :" onChange={handleChange} />
                </div><br />
                <input class="btn btn-outline-secondary" type="submit" value="Get Speed" />
            </form>
        </div>
    );
}

export default LocationForm;
