import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          Map Project keeps track of your adventures.
        </h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          odio fuga quam. Nobis deserunt voluptatibus, tempora molestiae,
          provident reprehenderit quisquam facilis maxime exercitationem vel
          fugit, velit laudantium iure numquam unde.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
