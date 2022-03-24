import React from "react";

function Products(params) {
    return(
      <section style={{marginTop: '10%'}}>
          <h1 style={{textAlign: 'center'}} className="title1">Our <span style={{color: 'pink'}}> Products</span></h1>
            
            <div className="row">
                <div className="col-4">
                    <div className="card first-card" style={{width: '18rem', height: '100%'}}>
                        <div className="card-body product-card bg-light">
                            <img src="./images/p9.png" alt="" style={{marginTop: '10%'}} />
                            <p className="card-text" style={{textAlign: 'center', paddingTop: '10%'}}>Men's Shirt <span style={{paddingLeft: '30%'}}>$75</span> </p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                   <div className="card first-card" style={{width: '18rem', height: '100%'}}>
                        <div className="card-body product-card bg-light">
                            <img src="./images/p2.png" alt="" style={{marginTop: '10%'}} />
                            <p className="card-text" style={{textAlign: 'center', paddingTop: '10%'}}>Men's Shirt <span style={{paddingLeft: '30%'}}>$80</span> </p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                   <div className="card first-card" style={{width: '18rem', height: '100%'}}>
                        <div className="card-body product-card bg-light">
                            <img src="./images/p7.png" alt="" style={{marginTop: '10%'}}/>
                            <p className="card-text" style={{textAlign: 'center', paddingTop: '10%'}}>Women's Dress <span style={{paddingLeft: '30%'}}>$68</span> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{marginTop: '5%'}}>
                <div className="col-4">
                    <div className="card first-card" style={{width: '18rem', height: '100%'}}>
                        <div className="card-body product-card bg-light">
                            <img src="./images/p11.png" alt="" style={{marginTop: '10%'}} />
                            <p className="card-text" style={{textAlign: 'center', paddingTop: '10%'}}>Women's Dress <span style={{paddingLeft: '30%'}}>$68</span> </p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                   <div className="card first-card" style={{width: '18rem', height: '100%'}}>
                        <div className="card-body product-card bg-light">
                            <img src="./images/p9.png" alt="" style={{marginTop: '10%'}}/>
                            <p className="card-text" style={{textAlign: 'center', paddingTop: '10%'}}>Women's Dress <span style={{paddingLeft: '30%'}}>$68</span> </p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                   <div className="card first-card" style={{width: '18rem', height: '100%'}}>
                        <div className="card-body product-card bg-light">
                            <img src="./images/p6.png" alt="" style={{marginTop: '10%'}}/>
                            <p className="card-text" style={{textAlign: 'center', paddingTop: '10%'}}>Women's Dress <span style={{paddingLeft: '30%'}}>$68</span> </p>
                        </div>
                    </div>
                </div>
            <button className="btn btn-danger" style={{width: '20%', position:'relative', left: '41%', marginTop: '5%'}}>View All Products</button>
            </div>
      </section>

    )
}

export default Products