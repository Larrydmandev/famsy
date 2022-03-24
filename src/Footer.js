import React from "react";

function Footer(params) {
    return(
        <section className="bg-light" style={{height: '60vh', marginTop: '10%'}}>
           <div className="row foot-row">
               <div className="col-3">
                   <div className="img-div">
                       <img src="./images/logo.png" className="foot-img" alt="" />
                   </div>
                   <div className="p-div">
                       <p><span className="foot-span">Address:</span> 28 White Tower, Street Name NYC, USA</p>
                       <p><span className="foot-span">Telephone:</span> +91 987 654 3210</p>
                       <p><span className="foot-span">Email:</span>wajuore456@gmail.com</p>
                   </div>
                </div>
               <div className="col-3 menu-foot">
                   <div>
                       <h3 className="foot-header">Menu</h3>
                   </div>
                   <div className="link-div">
                       <p><a href="#top">Home</a></p>
                       <p><a href="#top">About</a></p>
                       <p><a href="#top">Services</a></p>
                       <p><a href="#top">Testimonial</a></p>
                       <p><a href="#top">Blog</a></p>
                       <p><a href="#top">Contact</a></p>
                    </div>
                </div>
               <div className="col-3 menu-foot">
                   <div>
                       <h3 className="foot-header">Account</h3>
                   </div>
                   <div className="link-div">
                       <p><a href="#top">Account</a></p>
                       <p><a href="#top">Checkout</a></p>
                       <p><a href="#top">Login</a></p>
                       <p><a href="#top">Register</a></p>
                       <p><a href="#top">Shopping</a></p>
                       <p><a href="#top">Widget</a></p>
                    </div>
                </div>
               <div className="col-3 menu-foot menu-foot-1">
                   <div>
                       <h3 className="foot-header">Newsletter</h3>
                   </div>
                   <div className="">
                       <p>
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div>
                    <form>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer