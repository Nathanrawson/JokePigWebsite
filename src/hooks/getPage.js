import tokenCookie from '../components/GetCookie'
import axios from "axios";
import mlApi from '../apis/MlApi'
import React, { useState, useEffect } from 'react';

const GetPage = async ()  => {
console.log("testing")
   const GetPageData = async () => {
    try {
        var response = await axios({
            method: 'get',
            url: 'https://veiybapi.com/api/webisite/3fa85f64-5717-4562-b3fc-2c963f66afa6',//'https://mlapi20220310230105.azurewebsites.net/project',
            headers: {
                'Authorization':`bearer ${tokenCookie("access_token")}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return response;
        // try {
        //     console.log("testing")
        //     return await mlApi.get('api/webisite/3fa85f64-5717-4562-b3fc-2c963f66afa6', {
        //         headers: {
        //             'Authorization': `bearer ${tokenCookie}`,
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //     });
        //     console.log("testing");
        //     console.log("");
        
         
        } catch (err) {
            if (err.toString().includes('401')) {
                window.location.href = "/login";
            }
        };
    }
    return await GetPageData();
        // console.log(response)
        
};

export default GetPage;