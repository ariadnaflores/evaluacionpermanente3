import React from 'react';
import './Gallery.css';
import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpg';
import foto3 from '../assets/foto3.jpg';
import foto4 from '../assets/foto4.jpg';
import foto5 from '../assets/foto5.jpg';


function Gallery(props) {
    return (
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <img src={foto1} className="d-block w-100" alt="..."/>
              <div className="container banner">
                <span>FINANCIAL PLANNING</span>
                <h1>TALENTED <br></br>SOLUTIONS</h1>
                <p>Lorem Ipsum is simply dummy text of the <br></br>printing and typesetting industry.</p>
                <button className='btnBanner'>GET STARTED NOW</button>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={foto2} className="d-block w-100" alt="..."/>
              <div className="container banner">
              <span>FINANCIAL PLANNING</span>
              <h1>TALENTED <br></br>SOLUTIONS</h1>
              <p>Lorem Ipsum is simply dummy text of the <br></br>printing and typesetting industry.</p>
              <button className='btnBanner'>GET STARTED NOW</button>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={foto3}className="d-block w-100" alt="..."/>
              <div className="container banner">
              <span>FINANCIAL PLANNING</span>
              <h1>TALENTED <br></br>SOLUTIONS</h1>
              <p>Lorem Ipsum is simply dummy text of the <br></br>printing and typesetting industry.</p>
              <button className='btnBanner'>GET STARTED NOW</button>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={foto4}className="d-block w-100" alt="..."/>
              <div className="container banner">
              <span>FINANCIAL PLANNING</span>
              <h1>TALENTED <br></br>SOLUTIONS</h1>
              <p>Lorem Ipsum is simply dummy text of the <br></br>printing and typesetting industry.</p>
              <button className='btnBanner'>GET STARTED NOW</button>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={foto5}className="d-block w-100" alt="..."/>
              <div className="container banner">
              <span>FINANCIAL PLANNING</span>
              <h1>TALENTED <br></br>SOLUTIONS</h1>
              <p>Lorem Ipsum is simply dummy text of the<br></br> printing and typesetting industry.</p>
              <button className='btnBanner'>GET STARTED NOW</button>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>
    );
}

export default Gallery;