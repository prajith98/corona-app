import React, { Component } from 'react'
import './Background.css'

class Table extends Component {
    constructor(props) {
        super(props);
        this.data=[]
    }
    
    
    componentDidMount() {
        fetch(`https://api.covid19india.org/data.json`)
            .then(response => response.json())
            .then((jsonData) => {
                this.data= jsonData.statewise
            })
            .catch((error) => {
            console.error(error)
            })
    }
    render() {
        return (
            <div>
                <table border="1"  align="center" className='stats'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name of State / UT</th>
                            <th>Total Confirmed cases </th>
                            <th>Cured/Discharged/Migrated</th>	
                            <th>Death</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.data.map((value, index) => {
                                if(value.confirmed!=0&&index>0)
                                return (
                                    
                                   <tr key={index}>
                                      <td style={{textAlign : "right"}}>{index}</td>
                                      <td style={{textAlign : "center"}}>{value.state}</td>
                                      <td style={{textAlign : "right"}}>{value.confirmed}</td>
                                      <td style={{textAlign : "right"}}>{value.recovered}</td>
                                      <td style={{textAlign : "right"}}>{value.deaths}</td>
                                   </tr>
                                )
                             })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table
