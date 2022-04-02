
import tokenCookie from '../components/GetCookie'
import axios from "axios";
const UpdatePage = async (postData, loginRedirect) =>{
    var bodyFormData = new FormData();
    var filestest = [];

    if(postData.GalleryFiles.length > 0){
    for(var i = 0; i < postData.GalleryFiles.length; i++){
        bodyFormData.append('GalleryFIles', postData.GalleryFiles[i]);
    }
}
if(postData.LandingFile.length > 0){
    bodyFormData.append('LandingFile', postData.LandingFile[0]);
}
    bodyFormData.append('ContentOne', postData.ContentOne);
    bodyFormData.append('ContentTwo', postData.ContentTwo);
    bodyFormData.append('ContentThree', postData.ContentThree);
    bodyFormData.append('Id', '3fa85f64-5717-4562-b3fc-2c963f66afa6');
    //console.log(bodyFormData);
    try {
        var response = await axios({
            method: 'post',
            url: `https://veiybapi.com/api/website/3fa85f64-5717-4562-b3fc-2c963f66afa6`,//'https://mlapi20220310230105.azurewebsites.net/project',
            data: bodyFormData,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `bearer ${tokenCookie("access_token")}`
            }
        });
        return response;
    } catch (err) {
        if (err.toString().includes('401')) {
            loginRedirect();
        }
    };
}

export default UpdatePage;