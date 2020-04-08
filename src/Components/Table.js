import React, { Component } from 'react'
import './Background.css'
import data from "./output"; 

class Table extends Component {
    constructor(props) {
        super(props);
        var stats=[]
    }
    
    callAPI() {
        fetch("http://localhost:9000/scrape")
        .then(response => response.json())
        .then((jsonData) => {
            this.stats=jsonData
        })
        .catch((error) => {
        console.error(error)
        })
    }
    
    componentWillMount() {
        this.callAPI();
        console.log("from table : "+this.stats);
    }
    
    render() {
        return (
            <div>
                <table border="1"  align="center" className='stats'>
                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>Name of State / UT</th>
                            <th>Total Confirmed cases </th>
                            <th>Cured/Discharged/Migrated</th>	
                            <th>Death</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value,index) => {
                                return <tr key={index}>
                                    <td>{value[0]}</td>
                                    <td>{value[1]}</td>
                                    <td>{value[2]}</td>
                                    <td>{value[3]}</td>
                                    <td>{value[4]}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table
