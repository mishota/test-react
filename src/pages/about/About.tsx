import { Link } from "react-router-dom";
import styles from "./About.module.scss";
import { Tooltip } from "@mui/material";

const getData =  () => {
  const ids = [1, 2, 3, 4, 5];
  return ids;
};

const About = () => {

  const ids = getData();
  return (
    <div className={styles.container}>
      <Tooltip title="About">
        <div className={styles.title}>
          <h1>ABOUT</h1>
        </div>
        {/* <IconButto>
          <DeleteIcon />
        </IconButto> */}
      </Tooltip>
      <div className={styles.links}>
        {ids.map((elem) => (
          <div key={elem}>
            <Link to={`/about/${elem}`}>{elem}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;
