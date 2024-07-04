function Header() {
    return (
        <ul>
            <li>
                This is the demo for <b>hateful language detection</b> using machine
                learning. The main purpose is education only and any negative
                language will <b>NOT be encouraged</b> at any platforms.
            </li>
            <li>
                The outcome are the results of 3 different AI models including:
                simple neural network, convolutional neural network (CNN) and
                BERT model. It is trained based on 150,000 comments dataset
                (English).
            </li>
            <li>
                Promp the text/ comment in placeholder to watch the evaluation.
            </li>
        </ul>
    );
}

export default Header;
