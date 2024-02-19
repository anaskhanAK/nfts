import React from 'react'
import { useLocation } from 'react-router-dom';

const TransDetails = () => {

    const location = useLocation();
    const selectedTransaction = location.state?.selectedTransaction;

    if (!selectedTransaction) {
        return <p>No transaction details available</p>;
    }

    return (
        <>
            <div className='client-content'>
                <div className='dashboard-heading'>
                    <h2>Transactions Details</h2>
                    <p>Hi,<span style={{ color: '#FF5B50' }}>{localStorage.getItem('walletAddress')}</span>. Welcome back to #GENSLR Dashboard!</p>
                </div>


                <div className="transaction-details">

                    <div className='details-container'>
                        <h3>Status</h3>
                        <p>This transaction was <span>{selectedTransaction.status.toLowerCase()}</span>, and validated in ledger
                            <span>{`${selectedTransaction.ledger_index}`}</span> on
                            <span>{`${new Date(selectedTransaction.date).toDateString()}`}</span></p>

                    </div>

                    <div className='details-container'>
                        <h3>Description</h3>
                        <p>The transaction's sequence number is <span>{`${selectedTransaction.sequence}`}</span></p>
                        <p>The payment is from <span>{`${selectedTransaction.account}`}</span> to <span>{`${selectedTransaction.destination}`}</span></p>
                        <p>It was instructed to deliver <span>{selectedTransaction.amount}</span> XRP</p>
                        <p>The actual amount delivered was <span>{selectedTransaction.amount}</span> XRP</p>
                    </div>


                    <div className='details-container'>
                        <h3>Transaction Cost</h3>
                        <p>Sending this transaction consumed <span>{`${selectedTransaction.fee}`} XRP</span></p>
                    </div>

                    <div className='details-container'>
                        <h3>Meta</h3>
                        <p>It affected <span style={{ color: '#FF5B50' }}>{selectedTransaction.affectedNodes.length} nodes</span> in the ledger:</p>
                        <h6>MODIFIED NODES</h6>
                        <p>It modified the AccountRoot node of
                            <span>{` ${selectedTransaction.affectedNodes[0].account}`}</span>
                        </p>
                        <p> * Balance <span>
                            {selectedTransaction.affectedNodes[0].previousBalance < selectedTransaction.affectedNodes[0].finalBalance ? 'increase' : 'decreased'}</span>
                            {" "}  by {' '}
                            <span>
                                {selectedTransaction.affectedNodes[0].previousBalance > selectedTransaction.affectedNodes[0].finalBalance ?
                                    -(Math.round((selectedTransaction.affectedNodes[0].previousBalance - selectedTransaction.affectedNodes[0].finalBalance) / 1000000) + selectedTransaction.fee)
                                    + ' XRP '
                                    : (selectedTransaction.affectedNodes[0].finalBalance - selectedTransaction.affectedNodes[0].previousBalance) / 1000000 + ' XRP '}
                            </span>
                            from {' '}
                            <span> X {(selectedTransaction.affectedNodes[0].previousBalance) / 1000000} </span>
                            to <span> X {(selectedTransaction.affectedNodes[0].finalBalance) / 1000000}
                            </span> XRP
                        </p>
                        <p>It modified the AccountRoot node of
                            <span>
                                {` ${selectedTransaction.affectedNodes[1].account}`}
                            </span>
                        </p>
                        <p> * Balance <span>{selectedTransaction.affectedNodes[1].previousBalance < selectedTransaction.affectedNodes[1].finalBalance ? 'increase' : 'decreased'}</span>
                            {" "} by {' '}
                            <span>
                                {selectedTransaction.affectedNodes[1].previousBalance > selectedTransaction.affectedNodes[1].finalBalance ?
                                    -(Math.round((selectedTransaction.affectedNodes[1].previousBalance - selectedTransaction.affectedNodes[1].finalBalance) / 1000000) + selectedTransaction.fee)
                                    + ' XRP ' : (selectedTransaction.affectedNodes[1].finalBalance - selectedTransaction.affectedNodes[1].previousBalance) / 1000000 + ' XRP '}
                            </span>
                            from {' '}
                            <span> X {selectedTransaction.affectedNodes[1].previousBalance > selectedTransaction.affectedNodes[1].finalBalance ?
                                (selectedTransaction.affectedNodes[1].finalBalance) / 1000000 : (selectedTransaction.affectedNodes[1].previousBalance) / 1000000} </span> XRP
                            to  <span> X {selectedTransaction.affectedNodes[1].finalBalance > selectedTransaction.affectedNodes[1].previousBalance ?
                                (selectedTransaction.affectedNodes[1].finalBalance) / 1000000 : (selectedTransaction.affectedNodes[1].previousBalance) / 1000000}</span> XRP
                        </p>
                    </div>



                </div>
            </div>
        </>
    )
}

export default TransDetails