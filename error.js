import { useRouteError } from "react-router-dom";

const ErrorPage = () =>{
    const errorObj = useRouteError();
    const {status} = errorObj;
    const {statusText} = errorObj;
    console.log(errorObj);
    return(
        <div id="eroorContainer">
           <h1>OOPS....!!!!</h1>
           <h2>Eroor {status} {statusText}</h2>
        </div>
    );
}
export default ErrorPage;