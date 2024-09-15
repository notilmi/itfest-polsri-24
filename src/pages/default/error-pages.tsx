import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <div id="error-page" className="text-center">
      <h1>Oops!</h1>
      <h1>Anda Nyasar!1!!1!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Error: {error.statusText || error.message}</i>
      </p>
    </div>
    </div>
  );
};

export default ErrorPage;
