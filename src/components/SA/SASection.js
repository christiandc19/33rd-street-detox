import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import "./SASection.css";

import { AiOutlineArrowRight } from "react-icons/ai";

const MenusSA = () => {
  return (
    <>

      <div className="substance-abuse-header container">
        <h1>33rd DETOX TREATMENT CENTER OFFERS VARIOUS SUBSTABCE ABUSE
          PROGRAMS
        </h1>
        <p>
          There are numerous options for addressing concerns related to
          substance use and addiction and each individual will have their own
          set of goals when engaging in treatment. Every person’s experience is
          different, and what has been effective for some people may not be
          effective for others. If you or someone you care about is struggling
          with alcohol, cannabis, or other substance use, find the right help
          for you below.
        </p>
      </div>



{/* Substance Abuse Thumbnails */}


 <div className="substance-abuse container">

      <div class="card sa-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg" alt="Alcoholism" loading="lazy" />
          <div class="card-body">
              <h5 class="card-title">Alcohol Addiction</h5>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/alcohol"><p>Learn More<span><AiOutlineArrowRight /></span></p>
                      </Link>
              </LinkRoll>
            </div>
          </div>
      </div>


      <div class="card sa-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg" alt="Cocaine Addiction" loading="lazy" />
          <div class="card-body">
              <h5 class="card-title">Cocaine Addiction</h5>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/cocaine"><p>Learn More<span><AiOutlineArrowRight /></span></p>
                      </Link>
              </LinkRoll>
            </div>
          </div>
      </div>

      <div class="card sa-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/heroin.jpg" alt="Heroin Addiction" loading="lazy" />
          <div class="card-body">
              <h5 class="card-title">Heroin Addiction</h5>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/heroin"><p>Learn More<span><AiOutlineArrowRight /></span></p>
                      </Link>
              </LinkRoll>
            </div>
          </div>
      </div>

      <div class="card sa-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/fentanyl.jpg" alt="Fentanyl Addiction" loading="lazy" />
          <div class="card-body">
              <h5 class="card-title">Fentanyl Addiction</h5>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/fentanyl"><p>Learn More<span><AiOutlineArrowRight /></span></p>
                      </Link>
              </LinkRoll>
            </div>
          </div>
      </div>


      <div class="card sa-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg" alt="Kratom Addiction" loading="lazy" />
          <div class="card-body">
              <h5 class="card-title">Kratom Addiction</h5>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/kratom"><p>Learn More<span><AiOutlineArrowRight /></span></p>
                      </Link>
              </LinkRoll>
            </div>
          </div>
      </div>


      <div class="card sa-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opiate.jpg" alt="Opiate Addiction" loading="lazy" />
          <div class="card-body">
              <h5 class="card-title">Opiate Addiction</h5>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/opiate"><p>Learn More<span><AiOutlineArrowRight /></span></p>
                      </Link>
              </LinkRoll>
            </div>
          </div>
      </div>

      <div class="card sa-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/mdma.jpg" alt="MDMA Addiction" loading="lazy" />
          <div class="card-body">
              <h5 class="card-title">MDMA Addiction</h5>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/mdma"><p>Learn More<span><AiOutlineArrowRight /></span></p>
                      </Link>
              </LinkRoll>
            </div>
          </div>
      </div>

      <div class="card sa-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/meth.jpg" alt="METH Addiction" loading="lazy" />
          <div class="card-body">
              <h5 class="card-title">METH Addiction</h5>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/meth"><p>Learn More<span><AiOutlineArrowRight /></span></p>
                      </Link>
              </LinkRoll>
            </div>
          </div>
      </div>

      <div class="card sa-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opioid.jpg" alt="opioid Addiction" loading="lazy" />
          <div class="card-body">
              <h5 class="card-title">Opioid Addiction</h5>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/opioid"><p>Learn More<span><AiOutlineArrowRight /></span></p>
                      </Link>
              </LinkRoll>
            </div>
          </div>
      </div>

      <div class="card sa-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/meth.jpg" alt="Oxycodone Addiction" loading="lazy" />
          <div class="card-body">
              <h5 class="card-title">Oxycodone Addiction</h5>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/oxycodone"><p>Learn More<span><AiOutlineArrowRight /></span></p>
                      </Link>
              </LinkRoll>
            </div>
          </div>
      </div>

      <div class="card sa-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/prescriptions.jpg" alt="Prescriptions Addiction" loading="lazy" />
          <div class="card-body">
              <h5 class="card-title">Prescriptions Addiction</h5>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/prescriptions"><p>Learn More<span><AiOutlineArrowRight /></span></p>
                      </Link>
              </LinkRoll>
            </div>
          </div>
      </div>

      <div class="card sa-card">
      <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg" alt="Xanax Addiction" loading="lazy" />
          <div class="card-body">
              <h5 class="card-title">Xanax Addiction</h5>
            <div className="card-btn">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/xanax"><p>Learn More<span><AiOutlineArrowRight /></span></p>
                      </Link>
              </LinkRoll>
            </div>
          </div>
      </div>

  </div>


    </>
  );
};

export default MenusSA;
