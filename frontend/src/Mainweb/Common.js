import React from "react";
import "./Home.css";

function Common(props) {
  const { starting, middle, get, image } = props;
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row mt-10">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="wrapperHero">
                  <div className="col-md-6 pt-40 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column title">
                    <h1>
                      <strong> {starting} </strong>
                    </h1>
                    <h4 className="my-3">{middle}</h4>
                    <div className="mt-4">
                      <a href="" className="btn-get-started">
                        {get}
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img
                      src={image}
                      className="img-fluid animated"
                      alt="home img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="leftover"></div>
    </>
  );
}

export default Common;
