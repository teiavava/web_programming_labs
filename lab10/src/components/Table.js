export default function Table({header, data, onElementDelete}) {
    return <table style={{width:"100%"}}>
        <tr className="header" key="header">{header.map(head => <td>{head}</td>).concat(<td>Delete</td>)}</tr>
        {data.map((row, rowId) => <tr key={rowId}>
            {row.map((el, id) => <td key={id}>{el}</td>).concat(
                [<td>
                    <img onClick={()=>onElementDelete(rowId)} src="https://img.icons8.com/color/48/000000/delete-forever.png"/>
                </td>]
            )}
        </tr>)}
    </table>
}