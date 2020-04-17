import React, { Component } from 'react'
import styled from 'styled-components';
import './Home.css'
import { TiBatteryLow, TiBatteryMid, TiBatteryHigh, TiBatteryFull } from "react-icons/ti";


export const Home = () => (
    <>
     <div className = "title">Introduction</div>
     <div>
         <pre className = "University" ><TiBatteryLow/> NTU(National Taiwan University)</pre>
         <div className ="position_date" > 
              <p>Taipei, Taiwan <br/>
              Aug. 2017 - Jan. 2020 </p>
         </div>
         <pre className = "content">   M.S. in Biomedical Electronics and BioInformatics</pre>
         <ul className = "list">
             <li>The project was supported by higher education SPOUT project of the center for information and electronics technologies and passed theinstitutional review board (IRB).</li>
             <li>Cooperated with sleep clinic of National Taiwan University Hospital which make me learn clinic experience. </li>
             <li>Researcher for <h>Diagnosing Obstructive Sleep Apnea based on Ultrasound Functional Imaging of Tongue mucle</h>. </li>
             <ul>
                 <li>Researched means of diagnosing different OSA severity by tongue muscle strain and auto-image processing using image similarity algorithm. </li>
                 <li>Discovered trend that tongue strain can accurately for identifying severe OSA patients during tongue pressure measurement. </li>
             </ul>
         </ul>
     </div>
    <div>
         <pre className = "University"><TiBatteryMid /> CGU(Chang Gung University)</pre>
         <div className ="position_date" > 
              <p>Taoyuan, Taiwan <br />
              Sep. 2013 - Jan. 2016</p>
         </div>
         <pre className = "content">   B.S. in Electrical Engineering</pre>
         <ul className = "list">
             <li>Got a scholarship for academic excellence awards twice and graduated from EE in the sixth lead.</li>
             <li>Researcher for <h>Effect of Ultrasound Frequency on the Nakagami Statistics of Human Liver Tissues</h>.</li>
             <ul>
                  <li>Researched means of assessing liver tissues (hepatic steatosis and fibrosis) by analysis of the backscattered statistics (Nakagami imaging).</li>
                  <li>Improved the skill of making phantoms, measuring center frequency of transducer and ultrasound basic knowledge.</li>
                  <li>The paper was published in 2017 on PLoS one.</li>
             </ul>
         </ul>
     </div>
     <div>
         <pre className = "University"><TiBatteryHigh /> ITTTI Vancouver</pre>
         <div className ="position_date" > 
              <p> Vancouver, Canada <br />
              Jul. 2014 - Aug. 2014 </p>
         </div>
         <pre className = "content">   Study-Abroad Trip</pre>
         <ul className = "list">
             <li>Improved the English skill of speaking, listening, writing and presenting.</li>
             <li>Be familiar with various cultures, sceneries, friends and widen my horizon.</li>
         </ul>
     </div>
     
     <div>
         <pre className = "University1"><TiBatteryFull /> Skill</pre>
         <pre className = "content1">   Programming</pre>
         <ul>
             <li>Python, OpenCV, C sharp, visual C sharp, Latex, Matlab, Labview, Javascript</li>
         </ul>
         <pre className = "content1">   Languages</pre>
         <ul className = "list">
             <li>English (fluent), Chinese (native)</li>
         </ul>
     </div>
    </>

)