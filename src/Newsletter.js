import React from "react";

function Newsletter(params) {
    return(
        <section className="news-sec">
            <div className="">
                <div style={{paddingTop: '5%'}}>
                    <h1 className="news-h1">Subscribe To Get Discount Offers</h1>
                    <p className="news-p">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad exercitationem
                    </p>
                    <form className="m-auto mt-5" style={{paddingLeft: '35%'}}>
                        <div className="mb-3 news-div">
                            <input type="email" placeholder="Enter Your Email" className="form-control rounded-pill w-50 h-50" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div style={{paddingLeft: '10%'}}>
                            <button type="submit" className="btn btn-danger rounded-pill w-25">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter