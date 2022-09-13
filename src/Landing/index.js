import './index.css';
import React from 'react';
import Video from '../images/production ID 5092620.mp4';
import { BsArrowDownShort } from "react-icons/bs";
import  imageStep1 from '../images/step1.jpg';
import  imageStep2 from '../images/step2.jpg';
import  imageStep3 from '../images/step3.jpg';
import  profile1 from '../images/profile1.jpg';
import  profile2 from '../images/profile2.jpg';
import  profile3 from '../images/profile3.jpg';



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
              <h1 className='h2 mb-4'> Weight Training</h1>
              <p className='mb-4'> From bodybuilding to powerlifting and everything in between, the Senior Fitness has the equipment to help you reach your goals. With dumbells up to 150lbs, 7 squat racks, 5 deadlift platforms, 2 competition benches, and a variety of plate loaded and pin loaded machines, we have everything you need.</p>
            </div>
          </div>
        </div>
        </div>
      </section>
    
      <section className='steps container-custom'>
      <a id="scroll-down" />

        <div class="row">
          <div className='col-12 col-sm-6 d-md-flex justify-content-md-center order-sm-1'>
            <img src={imageStep2} className="img-fluid pb-4 steps_section-thumbnail" alt="product" width="553" height="746" loading='lazy' />
          </div>
          <div className='col-12 col-sm-6 align-self-center justify-content-md-center'>
            <div className='steps__content-width'>
              <span>02</span>
              <h1 className='h2 mb-4'> General Fitness</h1>
              <p className='mb-4'> If your goals are to improve your overall health and wellness, we have everything you need.  We have cardio equipment spanning two floors including 8 stepmills, 15+ treadmills, row machines, exercise bikes, spin bikes, ellipticals, arc trainers and even a Jacob’s Ladder. In addition to cardio equipment, we have stretching areas with mats, foam rollers, bands, light weights, and much more. </p>
            </div>
          </div>
        </div>
      </section>

      <section className='steps steps--background'>
        <div className='container-custom'> 
      <a id="scroll-down" />

        <div class="row">
          <div className='col-12 col-sm-6 d-md-flex justify-content-md-center'>
            <img src={imageStep3} className="img-fluid pb-4 steps_section-thumbnail" alt="product" width="553" height="746" loading='lazy' />
          </div>
          <div className='col-12 col-sm-6 align-self-center justify-content-md-center'>
            <div className='steps__content-width'>
              <span>03</span>
              <h1 className='h2 mb-4'> Functional Training</h1>
              <p className='mb-4'> With 60 feet of turf with a sled, stackable plyometric boxes, weighted medicine balls, battle ropes, squat racks, and deadlift platforms our functional training room has all the equipment you need to take your training to the next level. </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className='bg-dark text-white py-4'>
        <div className='container-custom my-4'>
          <div className='row'>
            <div className='col-12 col-sm-4 mb-4 d-flex justify-content-center' >
              <figure class="figure  text-center">
              <img src={profile3}  class="mb-4 img-fluid custom-img" alt="Training"   loading="lazy" />
              <figcaption class="figure-caption text-right">Senior Fitness instructor</figcaption>
              </figure>
            </div>

            <div className='col-12 col-sm-4 mb-4 d-flex justify-content-center'>
              <figure class="figure  text-center">
              <img src={profile1}  class="mb-4 img-fluid custom-img" alt="Training"  loading="lazy" />
              <figcaption class="figure-caption text-right">Senior Fitness Owner</figcaption>
              </figure>
            </div>

            <div className='col-12 d-flex col-sm-4 mb-4 d-flex justify-content-center'>
            <figure class="figure  text-center">
              <img src={profile2}  class="mb-4 img-fluid custom-img" alt="Training"  loading="lazy" />
              <figcaption class="figure-caption text-right">Senior Fitness Administrator</figcaption>
            </figure>
            </div>
          </div>
        </div>  
      </section>
    </div>
  );
}

export default Landing
