import React from 'react'
import man from "../../assets/img/man.jpg";
import women2 from "../../assets/img/2woman.jpg";
import femalechef from "../../assets/img/femalechef.jpg";
import femalechef2 from "../../assets/img/femalechef2.jpg";

function HireACookSection() {
    return (
        <div className="hireACook">
        <div className="title">
          <div>
            <h1>Hire a Cook</h1>
            <p>
              Interactive activities you can do together, led by expert hosts.
            </p>
          </div>

          <button>Explore all</button>
        </div>
        <div className="grid-container">
          <div className="box box1">
            <img src={femalechef} />
            <div className="cookInfo">
              <p>May Lavish</p>
              <p className="text-muted">
                Specializes in Chinese, Thai and Intercontinental
              </p>
            </div>
          </div>
          <div className="box box2">
            <img src={femalechef2} />
            <div className="cookInfo">
              <p>Jane Doe</p>
              <p className="text-muted">Specializes in Bengali and Arabian.</p>
            </div>
          </div>
          <div className="box box3">
            <img src={man} />
            <div className="cookInfo">
              <p>John Doe</p>
              <p className="text-muted">Specializes in Mexican and Korean.</p>
            </div>
          </div>
          <div className="box box4">
            <img src={women2} />
            <div className="cookInfo">
              <p>Two Random women</p>
              <p className="text-muted">
                Specializes in Chinese, Thai and Intercontinental
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HireACookSection
