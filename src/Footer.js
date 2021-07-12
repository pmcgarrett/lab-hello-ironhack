function Footer() {
    return (
        <>
            <footer>
                <div>
                    {information("icon1.png", "Declarative", "React makes it painless to create interactive UIs")}
                </div>
                <div>
                    {information("icon2.png", "Components", "Build encapsulated components that manage their state")}
                </div>
                <div>
                    {information("icon3.png", "Single-Way", "A set of immutable values are passed to the component's")}
                </div>
                <div>
                    {information("icon4.png", "JSX", "Statically-typed, designed to run on modern browsers.")}
                </div>

            </footer>
        </>
    );
}

function information(image, title, para) {
    return (
        <>
            <img src={image} alt={image} />
            <h1>{title}</h1>
            <p>{para}</p>
        </>

    )
}

export default Footer;