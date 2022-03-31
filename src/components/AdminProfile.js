import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Login.css'
import loginVisual from './Resume/pigImage1.png';
import veiybLogo from './Resume/pigImage1.png';
import { useForm } from "react-hook-form";
import UpdatePage from "../hooks/updatePage"
import getPage from '../hooks/getPage'
import Authenticate from '../auth/authenticate'
import DraftEditor from '../components/DraftEditor'



const AdminProfile = () => {
    Authenticate();
    const { register, handleSubmit } = useForm();
    const [page, setPage] = useState (null);
    const [contentOne, setContentOne] = useState (null);
    const [contentTwo, setContentTwo] = useState (null);
    const [contentThree, setContentThree] = useState (null);

    if(page == null){
    const pageLoad = getPage();
    pageLoad.then(function(result){
        setPage(result);
        if(result != undefined){
            setContentOne(result.data.contentOne);
            setContentTwo(result.data.contentTwo);
            setContentThree(result.data.contentThree);
        console.log(result);
        }
    });
}

    const navigateToLogin = () =>{
        window.location.href = "/login";
    }
    const onSubmit = async (data) => {
        data.ContentOne = contentOne;
        data.ContentTwo = contentTwo;
        data.ContentThree = contentThree;
        console.log(data);
        var response = await UpdatePage(data, navigateToLogin);

        if(response != undefined)
        {
            document.getElementById('SubmitBtn').disabled = true;
            document.getElementById('SubmitBtn').className += " spinner-border";
            window.location.replace("/")
        };
    }

    const getForm = () => {
        if(page == null || contentOne == null || contentTwo == null || contentThree == null){
            return (<div>Loading...</div>)
        }
        return (   
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label>Website Landing Image</label>
          <input className="form-control image-select" name="LandingFile"{...register('LandingFile')} accept="image/png, image/gif, image/jpeg"  type="file"></input>        
          <label>About Pig cult content</label>
          <DraftEditor content={contentOne.length > 0 ? contentOne: ""} setContent={setContentOne}/>
          {/* <textarea id="ContentOne" className="form-control" name="ContentOne"{...register('ContentOne')} type="textarea" value={page == null ? "" :page.data.contentOne}></textarea> */}
          <label>Pig Law content</label>
          <DraftEditor content={contentTwo.length > 0 ? contentTwo: ""} setContent={setContentTwo}/>
          {/* <textarea id="ContentTwo" className="form-control" name="ContentOne"{...register('ContentTwo')} type="textarea" value={page == null ? "" :page.data.contentTwo}></textarea> */}
          <label>Pig History Content</label>
          <DraftEditor content={contentThree.length > 0 ? contentThree: ""} setContent={setContentThree}/>
          {/* <textarea id="ContentThree" className="form-control" name="ContentTwo"{...register('ContentThree')} type="textarea" value={page == null ? "" :page.data.contentThree}></textarea> */}         
          <label>Gallery images</label>
          <input className="form-control image-select"  name="GalleryFiles"{...register('GalleryFiles')} accept="image/png, image/gif, image/jpeg"  type="file" multiple></input> 
          <button id="SubmitBtn" className="submit btn btn default" type="submit">Submit</button>
          <div>Submitting will override previous content you pig, image sizes and number of images added will also effects load times</div>
          </div>
          </form> );
    }

    return (
        <div id="ProfileContainer">
             <h1>Pig Admin</h1>
            <div className="container" >
           {getForm()}         
           </div>        
        </div>
    )
}

export default AdminProfile;