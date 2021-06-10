import React from "react";
import songSelection from './database';
import "./Footer.css"


function Footer() {

  return (
    <div className="footer">
      <footer class="py-2 bg-dark fixed-bottom">
        <div class="container">
          <div class="section">
              <div class="section img">
                <img src="Imagination_FtP.jpg" width="115" height="115"></img>
              </div>
              <div class="section content">
                <div class="section title">
                  Imagination
                </div>
                <div class="section descr">
                  Foster the People
                </div>
                <div class="section tags">
                  Tags: modern rock, pop, rock, indie, tenor/bass vocals
                </div>
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;