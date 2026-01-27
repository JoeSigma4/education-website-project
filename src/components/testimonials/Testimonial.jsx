import { useState, useRef } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png"
import user2 from "../../assets/user-2.png"
import user3 from "../../assets/user-3.png"
import user4 from "../../assets/user-4.png"

function Testimonial() {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50 ) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

       const slideBackward = () => {
        if (tx < 0 ) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
  return (
    <div className="testimonials">
       <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
         <ul ref={slider}>
            <li>
            <div className="slide">
               <div className="user-info">
                  <img src={user1} alt="" />
                  <div>
                     <h3>John Doe</h3>
                     <p>CEO, Tech Solutions</p>
                  </div>
               </div>
               <p className="user-text">"This is an amazing service. I've been using it for a while now and it has helped me tremendously."</p>
            </div>
            </li>
            <li>
            <div className="slide">
               <div className="user-info">
                  <img src={user2} alt="" />
                  <div>
                     <h3>Jane Smith</h3>
                     <p>Marketing Director, Brand Inc.</p>
                  </div>
               </div>
               <p className="user-text">"I love how easy this is to use. It's made my job so much easier."</p>
           </div>            
           </li>
            <li>
             <div className="slide">
               <div className="user-info">
                  <img src={user3} alt="" />
                  <div>
                     <h3>Michael Johnson</h3>
                     <p>Product Manager, Innovate Co.</p>
                  </div>
               </div>
               <p className="user-text">"The quality of the product is outstanding. Highly recommended!"</p>
               </div>
            </li>
            <li>
            <div className="slide">
               <div className="user-info">
                  <img src={user4} alt="" />
                  <div>
                     <h3>Sarah Williams</h3>
                     <p>Designer, Creative Studio</p>
                  </div>
               </div>
               <p className="user-text">"I've tried many similar services, but this one stands out for its user-friendly interface."</p>
    
           </div>
         </li>
         </ul>

      </div>
    </div>
  )
}

export default Testimonial
