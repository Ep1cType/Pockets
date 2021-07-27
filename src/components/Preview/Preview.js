import styles from './Preview.module.scss';

// TODO: Удалить компонент перед началом разработки проекта
const Preview = () => {
  return (
    <div className={styles.preview}>
      <h1>
        <a href="https://sibdev.pro" rel="noopener noreferrer" target="_blank">
          Sibdev
        </a>
      </h1>
      <h2>Практика 2021</h2>
    </div>
  );
};

export default Preview;
