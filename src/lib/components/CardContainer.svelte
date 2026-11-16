<script lang="ts">
    interface Props {
        title: string;
        content: string;
        imagePath: string;
    }

    const { title, content, imagePath }: Props = $props();
</script>

<main>
    <img src={imagePath} alt="QR code" />
    <h1>{title}</h1>
    <p>{content}</p>
</main>

<style>
    main {
        width: 320px;
        background-color: var(--white-color);
        padding: var(--spacing-200) var(--spacing-200) var(--spacing-500) var(--spacing-200);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        text-align: center;
        box-shadow: var(--shadow-card);
    }

    img {
        border-radius: 10px;
        margin-bottom: var(--spacing-300);
    }

    h1,
    p {
        padding: 0 var(--spacing-200);
        margin-bottom: var(--spacing-200);
    }
</style>
