import React, { useEffect, useState } from 'react'
import { FetchingDataFromApi } from '../../../utils/Api'
import { useNavigate, useParams } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';

const Transactions = () => {
    document.title = "NFTs - Transactions";

    const navigate = useNavigate();
    const params = useParams();
    const [transaction, setTransaction] = useState([]);
    const [open, setOpen] = React.useState(true);

    const handleTransactionClick = (hash) => {
        const selectedTransaction = transaction.find(item => item.hash === hash);
        navigate(`/dashboard/transactions/${hash}/detailed`, { state: { selectedTransaction } });
    };
    const transactionDataFetching = async () => {
        try {
            const response = await FetchingDataFromApi('/wallet/transactions');
            setTransaction(response.data.transactions);
            console.log(transaction);
        }
        catch (error) {
            console.error(error);
            alert(`${error} Redirecting to Dashboard`);
            navigate('/dashboard');
        } finally {
            setOpen(false);
        }
    }
    useEffect(() => {
        transactionDataFetching();
    }, [params.hash])

    return (
        <>
            <div className='client-content'>
                <div className='dashboard-heading'>
                    <h2>Transactions</h2>
                    <p>Hi, <span style={{ color: '#FF5B50' }}>{localStorage.getItem('walletAddress')}</span>. Welcome back to #GENSLR Dashboard!</p>
                </div>
                <main className='transactions-main'>
                    <div className='transactions-heading'>
                        <div className='account'><h4>ACCOUNT</h4></div>
                        <div className='type'><h4>TYPE</h4></div>
                        <div className='status'><h4>STATUS</h4></div>
                        <div className='date'><h4>DATE</h4></div>
                    </div>
                    <hr />

                    {transaction.length === 0 ? (
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    ) : (
                        transaction?.map((item, index) => {
                            return (
                                <div key={index} onClick={() => handleTransactionClick(item.hash)} style={{ cursor: 'pointer' }}>
                                    <div className='transactions-heading' >
                                        <div className='account'>{item.account}</div>
                                        <div className='type'>{item.type}</div>
                                        <div className='status'>{item.status}</div>
                                        <div className='date'>{item.date}</div>
                                    </div>
                                    <div className='transactions-details'>
                                        <p>SEND</p>
                                        <b><p>{item.amount} </p></b>
                                        <p>XRP</p>
                                        <p>TO</p>
                                        <h3>{item.destination}</h3>
                                    </div>
                                </div>
                            )
                        })
                    )
                    }

                </main>
            </div>
        </>
    )
}
export default Transactions