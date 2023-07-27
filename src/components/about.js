import React from 'react'
import "./style/about.css";
export default function about() {
  return (
    <div>
          <section id="bigpicture2">
        <p>About Us</p>
    </section>
    <section id="group">
        <img src="Images/group.jpeg" alt="group"/>
        <div className="info">
            <h2>About Us</h2>
            <p>We, as a group of 4 have started this website on 16th November so as for
                 the betterment of BMSCE students for easy access to purschase any itms related to the college.
                This in turn ended in adding more and more items by looking at the active 
                users of the website. We are happy to deliver the necessary goods to the students 
                using this website.Thank you.</p>
        </div>
    </section>
    <h2 id="feat"> We Offer</h2>
    <section id ="features" >
            
        <div className="a1">
            <img src="Images/orderonline.png" alt="Online Order"/>
            <h6>Online Order</h6>
        </div>

        <div className="a2">
            <img src="Images/savemoney.png" alt="Save Money"/>
            <h6>Save Money</h6>
        </div>

        <div className="a3">
            <img src="Images/discount.png" alt="Discounts"/>
            <h6>Discounts</h6>
        </div>

        <div className="a5">
            <img src="Images/time.png" alt="Time Saving"/>
            <h6>Time Saving</h6>
        </div>
    </section>
    </div>
  )
}
