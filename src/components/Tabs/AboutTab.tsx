const AboutTab = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="mr-2">
                    <h2>NAME</h2>
                    <hr />
                    <p>Some name</p>
                    <br />
                </div>
                <div>
                    <h2>LOCATION</h2>
                    <hr />
                    <p>Some location</p>
                    <br />
                </div>
            </div>
            <h2>PROFESSIONAL SUMMARY</h2>
            <hr />
            <p>Some summary</p>
            <br />
            <h2>HOBBIES</h2>
            <hr />
            <p>Some hobby</p>
            <br />
            <h2>SKILLS</h2>
            <hr />
            <p><span>Progamming Language:</span> list them</p>
            <p><span>Frameworks:</span> list them</p>
            <p><span>Tools:</span> list them</p>
        </div>
    );
}

export default AboutTab;