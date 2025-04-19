import { toast } from "react-toastify";
import Swal from "sweetalert2";

let hasError = false;
let serverAddress='http://192.168.1.111:8080/'
export {serverAddress};
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
    },
    buttonsStyling: true
});
function handleError400(error) {
    hasError = true

    if(error.message){
        swalWithBootstrapButtons.fire({
            title: "مشکلی رخ داده است",
            text: error.message,
            icon: "error"
        });
    }
    else if (error.messages){
        swalWithBootstrapButtons.fire({
            title: "چند مشکل بوجود آمده است",
            text: '',
            icon: "error"
        });  
        for(let message of error.messages){
            
            toast.error(message)
        }
    }
    
    return error
    
}
function handleError401(error) {
    hasError = true
    Swal.fire('بروز رسانی توکن...')
    setTimeout(() => window.location = '/refresh', 1000)
    return error
    
}
function handleError404(error) {
    swalWithBootstrapButtons.fire({
        title: "404 ارور ",
        text: 'داده ی مورد نظر یافت نشد',
        icon: "error"
    });
    return error
}
function handleError403(error) {

    hasError = true

    if(error.message){
        swalWithBootstrapButtons.fire({
            title: "مشکلی رخ داده است",
            text: error.message,
            icon: "error"
        });
    }
    else if (error.messages){
        swalWithBootstrapButtons.fire({
            title: "چند مشکل بوجود آمده است",
            text: '',
            icon: "error"
        });  
        for(let message of error.messages){
            console.log(message)
            toast.error(message)
        }
        

    }
    

}
function handleError406(error) {
    console.log('server===',error)
    hasError = true

    if(error.message!==undefined){
        swalWithBootstrapButtons.fire({
            title: "مشکلی رخ داده است",
            text: error.message,
            icon: "error"
        });
        toast.error(error.message)
    }
    else if (error.messages!==undefined){
        swalWithBootstrapButtons.fire({
            title: "چند مشکل بوجود آمده است",
            text: '',
            icon: "error"
        });  
        for(let message in error.messages){
            console.log(message)
            toast.error(message)
        }
        

    }
    return error
    

}
function handleError418(error){
    hasError = true

    if(error.message){
        swalWithBootstrapButtons.fire({
            title: "مشکلی رخ داده است",
            text: error.message,
            icon: "error"
        });
    }
    else if (error.messages){
        swalWithBootstrapButtons.fire({
            title: "چند مشکل بوجود آمده است",
            text: '',
            icon: "error"
        });  
        for(let message of error.messages){
            console.log(message)
            toast.error(message)
        }
        

    }
    return error
}
function handleError500() {
    hasError = true
    
    swalWithBootstrapButtons.fire({
        title: "Critical Error! ",
        text: 'Contact Support...',
        icon: "error"
    });
}
function handleErrorUnknown() {
    hasError = true

    swalWithBootstrapButtons.fire({
        title: "Unknown error occured...",
        text: 'Contact Support...',
        icon: "error"
    });

}

function handleTimeout(){

    Swal.fire('مجدد تلاش کنید')

}
async function handledFetch(url, options, onSuccessFunc = () => { }) {

    // let timeOut=setTimeout(()=>{return handleTimeout()},10000)

    return fetch(serverAddress+url, options)
        .then((response) => {
            // clearTimeout(timeOut)
            switch (response.status){
                case 200:
                    return response.json().then((res)=>onSuccessFunc(res))
                    
                case 201:
                    return response.json().then((res)=>onSuccessFunc(res))
                case 400:
                    return response.json().then((response)=>handleError400(response))
                case 401:
                    return handleError401(response)
                case 404:
                    return handleError404(response)
                case 403:
                    return response.json().then((response)=>handleError403(response))
                case 406:
                    return response.json().then((response)=>handleError406(response))
                case 418:
                    return response.json().then((response)=>handleError418(response))
                case 500:
                    return handleError500()
                    
                default:
                handleErrorUnknown()
                break;
            }


                
        })
        .then((responseData) => {

            return responseData;
        })
        .catch(error => console.warn(error));
    
}


/* 

        setIsLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Authorization", getCookie("accessToken"));

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };

        handledFetch(`${currentApi}/api/customers/all/`, requestOptions ,successfunction)
            .then((result) => {
                    //Do something with result
                }

                SetAllServerUsers(data);
                setUsers(data);
            })
            .catch((error) => console.error(error)).finally(
                () => { setIsLoading(false) }
            );
*/ 

export default handledFetch