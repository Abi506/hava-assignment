import React from 'react';
import SideNavbar from '../sidenavbar/sidenavbar';
import './home.css';
import { Container } from 'react-bootstrap';

const data = [
    {
        text: "All Airports"
    },
    {
        text: "Indira Gandhi International Airport",
        country: "India",
        terminals: "3"
    },
    {
        text: "Dubai International Airport",
        country: "Dubai",
        terminals: 5
    },
    {
        text: "Heathrow Airport",
        country: "Italy",
        terminals: 3
    },
    {
        text: "Istanbul Airport",
        country: "Turkey",
        terminals: 5
    },
    {
        text: "Rajiv Gandhi International Airport",
        country: "India",
        terminals: "3"
    }
];

const Home = (props) => {
    const { tabs } = props;

    return (
        <div className='home-container'>
            <SideNavbar/>
            <Container>
                <div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h1>Airports</h1>
                    <button type='button' style={{backgroundColor:"Black",borderRadius:'12px',color:"white",paddingTop:"2px",paddingLeft:"10px",paddingRight:"10px"}}>+ Add</button>
                    </div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Airports</th>
                                <th>Country</th>
                                <th>Terminals</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((each, index) => (
                                <tr key={index}>
                                    <td><input type="checkbox" /></td>
                                    <td><h6>{each.text}</h6></td>
                                    <td>{each.country && <p>{each.country}</p>}</td>
                                    <td>{each.terminals && <p>{each.terminals}</p>}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default Home;
