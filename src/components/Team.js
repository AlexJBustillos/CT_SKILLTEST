import React from 'react';

const Team = () => {
    return (
        <div id="team">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#m1">Mountain 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#m2">Mountain 2</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane container fade" id="m1">
                    <h1>Schedule</h1>
                </div>
                <div className="tab-pane container fade" id="m2">
                    <h1>Schedule</h1>
                </div>
            </div>
        </div>
    )
}

export default Team;