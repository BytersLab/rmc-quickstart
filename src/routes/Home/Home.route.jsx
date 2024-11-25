import { Helmet } from "react-helmet-async";
import { Button } from "../../components/Button.comp.jsx";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="This is the Homepage" />
      </Helmet>
      <div>Hello from Home</div>
      <Button />
    </>
  );
}
