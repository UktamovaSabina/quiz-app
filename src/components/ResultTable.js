import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/helper'

const ResultTable = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getServerData("http://localhost:7000/result", (res) => {
            setData(res)
        })
    })

    return (
        <div>
            <table>
                <thead className='table-header'>
                    <tr className='table-row'>
                        <td>Name</td>
                        <td>Attempts</td>
                        <td>Earn Points</td>
                        <td>Result</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        !data ?? <div>No data found</div>
                    }
                    {
                        data.map((d, i )=> (
                            <tr className='table-body' key={i}>
                                <td>{d?.username || ''}</td>
                                <td>{d?.attempts || 0}</td>
                                <td>{d?.points || 0}</td>
                                <td>{d?.achived || ''}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default ResultTable