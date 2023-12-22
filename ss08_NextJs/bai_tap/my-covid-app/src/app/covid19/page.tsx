import React from 'react';
import axios from "axios";
function covid19(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [covid, setCovid] = React.useState({});
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        getCovidInfo();
    }, []);

    const getCovidInfo = async () => {
        let res = await axios.get("http://localhost:8080/posts");
        setCovid(res.data);
    };

    if (!covid) {
        return null;
    }

    return (
        <>
            <div className="container">
                <h1>Vietnamese Covid information</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Confirmed</th>
                        <th scope="col">Active</th>
                        <th scope="col">Recorved</th>
                        <th scope="col">Deaths</th>
                    </tr>
                    </thead>
                    <tbody>
                    {covid.map(item => (
                        <tr key={item.id}>
                            <th scope="row">1</th>
                            <td>{new Date(item.Date).toLocaleDateString()}</td>
                            <td>{item.Confirmed}</td>
                            <td>{item.Active}</td>
                            <td>{item.Deaths}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default covid19;