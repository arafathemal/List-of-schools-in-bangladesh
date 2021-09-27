import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAd} from '@fortawesome/free-solid-svg-icons';
import './ShowData.css';

const ShowData = (props) => {
    // console.log(props)
    const { name,budget, location, medium, img, levels, established, period } = props.data || {};
    const icon = <FontAwesomeIcon icon={faAd} />
    return (
        <div className="col-md-4">
            <div class="card" style={{ "width": "18rem;" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h4 class="card-title"><b>Name:</b> {name}</h4>
                    <p class="card-text"><b>Location:</b> {location}</p>
                    <p class="card-text"><b>Medium:</b> {medium}</p>
                    <p class="card-text"><b>Levels:</b> {levels}</p>
                    <p class="card-text"><b>Period:</b> {period}</p>
                    <h6 class="card-text"><b className="color">Establish Year:</b> {established}</h6>
                    <h6 class="card-text"><b className="color">Budget:</b> {budget}</h6>
                    <button
                        onClick={() => props.handleAddToData(props.data)}
                        className="btn btn-primary"> {icon} Added</button>
                </div>
            </div>
        </div>
    );
};

export default ShowData;