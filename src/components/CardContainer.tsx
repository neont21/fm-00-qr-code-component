import styles from './CardContainer.module.css';

interface CardContainerProps {
    readonly title: string;
    readonly content: string;
    readonly imagePath: string;
}

export default function CardContainer({ title, content, imagePath }: CardContainerProps) {
    return (
        <section className={styles.card}>
            <img className={styles.image} src={imagePath} alt="QR code" />
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{content}</p>
        </section>
    );
}