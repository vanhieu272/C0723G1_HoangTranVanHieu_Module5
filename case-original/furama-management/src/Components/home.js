import Header from "./header";
import Footer from "./footer";
import * as facilityService from "../service/facilityService"
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
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img_1.png" className="d-block w-100" />
                            <div className="carousel-cap">
                                <h1>FURAMA RESORT</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img_2.png" className="d-block w-100" />
                            <div className="carousel-cap">
                                <h1>FURAMA RESORT</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {facilityService.getAll().map((item,index) =>
                        <div className="col-md-4" key={index} >
                            <div className="card">
                                <img src={item.images} className="card-img-top" alt="images" id="ig"/>
                                <div className="card-body">
                                    <b className="card-text">{item.name}</b><br/>
                                    <span className="price">Giá chỉ từ: </span>
                                    <span className="money">{item.cost}</span><br/>
                                    <span className="price">Diện tích:</span>
                                    <span className="money" style={{color:"black"}}>{item.area}m</span><br/>
                                    <button type="button" className="btn btn-outline-info" style={{marginLeft:"60px"}}>Sửa</button>
                                    <button type="button" className="btn btn-outline-danger" style={{marginLeft:"100px"}}>Xoá</button>
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