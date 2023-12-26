import Header from "./header";
import Footer from "./footer";
import * as facilityService from "../service/facilityService"
import './home.css';
function Home() {
    return(
        <>
            <div className="container-fluid">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/img.png" className="d-block w-100"  />
                            <div className="carousel-cap">
                                <h1>FURAMA RESORT</h1>
                                <h1 className="text-center">MANAGEMENT</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img_1.png" className="d-block w-100" />
                            <div className="carousel-cap align-items-center">
                                <h1>FURAMA RESORT</h1>
                                <h1 className="text-center">MANAGEMENT</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img_2.png" className="d-block w-100" />
                            <div className="carousel-cap">
                                <h1>FURAMA RESORT</h1>
                                <h1 className="text-center">MANAGEMENT</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">

                        {facilityService.getAll().map((item,index) =>
                            <div className="col-md-4" key={index} >
                                <div className="card" >
                                    <img src={item.images} className="card-img-top" alt="images" id="ig"/>
                                    <div className="card-body">
                                        <b className="card-text">{item.name}</b><br/>
                                        <span className="price">Price: </span>
                                        <span className="money">{item.cost}</span><br/>
                                        <span className="price">Area:</span>
                                        <span className="money" style={{color:"black"}}>{item.area}m2</span><br/>
                                        <div className="d-flex justify-content-between" style={{marginTop: "10%"}}>
                                            <button type="button" className="btn btn-outline-warning"><i
                                                className="fa-solid fa-pen-to-square"></i></button>
                                            <button type="button" className="btn btn-outline-danger" ><i className="fa-solid fa-trash"/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                </div>
            </div>
        </>
    );
}
export default Home;