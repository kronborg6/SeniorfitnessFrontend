import './index.css';
import React from 'react';
import Video from '../images/production ID 5092620.mp4';
import { BsArrowDownShort } from "react-icons/bs";
import  imageStep1 from '../images/step1.jpg';

function Landing() {
  return (
    <div>
      <section className='hero'>
        <div className='hero__overlay'> 

        <video playsinline="playsinline" autoplay="autoplay" muted="muted" Loop="loop" Loading="Lazy" className='hero__video'>
          <source src={Video} type='video/mp4'/>
        </video>
        </div>

        <div className='hero__content h-100 container-custom position-relative hero__content-width'>
          <div className='d-flex h-100 align-items-center'>
            <div class="text-white">
              <h1 className='hero__heading fw-bold mb-4'>Fitness for Seniors.</h1>
              <p className='lead mb-4'>Don’t fret, level up your health & fitness.</p>
              <a href='#' className='mt-2 btn btn-lg btn-outline-light' role="button">
                Buy now
              </a>
            </div>
          </div>
        </div>
        
        <a href="#scroll-down" className='hero__scroll-btn'>
          Explore <div className='bi'>< BsArrowDownShort /> </div>
        </a>

      </section>
      
      <section className='steps steps--background'>
        <div className='container-custom'> 
      <a id="scroll-down" />

        <div class="row">
          <div className='col-12 col-sm-6 d-md-flex justify-content-md-center'>
            <img src={imageStep1} className="img-fluid pb-4 steps_section-thumbnail" alt="product" width="553" height="746" loading='lazy' />
          </div>
          <div className='col-12 col-sm-6 align-self-center justify-content-md-center'>
            <div className='steps__content-width'>
              <span>01</span>
              <h1 className='h2 mb-4'> The best out there</h1>
              <p className='mb-4'> dawuihawuikdahwydhyawgdhawgdhqgadhyuaghdg </p>
            </div>
          </div>
        </div>
        </div>
      </section>
    
      <section className='steps container-custom'>
      <a id="scroll-down" />

        <div class="row">
          <div className='col-12 col-sm-6 d-md-flex justify-content-md-center order-sm-1'>
            <img src={imageStep1} className="img-fluid pb-4 steps_section-thumbnail" alt="product" width="553" height="746" loading='lazy' />
          </div>
          <div className='col-12 col-sm-6 align-self-center justify-content-md-center'>
            <div className='steps__content-width'>
              <span>02</span>
              <h1 className='h2 mb-4'> Food machines</h1>
              <p className='mb-4'> dawuihawuikdahwydhyawgdhawgdhqgadhyuaghdg </p>
            </div>
          </div>
        </div>
      </section>

      <section className='steps steps--background'>
        <div className='container-custom'> 
      <a id="scroll-down" />

        <div class="row">
          <div className='col-12 col-sm-6 d-md-flex justify-content-md-center'>
            <img src={imageStep1} className="img-fluid pb-4 steps_section-thumbnail" alt="product" width="553" height="746" loading='lazy' />
          </div>
          <div className='col-12 col-sm-6 align-self-center justify-content-md-center'>
            <div className='steps__content-width'>
              <span>03</span>
              <h1 className='h2 mb-4'> Showers</h1>
              <p className='mb-4'> dawuihawuikdahwydhyawgdhawgdhqgadhyuaghdg </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className='bg-dark text-white py-4'>
        <div className='container-custom my-4'>
          <div className='row'>
            <div className='col-12 col-sm-4 mb-4'>
              <img src={imageStep1}  class="mb-4 img-fluid" alt="Training" width="441" height="248" loading="lazy" />
              <h3>Amazing equpiment</h3>
              <p>awduhauidhuawhdukawdhyjadyuagdyuhadyadyaukdh
                aukdhauhdhjahgdhagdhagdhgadhgadgahdh</p>
            </div>

            <div className='col-12 col-sm-4 mb-4'>
              <img src={imageStep1}  class="mb-4 img-fluid" alt="Training" width="441" height="248" loading="lazy" />
              <h3>Amazing equpiment</h3>
              <p>awduhauidhuawhdukawdhyjadyuagdyuhadyadyaukdh
                aukdhauhdhjahgdhagdhagdhgadhgadgahdh</p>
            </div>

            <div className='col-12 col-sm-4 mb-4'>
              <img src={imageStep1}  class="mb-4 img-fluid" alt="Training" width="441" height="248" loading="lazy" />
              <h3>Amazing equpiment</h3>
              <p>awduhauidhuawhdukawdhyjadyuagdyuhadyadyaukdhaukdha
                uhdhjahgdhagdhagdhgadhgadgahdh</p>
            </div>
          </div>
        </div>  
      </section>
    </div>
  );
}

export default Landing
