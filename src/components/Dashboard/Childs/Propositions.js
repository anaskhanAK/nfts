import React, { useEffect, useState } from 'react';
import { FetchingDataFromApi } from '../../../utils/Api';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const Propositions = () => {
    document.title = "NFTs - Propositions";

    const [proposition, setProposition] = useState([]);
    const [open, setOpen] = React.useState(true);

    const transactionDataFetching = async () => {
        try {
            const response = await FetchingDataFromApi('/proposition/read');
            console.log(response.data.proposition);
            setProposition(response.data.proposition);
        } catch (error) {
            console.error(error);
        } finally {
            setOpen(false);
        }
    }

    useEffect(() => {
        transactionDataFetching();

    }, []);

    return (
        <div className='client-content'>
            <div className='dashboard-heading'>
                <h2>Propositions</h2>
                <p>Hi, <span style={{ color: "#FF5B50" }}>{localStorage.getItem('walletAddress')}</span> Welcome back to #GENSLR Dashboard!</p>
            </div>

            <main className='transactions-main'>
                <div className='transactions-heading'>
                    <div className='account'><h4>ID</h4></div>
                    <div className='account'><h4>SELECTION DATE</h4></div>
                    <div className='account'><h4>WINNING</h4></div>
                    <div className='account'><h4>STATUS</h4></div>
                    <div className='account'><h4>APPROVED</h4></div>
                    <div className='account'><h4>PROPOSITION</h4></div>
                </div>
                <hr />

                {
                    proposition.length === 0 ? (
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    ) : (

                        proposition.map((item, index) => (
                            <div key={index}>
                                <div className='proposition-details'>
                                    <div className='account'>{item.id}</div>
                                    <div className='account'>{new Date(item.selectionDate).toDateString()}</div>
                                    <div className='account'>
                                        {item.status ? (
                                            <Button size="small" variant="outlined" color="primary">Active</Button>
                                        ) : (
                                            <Button size="small" variant="outlined" color="error">In-Active</Button>
                                        )}
                                    </div>
                                    <div className='account'>
                                        {item.winning ? (
                                            <Button size="small" variant="outlined" color="primary">Yes</Button>
                                        ) : (
                                            <Button size="small" variant="outlined" color="error">No</Button>
                                        )}
                                    </div>
                                    <div className='account'>
                                        {item.approved ? (
                                            <Button size="small" variant="outlined" color="primary">Approved</Button>
                                        ) : (
                                            <Button size="small" variant="outlined" color="error">Not-Approved</Button>
                                        )}
                                    </div>
                                    <div className='account'>
                                        <a href={item.proposition} download={`Proposition_${item.id}.pdf`}>
                                            <Button size="small" variant="outlined" color="primary">Download Propositions</Button>
                                        </a>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))

                    )
                }
            </main>
        </div>
    );
}

export default Propositions;