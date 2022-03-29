import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Login.css'
import loginVisual from './Resume/pigImage1.png';
import veiybLogo from './Resume/pigImage1.png';
import { useForm } from "react-hook-form";
import UpdatePage from "../hooks/updatePage"
import getPage from '../hooks/getPage'

const AdminProfile = () => {
    const { register, handleSubmit } = useForm();

    const [page, setPage] = useState (null);

    if(page == null){
    const pageLoad = getPage();
    pageLoad.then(function(result){
        setPage(result);
        if(result != undefined){
        document.getElementById("ContentOne").innerText = result.data.contentOne;
        document.getElementById("ContentTwo").innerText = result.data.contentTwo;
        document.getElementById("ContentThree").innerText = result.data.contentThree;
        console.log(result);
        }
    });
}

    const navigateToLogin = () =>{
        window.location.href = "/login";
    }
    const onSubmit = async (data) => {
        var response = await UpdatePage(data, navigateToLogin);
        if(response != undefined)
        {
            window.location.replace("/")
        };
    }

    return (
        <div className="container" id="ProfileContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
         <div className='form-group'>
           <h1>Pig Admin</h1>
           <div>Website Landing Image</div>
           <input className="form-control image-select" name="LandingFile"{...register('LandingFile')} accept="image/png, image/gif, image/jpeg"  type="file"></input>        
           <div>About Pig cult content</div>
           <textarea id="ContentOne" className="form-control" name="ContentOne"{...register('ContentOne')} type="textarea"></textarea>
           <div>Pig Law content</div>
           <textarea id="ContentTwo" className="form-control" name="ContentOne"{...register('ContentTwo')} type="textarea"></textarea>
           <div>Pig History Content</div>
           <textarea id="ContentThree" className="form-control" name="ContentTwo"{...register('ContentThree')} type="textarea"></textarea>
           <div>Gallery images</div>
           <input className="form-control image-select"  name="GalleryFiles"{...register('GalleryFiles')} accept="image/png, image/gif, image/jpeg"  type="file" multiple></input> 
           <button className="submit btn btn default" type="submit">Submit</button>
           <div>Submitting will override previous content you pig, image sizes and number of images added also effects load times</div>
           </div>
           </form>             
        </div>
    )
}

export default AdminProfile;