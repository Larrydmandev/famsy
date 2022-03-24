import React from "react";

function NewArrivals(params) {
    return(
        <section style={{marginTop: '5%'}}>
            <div className="row">
                <img src="./images/arrival-bg.png" alt="" style={{height: 'auto'}}/>
            </div>
            <div className="row main-arrivals">
               <h1>
                   New Arrivals
               </h1>
               <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequatur harum fugiat ut alias, excepturi nostrum, obcaecati ad minus pariatur perferendis suscipit beatae sit! Voluptatum a perferendis veritatis non ducimus!
               </p>
               <button className="btn btn-danger">Shop Now</button>
            </div>
        </section>
    )
}

export default NewArrivals