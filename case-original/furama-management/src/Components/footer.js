function Footer() {
    return(
            <footer
                className="text-center text-lg-start text-dark"
                style={{backgroundColor:"#ADDCCF"}}>
                <section className="pt-1">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Furama Resort</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{width: "60px", backgroundColor: "#7C4DFF", height: "2px"}}
                                />
                                <p>
                                    Furama Resort is a premier base for exploring one of Asia's most exciting destinations. Just a short drive from Da Nang are four UNESCO World Cultural Heritage Sites
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Products</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{width: "60px", backgroundColor: "#7C4DFF", height: "2px"}}
                                />
                                <p>
                                    <a href="#" className="text-dark">MDBootstrap</a>
                                </p>
                                <p>
                                    <a href="#" className="text-dark">MDWordPress</a>
                                </p>
                                <p>
                                    <a href="#" className="text-dark">BrandFlow</a>
                                </p>
                                <p>
                                    <a href="#" className="text-dark">Bootstrap Angular</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{width: "60px", backgroundColor: "#7C4DFF", height: "2px"}}
                                />
                                <p>
                                    <a href="#" className="text-dark">Your Account</a>
                                </p>
                                <p>
                                    <a href="#" className="text-dark">Become an Affiliate</a>
                                </p>
                                <p>
                                    <a href="#" className="text-dark">Shipping Rates</a>
                                </p>
                                <p>
                                    <a href="#" className="text-dark">Help</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{width: "60px", backgroundColor: "#7C4DFF", height: "2px"}}
                                />
                                <p><i className="fas fa-home mr-3"></i> 103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son</p>
                                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 84-236-3847 333/888 * Fax: 84-236-3847 66</p>
                                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>
            </footer>
    )
}
export default Footer;