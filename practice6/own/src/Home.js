import React from 'react'
import "./Home.css"
import { TiBatteryLow, TiBatteryMid,TiBatteryHigh,TiBatteryFull } from "react-icons/ti";

export const Home = () => (
  <div>
    <p className="title">Introdction</p>
    <pre className="University"> <TiBatteryLow/>NTU(National Taiwan University </pre>
    <p className="date"> Taipei, Taiwan </p>
    <pre className="content">   M.S. in Biomedical Electronics and Bioinformatics </pre>
    <p className="date"> Aug. 2017 - Jan. 2020 </p>
    <ul>
        <li>The project was supported by higher education SPOUT project of the center for information and electronics technologies and passed the institutional review board (IRB).</li>
        <li>Cooperated with sleep clinic of National Taiwan University Hospital which make me learn clinic experience and statistical analysis from.</li>
        <li>Researcher for <h>"Diagnosing Obstructive Sleep Apnea Based on Ultrasound Functional Imaging of Tongue Muscle"</h>.</li>
        <ul>
            <li>Researched means of diagnosing different OSA severity by tongue muscle strain and auto-image processing using image similarity algorithm.</li>
            <li>Discovered trend that tongue strain can accurately for identifying severe OSA patients during tongue pressure measurement.</li>
        </ul>
    </ul>
    
    <pre className="University"> <TiBatteryMid/>CGU(Chang Gung University) </pre>
    <p className="date"> Taoyuan, Taiwan </p>
    <pre className="content">   B.S. in Electrical Engineering </pre>
    <p className="date"> Sep. 2013 - Jan. 2016 </p>
    <ul>
        <li>Got a scholarship for academic excellence awards twice and graduated from EE in the fourth lead.</li>
        <li>Researcher for <h>"Researcher for Effect of Ultrasound Frequency on the Nakagami Statistics of Human Liver Tissues"</h>.</li>
        <ul>
            <li>Researched means of assessing liver tissues (hepatic steatosis and fibrosis) by analysis of the backscattered statistics (Nakagami imaging).</li>
            <li>Improved the skill of making phantoms, measuring center frequency of transducer and ultrasound basic knowledge.</li>
            <li>The paper was published in 2017 on PLoS one.</li>
        </ul>
    </ul>
    
    <pre className="University"> <TiBatteryHigh/>ITTTI Vancouver </pre>
    <p className="date"> Vancouver, Canada </p>
    <pre className="content">   Study-Abroad Trip </pre>
    <p className="date"> Jul. 2014 - Aug. 2014 </p>
    <ul>
        <li>Improved the English skill of speaking, listening, writing and presenting.</li>
        <li>Be familiar with various cultures, sceneries, friends and widen my horizon.</li>
    </ul>
    
    <pre className="skill_title"> <TiBatteryFull/>Skill </pre>
    <pre className="skill_content">   Programming </pre>
    <ul>
        <li>Python, Open CV, C sharp, LaTeX, Matlab, Visual C sharp, Labview, Javascript(html, js, css)</li>
    </ul>
    <pre className="skill_content">   Language </pre>
    <ul>
        <li>English (fluent), Chinese (native)</li>
    </ul>
    
  </div>
)
