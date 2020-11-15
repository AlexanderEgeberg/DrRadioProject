import Axios, { AxiosError, AxiosResponse } from "../../node_modules/axios/index";

interface IRecord {
    //https://drrestservice2020.azurewebsites.net/api/Record
    id: number,
    title: string,
    artist: string,
    duration: number,
    yearOfPublication: number
}

let baseUrl: string = "https://drrestservice2020.azurewebsites.net/api/Record";



new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.


    el: "#app",
    data: {
        recordDeleteId: undefined,
        recordPostId: undefined,
        recordGetId: undefined,
        recordData: "",
        allRecordData: [],
        deleteResponse: [],
        errorMessage: "",
        postFormData: {id: undefined, title: undefined, artist: undefined, duration: undefined, yearOfPublication: undefined},
    },
    methods: {

        //Calls a HTTP get method and returns as HTTP Response
        async getAllAsync() {
            try { return Axios.get<IRecord[]>(baseUrl) }
            catch (error: any) {
                this.errorMessage = error.message;
                alert(error.message)
            }
        },

        //creates response variable and assigns values to data.
        async getAll() {
            let response = await this.getAllAsync();
            this.allRecordData = response.data;
        },

        //Calls a HTTP get method by specific ID 
        getById(id: number) {
            let url: string = baseUrl + "/" + id
            Axios.get<IRecord>(url)
                .then((response: AxiosResponse<IRecord>) => {
                    console.log("test")
                    this.recordData = response.data
                })
                .catch((error: AxiosError) => {
                    this.errorMessage = error.message
                    alert(error.message) // https://www.w3schools.com/js/js_popup.asp
                })
        },

        //sends a HTTP post request
        async postAsync() {
            try {
                return Axios.post<IRecord>(baseUrl, this.postFormData)
            }
            catch (error: any) {
                this.errorMessage = error.message
                console.log("message" + error.message);
                alert(error.message)
            }
        },

        //Runs the PostAsync command
        async HTTPPost(){
          let response = await this.postAsync();
          //this.addStatus = "Status: " + response.status + ' ' + response.statusText;
          //this.addMessage = "Response data: " + JSON.stringify(response.data);  
        },

        //Sends a HTTP Delete request
        HTTPDelete(id: number) {
            let url: string = baseUrl + "/" + id
            Axios.delete<IRecord>(url)
                .then((response: AxiosResponse<IRecord>) => {
                    this.deleteResponse = response.data
                })
                .catch((error: AxiosError) => {
                    this.errorMessage = error.message
                    alert(error.message) // https://www.w3schools.com/js/js_popup.asp
                })
        },
    }
})