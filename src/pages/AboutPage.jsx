import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

export default function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>About - Electronics and Computer Science Club</title>
        <meta
          name="description"
          content="This is a small sneak-peak of our Electronics and Computer Science Club."
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      {<Outlet />}
    </div>
  );
}
