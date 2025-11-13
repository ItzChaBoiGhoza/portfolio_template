const CertificationTab = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div id="left" className="p-2">
                <h2>Certification name</h2>
                <h4>Issuer | Date</h4>
                <a href="#" className="float-right mr-10">LINK</a>
                <br />
            </div>
            <div id="right" className="p-2">
                <h2>Certification name</h2>
                <h4>Issuer | Date</h4>
                <a href="#" className="float-right mr-10">LINK</a>
                <br />
            </div>
        </div>
    );
}

export default CertificationTab;