import CardContainer from './components/CardContainer';
import qrCodeImage from '../images/image-qr-code.png';

export default function App() {
    return (
        <>
            <main>
                <CardContainer
                    title="Improve your front-end skills by building projects"
                    content="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
                    imagePath={qrCodeImage}
                />
            </main>
            <footer className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
                Coded by <a href="https://github.com/neont21">Joowon Jung</a>.
            </footer>
        </>
    );
}