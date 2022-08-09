import './table.scss';
function Table({ data, header }) {
    return (<div className="responsive-table" >
        <table className="table">
            <thead>
                <tr>
                    {header.map((item, idx) => {
                        return (<th key={idx} scope='col'>
                            {item}
                        </th>)
                    })}
                </tr>
            </thead>
            <tbody>
            {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <img src="assets\images\people\p1.png" alt="" />
                                    {item.NAME}
                                </td>
                                <td>
                                    {item.ID}
                                </td>
                                <td>
                                    <img src="assets\images\icon1.png" alt="" />
                                   {item.AMOUNT}
                                </td>
                                <td>{item.CHANCE}</td>
                                <td>{item.GAME}</td>
                                <td>
                                    <img src="assets\images\icon1.png" alt="" />
                                    {item.PROFIT}
                                </td>
                            </tr>)
                    })}
            </tbody>
        </table>
    </div>);
}

export default Table;
