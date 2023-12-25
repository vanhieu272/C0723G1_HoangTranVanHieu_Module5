import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className="container-xxl bg-white p-0">
            {/*Spinner Start*/}
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem'}}  role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
             {/*Spinner End*/}

            {/*Header Start */}
            <div className="container-fluid bg-dark px-0">
                <div className="row gx-0">
                    <div className="col-lg-3 bg-dark d-none d-lg-block">
                        <Link to="home.html" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <h1 className=" m-0 text-primary text-uppercase text-align-center">Furama</h1>
                            <p>DaNang</p>
                        </Link>
                    </div>
                    <div className="col-lg-9">
                        <div className="row gx-0 bg-white d-none d-lg-flex">
                            <div className="col-lg-7 px-5 text-start">
                                <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                    <i className="fa fa-envelope text-primary me-2"></i>
                                    <p className="mb-0"> reservation@furamavietnam.com</p>
                                </div>
                                <div className="h-100 d-inline-flex align-items-center py-2">
                                    <i className="fa fa-phone-alt text-primary me-2"></i>
                                    <p className="mb-0">+012 345 6789</p>
                                </div>
                            </div>
                            <div className="col-lg-5 px-5 text-end">
                                <div className="d-inline-flex align-items-center py-2">
                                    <Link to="facebook.com" className="me-3" href=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="facebook.com" className="me-3" href=""><i className="fab fa-twitter"></i></Link>
                                    <Link to="facebook.com" className="me-3" href=""><i className="fab fa-linkedin-in"></i></Link>
                                    <Link to="facebook.com" className="me-3" href=""><i className="fab fa-instagram"></i></Link>
                                    <Link to="facebook.com" className="" href=""><i className="fab fa-youtube"></i></Link>
                                </div>
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                            <Link to="home.html" className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
                            </Link>
                            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <Link to="home.html" className="nav-item nav-link active">Trang chủ</Link>
                                    <Link to="service.html" className="nav-item nav-link">Dịch vụ đi kèm</Link>
                                    <Link to="room.html" className="nav-item nav-link">Dịch vụ phòng</Link>
                                    <Link to="customer.html" className="nav-item nav-link">Khách hàng</Link>
                                    <Link to="contact.html" className="nav-item nav-link">Hợp đồng</Link>
                                </div>
                                <Link to="https://www.facebook.com/dev.hisu/" className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Liên hệ đội ngũ phát triển<i className="fa fa-arrow-right ms-3"></i></Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
             {/*Header End */}
        </>
    )
}

export default Header;