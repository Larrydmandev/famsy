import React from "react";

function OtherCarousel(params) {
    return(
       <section style={{paddingTop: '10%'}}>
            <h1  className="title1 car-h1">Customer's Testimonial</h1>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                       <img src="./images/client.jpg" className="rounded mx-auto d-block rounded-circle carousel-img"  alt="..."/>
                       <div className="car-div">
                            <h3>Anna Trevor</h3>
                            <h5 className="text-muted">Customer</h5>
                            <p className="car-p">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae magnam labore similique tempora repudiandae incidunt. Sapiente repellendus recusandae nostrum cumque ratione facilis, autem in, accusantium nulla ad numquam. Temporibus, accusamus.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                       <img src="./images/client.jpg" className="rounded mx-auto d-block rounded-circle carousel-img" alt="..."/>
                       <div className="car-div">
                            <h3>Anna Trevor</h3>
                            <h5 className="text-muted">Customer</h5>
                            <p className="car-p">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae magnam labore similique tempora repudiandae incidunt. Sapiente repellendus recusandae nostrum cumque ratione facilis, autem in, accusantium nulla ad numquam. Temporibus, accusamus.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./images/client.jpg" className="rounded mx-auto d-block rounded-circle carousel-img" alt="..."/>
                        <div className="car-div">
                            <h3>Anna Trevor</h3>
                            <h5 className="text-muted">Customer</h5>
                            <p className="car-p">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae magnam labore similique tempora repudiandae incidunt. Sapiente repellendus recusandae nostrum cumque ratione facilis, autem in, accusantium nulla ad numquam. Temporibus, accusamus.
                            </p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
       </section>

    )
}

export default OtherCarousel