import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faUmbrellaBeach,faCameraRetro,faShip,faPersonSkiing,faShoppingCart,faSuitcaseMedical} from '@fortawesome/free-solid-svg-icons';
import './Section1.css'

const Section1 = () => {

    const cat2HeadingStyle = {
        fontSize: '1.4vw',
        marginLeft: '-0.8vw',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        marginTop: '5.6vw',
      };

    const cat1HeadingStyle = {
        fontSize: '1.4vw',
        marginLeft: '-0.8vw',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        marginTop: '6.28vw',
    };

    const cat3HeadingStyle = {
        fontSize: '1.4vw',
        marginLeft: '-0.8vw',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        marginTop: '5.8vw',
    };

    const cat4HeadingStyle = {
        fontSize: '1.4vw',
        marginLeft: '0.1vw',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        marginTop: '5.7vw',
    };

    const cat5HeadingStyle = {
        fontSize: '1.4vw',
        marginLeft: '-0.8vw',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        marginTop: '6.4vw',
    };

    const cat6HeadingStyle = {
        fontSize: '1.4vw',
        marginLeft: '-0.8vw',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        marginTop: '6vw',
    };



  return (
    
    <div class="section1">
        <div class="uppersection">

            <div class="location">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <i class="fas fa-map-marker-alt"></i>

            <ul class="location-link">
            <a href="#">Location</a>
            <i class="fas fa-chevron-down arrow"></i></ul>         
            {/*<ul class="subPerson">
                <li>Subcategory 1</li>
                <li>Subcategory 2</li>
                <li>Subcategory 3</li>
            </ul>*/}
            
            </div>

            <div class="your_category">
            <ul ><a href="">Category</a></ul>
            <i class="fas fa-chevron-down arrow"></i>
            {/* <ul class="subcategories">
                <li>Subcategory 1</li>
                <li>Subcategory 2</li>
                <li>Subcategory 3</li>
                </ul> */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <i class="far fa-star"></i>           
            </div>

            <div class="total_person">
            <ul class="category-link">
            <a href="#">Total Persons</a>
            <i class="fas fa-chevron-down arrow"></i></ul>         
            {/*<ul class="subPerson">
                <li>Subcategory 1</li>
                <li>Subcategory 2</li>
                <li>Subcategory 3</li>
            </ul>*/}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <i class="fas fa-users"></i>
            </div>
            
            <button className="calendar-button"><FontAwesomeIcon icon={faCalendar} className="icon" /> Book now</button>

        </div>
        <div class="middlesection">
            <div class="select_category">
                <h1>Select a Category</h1>
                <h2><br /> Lorem ipsum is simply dummy text of the printing industry.</h2>
            </div>
            <div class="SelectCategory">

                <div class="Cat1">
                <FontAwesomeIcon icon={faUmbrellaBeach} className="icon" />
                <h1 style={cat1HeadingStyle}>Beach Vacation</h1>
                <button class="Cat1_button">Explore</button>
                </div>

                <div class="Cat2">
                <FontAwesomeIcon icon={faCameraRetro} className="icon" />
                <h2 style={cat2HeadingStyle}>Excrusions</h2>
                <button class="Cat2_button">Explore</button>
                </div>

                <div class="Cat3">
                <FontAwesomeIcon icon={faShip} className="icon" />
                <h3 style={cat3HeadingStyle}>Cruises</h3>
                <button class="Cat3_button">Explore</button>
                </div>

                <div class="Cat4">
                <FontAwesomeIcon icon={faPersonSkiing} className="icon" />
                <h4 style={cat4HeadingStyle}>Alphine Skiing</h4>
                <button class="Cat4_button">Explore</button>
                </div>

                <div class="Cat5">
                <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                <h5 style={cat5HeadingStyle}>Shopping</h5>
                <button class="Cat5_button">Explore</button>
                </div>

                <div class="Cat6">
                <FontAwesomeIcon icon={faSuitcaseMedical} className="icon" />
                <h6 style={cat6HeadingStyle}>Health</h6>
                <button class="Cat6_button">Explore</button>
                </div> 

            </div>
        </div>
        
    </div>
  )
}

export default Section1