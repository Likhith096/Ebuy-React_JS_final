import React from 'react'
import "./style/contact.css";
export default function contact() {
  return (
    <div>
          <section id="bigpicture2">
        <p>Contact Us</p>
    </section>
    <section id="details">
        <div className="info">
            <h2>Get in Touch with Us</h2>
            <p>
                <i className="far fa-map"></i></p>
                <p>
                Basavanagudi
            </p>
            <p>
                <i className="far fa-envelope"></i></p>
                <p>
                ebuy@hotmail.com
            </p>
            <p>
                <i className="far fa-phone-alt"></i></p>
                <p>
                123456789
            </p>
        </div>
  <div classNameName="map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.481412110949!2d77.56294551139413!3d12.941017415493844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sBMS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1669905630503!5m2!1sen!2sin"
    width={750}
    height={450}
    style={{ border: '0' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        {/* <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.481412110949!2d77.56294551139413!3d12.941017415493844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sBMS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1669905630503!5m2!1sen!2sin" width="750" height="450" style={"border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"}></iframe></div> */}
    </section>
    <section id="rate">
        <form>
            <p>Write to Us</p>
            <input type="text" placeholder="Enter your Name"/>
            <input type="text" placeholder="Enter your Email"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button>Submit</button>
        </form>
        <div className="members">
            <div className="person">
                <a href=""><img src="Images/adnan.png" className="logo"/></a>
                <p>Adnan <br/>
                    2nd Year<br/>
                    Contact No.:7985910740
                </p>
            </div>
            <div className="person">
                <a href=""><img src="Images\likhith.jpeg" className="logo"/></a>
               
                <p>Likhith<br/>
                    2nd Year<br/>
                    Contact No.:8660486877
                </p>
            </div>
            <div className="person">
                <a href=""><img src="Images\rajesh.jpeg" className="logo"/></a>
               
                <p>Rajesh<br/>
                    2nd Year<br/>
                    Contact No.:8317439818
                </p>
            </div>
            <div className="person">
                <a href=""><img src="Images\manav.jpeg" className="logo"/></a>
           
                <p>Manav<br/>
                    2nd Year<br/>
                    Contact No.:9986525002
                </p>
            </div>


        </div>
    </section>
    </div>
  )
}
