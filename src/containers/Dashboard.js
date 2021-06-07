import React from 'react';
import './Dashboard.css';
import BatchCard from '../components/BatchCard';
import CardClass from '../components/CardClass';
import CardTest from '../components/CardTest';
import CardHomework from '../components/CardHomework';
import img from '../images/Ellipse124.png';
import img1 from '../images/Vector.png';

const Dashboard = () => {
    return (
        <div className="dashboard">
        <div className="dashboardContainer" >
            <div className="left">
            <div className="left_name">
          <span><b>Batch Name | PHY_B1</b></span>
          <span className="left_icon"><i class="fas fa-edit"></i></span>
        </div>
        <div className="left_name">
          <span><img src={img} /> Marvin Mckinney</span>
          <span className="left_icon"><img src={img1} /></span>
        </div>
        <div className="left_name">
        <i class="fas fa-user-circle"></i>
        <span> 125 Students</span>
        </div>
        <div className="left_name">
        <i class="fas fa-clock"></i>
        <span> Upcoming &lt;Activity&gt;<br />Thu, 25th May <br /><b>
12:00 PM - 12:00 PM</b></span>
          <button className="left_icon_button left_icon">View</button>
        </div>
      
            </div>

            <div className="right">
            right
            </div>

        </div>

        <div className="activityContainer">
            <span>Activities | 26th Apr, 2020</span>
            <div className="line"></div>
            <button>+ Schedule Activity</button>
        </div>

        <div className="tableHeading">
            <span>MON</span>
            <span>TUE</span>
            <span>WED</span>
            <span>THU</span>
            <span>FRI</span>
            <span>SAT</span>
            <span>SUN</span>
        </div>

        <div className="tableContent">
            <div>
            <CardHomework />
            <CardClass />
            <CardClass />
            <CardClass />
            <CardTest />
            <CardTest />

            </div>
            <div>
            <CardHomework />
            <CardClass />
            <CardClass />
            <CardClass />
            </div>

            <div>
            <CardHomework />
            <CardTest />
            <CardTest />
            <CardHomework />
            <CardHomework />
            
            </div>
            <div>
            <CardClass />
            <CardClass />
            <CardTest />
            </div>

            <div>
            <CardHomework />
            <CardClass />
            <CardClass />
            <CardClass />
            <CardTest />
            <CardTest />
            </div>

            <div>
            <CardHomework />
            <CardClass />
            <CardTest />
            </div>

            <div>
            <CardClass />
            <CardClass />
            <CardClass />
            <CardTest />
            
            </div>
                
           
        </div>

        </div>
    )
}

export default Dashboard

