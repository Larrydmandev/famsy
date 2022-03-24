import React from "react";

function Carousel(params) {
    return(
        <section className="">
            <div className="row">
                <img src="./images/slider-bg.jpg" alt=""/>
            </div>
            <div className="row">
                <div id="carouselExampleCaptions" className="carousel slide main-carousel" data-bs-ride="carousel">
                    <div className="carousel-indicators" style={{position: 'absolute', top: '150%', right: '50%'}}>
                        <button type="button" style={{width: '20px', height: '20px', borderRadius: '100%'}} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" style={{width: '20px', height: '20px', borderRadius: '100%'}} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" style={{width: '20px', height: '20px', borderRadius: '100%'}} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel-caption2">
                                <h1 style={{fontSize: '70px'}} className="carousel-h1">Sale 20% off <br/> <span className="carousel-span">on Everything</span></h1>
                                <p style={{position: 'relative', left: '15%'}}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Asperiores consequuntur impedit saepe sint, harum <br/> adipisci porro aspernatur fugiat cum voluptate odit <br /> animi quo reiciendis amet alias enim illum culpa. Quae!
                                </p>
                                <button className="btn btn-danger" style={{position: 'relative', right: '25%'}}>Shop Now</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-caption2">
                                <h1 style={{fontSize: '70px', color: 'burlywood'}}>Buy Now</h1>
                                <p style={{position: 'relative', left: '15%'}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ullam, incidunt sapiente. Quas, neque sequi illo sit Lanre <br /> autem nisi in similique voluptate rerum, nemo ddev lars <br /> magnam tenetur est at, perspiciatis assumenda aliquid.
                               </p>
                                <button className="btn btn-danger" style={{position: 'relative', right: '25%'}}>Shop Now</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-caption2">
                                <h1 style={{fontSize: '70px', color: 'burlywood'}}>Lanre Dev</h1>
                                <p style={{position: 'relative', left: '15%'}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ullam <br /> veniam dolorum facilis ab ducimus quidem, officia, ratione enim <br /> quam velit accusamus pariatur alias accusantium atque larrylars <br /> asperiores. Exercitationem, aut? i coded dis macintosh dev andyroid
                               </p>
                                <button className="btn btn-danger" style={{position: 'relative', right: '25%'}}>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
           </div>
        </section>
    )
    
}

export default Carousel