import { Banner } from "./components/Banner/Banner";

export function App() {
  return (
    <>
      <Banner
        status="success"
        title="Success!"
        content="Your action was completed successfully."
      />
      <Banner status="info" title="Info!" />
      <Banner status="warning" title="Warning!" content="Please be cautious." />
      <Banner status="error" title="Error!" content="Something went wrong." />
    </>
  );
}

