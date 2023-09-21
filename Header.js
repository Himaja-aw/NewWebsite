import React from "react";
import "./Header.css";
import logo from './img/logo.svg';

function Header() {
    return (
      <div className="Header">
        <div class="container">
			
                <nav class="navbar navbar-expand  bg-white sticky-top border-bottom ">
                    
                <ul class="navbar-nav mb-lg-0">
                    <div class="logo">
                       
                        <img class="image" src={logo} alt=""/>
                               
                    </div>

	            <li class="nav-item column-3">
				        <a class="nav-item" href="@">Services</a>
                    <div class="d-flex card dropdown-subnav">
                        <div class=" d-flex col">
                            <a class="nav-link" href="@">Applications</a>
                            <a class="nav-link" href="@">Artificial Intelligence</a>
                            <a class="nav-link" href="@">Business Process</a>
                            <a class="nav-link" href="@">Cloud</a>
                        </div>

                        <div class="d-flex col">
                            <a class="nav-link" href="@">Consulting</a>
                            <a class="nav-link" href="@">Cybersecurity</a>
                            <a class="nav-link" href="@">Data &amp; Analytics</a>
                            <a class="nav-link" href="@">Digital Experiences</a>
                        </div>
                        <div class="d-flex col">
                            <a class="nav-link" href="@">Engineering</a>
                            <a class="nav-link" href="@">Sustainability</a>
                        </div>
                    </div>
                </li>


                <li class="nav-item column-4">
                    <a class="nav-item" href="@">Industries</a>

                    <div class="d-flex card dropdown-subnav">
                
                        <div class="d-flex col ">
                            <a class="nav-link" href="@">Aerospace &amp; Defense</a>
                            <a class="nav-link" href="@">Automotive</a>
                            <a class="nav-link" href="@">Banking</a>
                            <a class="nav-link" href="@">Capital Markets</a>
                            <a class="nav-link" href="@">Communications</a>
                            <a class="nav-link" href="@">Consumer Electronics</a>
                            <a class="nav-link" href="@">Consumer Packaged Goods</a>	
                        </div>
        
                        <div class="d-flex col ">
                            <a class="nav-link" href="@">Education</a>
                            <a class="nav-link" href="@">Engineering Construction &amp; Operations</a>
                            <a class="nav-link" href="@">Healthcare</a>
                            <a class="nav-link" href="@">Industrial &amp; Process Manufacturing</a>
                            <a class="nav-link" href="@">Insurance</a>
                            <a class="nav-link" href="@">Life Sciences &amp; Pharma</a>
                        </div>

                        <div class="d-flex col ">
                            <a class="nav-link" href="@">Media &amp; Info Services</a>
                            <a class="nav-link" href="@">Medical Devices</a>
                            <a class="nav-link" href="@">Natural Resources</a>
                            <a class="nav-link" href="@">Network &amp; Edge Providers</a>
                            <a class="nav-link" href="@">Oil &amp; Gas</a>
                            <a class="nav-link" href="@">Platforms &amp; Software Products</a>
                            <a class="nav-link" href="@">Professional Services</a>
                        </div>
        
                        <div class="d-flex col ">
                            <a class="nav-link" href="@">Public Sector</a>
                            <a class="nav-link"href="@">Retail</a>
                            <a class="nav-link" href="@">Semiconductors</a>
                            <a class="nav-link" href="@">Transportation &amp; Services</a>
                            <a class="nav-link" href="@">Utilities</a>
                        </div>
                    </div>
                </li>
			
                <li class="nav-item column-1">
                    < a class="nav-item" href="@">Insights</a>
			
                <div class="d-flex card dropdown-subnav">
			
                    <div class="col">
                        <a class="nav-link" href="@">Featured Insights</a>
                        <a class="nav-link" href="@">From our CEO</a>
                        <a class="nav-link" href="@">Business Strategy</a>
                        <a class="nav-link" href="@">Digital Transformation</a>
                        <a class="nav-link" href="@">Sustainability</a>
                        <a class="nav-link" href="@">Technology Trends</a>	
                    </div>
                </div>
	            </li>
                
                <li class="nav-item column-3">
                    
                    <a class="nav-item" href="@">About-Us</a>
			
                <div class="d-flex card dropdown-subnav">
			
                    <div class="d-flex col ">
                        <a class="nav-link" href="@">About Us</a>
                        <a class="nav-link" href="@">Ambitions Realized</a>
                        <a class="nav-link" href="@">Analyst Reports</a>
                        <a class="nav-link" href="@">Awards and Recognitions</a>
                        <a class="nav-link" href="@">Events</a>
                        <a class="nav-link" href="@">Inclusion and Diversity</a>
                    </div>
                    <div class="d-flex col ">
                        <a class="nav-link" href="@">Investors</a>
                        <a class="nav-link" href="@">Lab45</a>
                        <a class="nav-link" href="@">Leadership</a>
                        <a class="nav-link" href="@">Locations</a>
                        <a class="nav-link" href="@">News</a>
                        <a class="nav-link" href="@">Partner Ecosystem</a>	
                    </div>

                    <div class="d-flex col ">
                        <a class="nav-link" href="@">Sustainability</a>
                        <a class="nav-link" href="@">The Story of Wipro</a>
                        <a class="nav-link" href="@">Privacy at Wipro</a>
                        <a class="nav-link" href="@">Supplier Diversity</a>
                        <a class="nav-link" href="@">Wipro Ventures</a>
                    </div>
                </div>
	            </li>

                <li class="nav-item column-0">
                        <a class="nav-item" href="@">Careers</a>
	            </li>

                <li class="nav-item column-0">
                        <a class="nav-item" href="@">Contact-Us</a>
	            </li>
				</ul>
			</nav>
 
		</div>	
        </div>	

    );
  }
   
  export default Header;

  