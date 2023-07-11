import React from "react";

const Contact = () =>{
    return(
        <>
            <div className="my-3">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                        
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Full Name</label>
                            <input type="text" 
                            class="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Phone</label>
                            <input type="number" 
                            class="form-control" 
                            id="exampleInputEmail1"
                             aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" 
                            class="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        
                        <button type="submit" class="btn btn-outline-primary">Submit</button>
                        
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;