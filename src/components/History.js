import React from 'react';

const History = () => {
    return (
        <div id="history">
            <div className="row">
                <div className="nine columns main-col">
                    <h1> 01.History </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Tempore dolorum excepturi, pariatur dolore fuga perferendis 
                        mollitia deserunt a voluptas assumenda! Consequatur beatae qui 
                        dolorem tempora possimus accusantium, fugit eius quidem?
                    </p>
                </div>
            </div>
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1438201854309-ae9fb0935433?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1320&q=80" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1512219366879-c7aaaa6ed454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80" alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default History;