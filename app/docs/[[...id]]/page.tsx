import styles from "./style.module.css";

const DocsPage = ({ params }) => {
    console.log(params);
    return <div className={styles.title}>DOc id is here </div>
}

export default DocsPage;