import { Buttons } from "~/shared/ui/buttons";
import { Typography } from "~/shared/ui/typography";

export const meta = () => {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
};

const Home = () => {
  return (
    <>
      <h1>hello</h1>
      <Buttons>world hello</Buttons>
      <Typography variant="body">hello</Typography>
    </>
  );
};

export default Home;
