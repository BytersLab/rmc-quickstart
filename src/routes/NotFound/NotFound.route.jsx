import { Helmet } from "react-helmet-async";

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Error</title>
      </Helmet>
      <h1>404 Page not Found</h1>
      <p>It looks like you are search....</p>
    </>
  );
}
