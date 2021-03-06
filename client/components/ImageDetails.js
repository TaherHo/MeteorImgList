/**
 * Created by taho on 03.07.17.
 */
import React from 'react';

const ImageDetails = function (props) {
    return (
        <li className="media list-group-item">
            <div className="media-left">
                <img src={props.image.link} />
            </div>
            <div className="media-body">
                <h4 className="media-heading">
                    {props.image.title}
                </h4>
                <p>{props.image.description}</p>
            </div>
        </li>

    );
};

export default ImageDetails;