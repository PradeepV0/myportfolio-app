import React from 'react'
import "./Skills.css";
import htmlImage from "../../Images/htmlImage.png";
import cssImage from "../../Images/cssIMg.jpg";
import JavaScriptImage from "../../Images/javaScriptIcon.png";
import BootStrapImage from "../../Images/BootStrapImage.png";
import GitHubIMage from "../../Images/GitHubIMage.png";
import GitCloneImage from "../../Images/GitCloneImage.png";
import ReactImage from "../../Images/ReactImage.png";
import ReduxImage from "../../Images/ReduxImage.png";
import NodeImage from "../../Images/NodeImage.png";
import MongoImage from "../../Images/mongoImg.png";
import AwsImage from "../../Images/AwsImage.png";

const Skills = () => {
  return (
    <div className='skills-main'>
      <div className='col-md-10'>
      <div className='row'>
         <div className='skills-imgs'>
        <div className='Skills-img'><img src={htmlImage} alt="htmlImage" /></div>
        <div className='Skills-img'><img src={cssImage} alt="cssImage" /></div>
        <div className='Skills-img'><img src={BootStrapImage} alt="BootStrapImage" /></div>
        <div className='Skills-img'><img src={JavaScriptImage} alt="JavaScriptImage" /></div>
        <div className='Skills-img'><img src={ReactImage} alt="ReactImage" /></div>
        <div className='Skills-img'><img src={ReduxImage} alt="ReduxImage" /></div>
        <div className='Skills-img'><img src={NodeImage} alt="NodeImage" /></div>
        <div className='Skills-img'><img src={MongoImage} alt="MongoImage" /></div>
        <div className='Skills-img'><img src={GitHubIMage} alt="GitHubIMage" /></div>
        <div className='Skills-img'><img src={GitCloneImage} alt="GitCloneImage" /></div>
        <div className='Skills-img'><img src={AwsImage} alt="AwsImage" /></div>
        </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default Skills;

