import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Hazards.css";
import jasonimg from "../../assets/img/jasonimg";
export default function Hazards() {
  return (
    <>
    <body>
      <Header />
      <div className="title-container">
        <div className="title-text">
        <h1 className="title">HAZARDS</h1>
        </div>
        <div className="title-img">
        <img src={jasonimg[6]}/> 
        </div>
      </div>
      <div className="hazards-body">
        <div className="hazards-container">
          <div class="hazards-items">
            <div className="hazards-item-text">
              <h2>MECHANICAL CONTAMINATION</h2>
              <p>
                This is the most obvious. The data of 17,000 space objects dates from 2015, and the reality will undoubtedly be higher. That's about 7,000 tons hanging over our heads like a sword of Damocles. Of these, about 100 fall to Earth each year.
                The ocean takes many of the impacts. Also unpopulated areas. The problem with this type of contamination is that only 6% of all objects are active. About 55% of the objects are junk traveling at tens of miles kilometers per hour.
              </p>
            </div>
            <div class="hazards-items-img">
              <img src={`hazard2.jpg`} />
            </div>
          </div>
          <div class="hazards-items">
            <div className="hazards-item-text">
              <h2>MAGNETIC CONTAMINATION</h2>
              <p>
                The radiation of technical origin generated by the cloud of objects in orbit is called “electromagnetic pollution”. It may not seem serious, but the truth is that it already affects radio communication by modifying the degree of ionization of the environment.
              </p>
            </div>
            <div class="hazards-items-img">
              <img src={`pureba.jpg`} />
            </div>
          </div>

          <div class="hazards-items">
            <div className="hazards-item-text">
              <h2>RADIOACTIVE CONTAMINATION</h2>
              <p>
                Perhaps it is the one that scares us the most because of its name. Some satellites make use of a few kilograms of radioactive substances. When falling back on the atmosphere it can be contaminated. If it is not burned on re-entry, then it is the soil that is contaminated. At the moment it is a minor problem, but let's imagine what would happen with more satellites.
              </p>
            </div>
            <div class="hazards-items-img">
              <img src={`hazard3.jpg`} />
            </div>
          </div>
          <div class="hazards-items">
            <div className="hazards-item-text">
              <h2>CHEMICAL CONTAMINATION</h2>
              <p>
                According to Nikoghosyan, the largest source of chemical pollution in the atmosphere appears during the release of rocket fuel. At the moment we do not know how these could work with electricity and without chemical waste, such as mobility at ground level.
                Of course, the researcher puts this contamination in its place. Compared to surface pollution , rocket pollution is derisory.</p>
            </div>
            <div class="hazards-items-img">
              <img src={`hazard4.jpg`} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      </body>
    </>
  );
};