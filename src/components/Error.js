import { useRouteError } from "react-router";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>OOPS!!!</h1>
            <h2>Something went wrong!!</h2>
            <b>{err.status}</b> : {err  .statusText}
        </div>
    )
}

export default Error;