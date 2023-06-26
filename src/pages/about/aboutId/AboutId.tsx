import { Link, useParams } from "react-router-dom";
import styles from "./../About.module.scss";

type PropsType = {
  params: {
    id: string;
  };
};

// export const generateMetaData = async({ params: { id } }: PropsType) => {
//     return {
//         title: `meta ${id}`,
//     }
// }
const getData = (id: string) => {
  const ids = [id, 1, 2, 3, 4, 5];
  return ids;
};

const AboutId = () => {
  const { id } = useParams();
  const ids = getData(id ?? "1");

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>ID{id}</h1>
      </div>
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
export default AboutId;
