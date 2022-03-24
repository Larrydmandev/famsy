import React from "react";

function Cards(params) {
  return (
    <section className="card-section">
        <h1 style={{textAlign: 'center'}} className="title">Why Shop with Us</h1>
        <div className="row">
            <div className="col-4">
                <div className="card main-card" style={{width: '18rem', borderRadius: '10px'}}>
                    <div className="card-body">
                        <div>
                          <i className="fa-solid fa-truck" style={{fontSize: '45px', color: 'white', position: 'relative', left: '40%', marginBottom: '10%'}}></i>
                        </div>
                        <h5 className="card-title" style={{textAlign: 'center', color: 'white'}}>Card title</h5>
                        <p className="card-text" style={{textAlign: 'center', color: 'white'}}>
                            Some quick example text to build on the card title
                        </p>
                    </div>
                </div> 
            </div>   
            <div className="col-4">
                <div className="card main-card" style={{width: '18rem', borderRadius: '10px'}}>
                    <div className="card-body">
                        <div>
                          <i className="fa-brands fa-freebsd" style={{fontSize: '45px', color: 'white', position: 'relative', left: '40%', marginBottom: '10%'}}></i>
                        </div>
                        <h5 className="card-title" style={{textAlign: 'center', color: 'white'}}>Card title</h5>
                        <p className="card-text" style={{textAlign: 'center', color: 'white'}}>
                            Some quick example text to build on the card title
                        </p>
                    </div>
                </div> 
            </div>   
            <div className="col-4">
                <div className="card main-card" style={{width: '18rem', borderRadius: '10px'}}>
                    <div className="card-body">
                        <div>
                          <i className="fa-brands fa-apple-pay" style={{fontSize: '45px', color: 'white', position: 'relative', left: '40%', marginBottom: '10%'}}></i>
                        </div>
                        <h5 className="card-title" style={{textAlign: 'center', color: 'white'}}>Card title</h5>
                        <p className="card-text" style={{textAlign: 'center', color: 'white'}}>
                            Some quick example text to build on the card title
                        </p>
                    </div>
                </div> 
            </div>   
        </div>
    </section>
  );
}

export default Cards
