import React from 'react';
import '../sidebarlayout.css';

const Documentation = () => {
    document.title = "NFTs - Documentation";

    return (
        <>
            <main className='client-content'>
                <div className='dashboard-heading'>
                    <h2>Documentation</h2>
                    <p>Hi, <span style={{ color: '#FF5B50' }}>{localStorage.getItem('walletAddress')}</span> Welcome back to #GENSLR Dashboard!</p>
                </div>
                <div className='documentation-main'>

                    <div className='documentation-inner'>
                        <h4 style={{ color: '#FF5B50', textAlign: 'center' }}>The #GENSLR Project</h4>
                        <h4 style={{ color: '#FF5B50' }}>What is the #GENSLR Project</h4>

                        {/* <h4 style={{ color: '#FF5B50' }}>Project</h4> */}
                        <p>The #GENSLR Project is a meme-utility dedicated to being useful, profitable, and beneficial to its holders.
                            By ensuring  utility, It is the goal of The #GENSLR Project to be worthy of diamond hands.
                        </p>
                        <p>The time of the traditional meme coin has passed. Even when one looks at the meme coins
                            of previous years those that have survived did so because they evolved. Meme coins must
                            now offer more than just a fun community or a $1.00 dream. Hopium in and of itself should
                            no longer be acceptable as a reason to ape into a meme project. Instead, in addition to the
                            traditional offerings meme coins must also offer utility. This utility should ensure the meme
                            coin is useful, profitable, and beneficial to its holders. This new generation of meme coins
                            should strive to be meme-utilities and worthy of the diamond hands that hold them. </p>
                        <p>
                            The #GENSLR Project is a meme-utility that is focused on your financial future and security.
                            Beyond providing a store of value via the $gry token (a utility token used to acquire items in
                            The #GENSLR Project ecosystem), The #GENSLR Project aims to use NFTs to provide $gry
                            token holders with real world value and incentives. Moreover, it is also the goal of The
                            #GENSLR Project to determine if you are a 'Security'.
                        </p>
                        <h4 style={{ color: '#FF5B50' }}>Utility</h4>
                        <div style={{ marginLeft: 30 }}>
                            <div>
                                <h5 style={{ color: '#FF5B50' }}>The #GENSLR Project NFT</h5>
                                <p>
                                    Every wallet holding <span style={{ color: '#FF5B50' }}>$gry</span> tokes will receive one <span style={{ color: '#FF5B50' }}>#Genslr NFT</span> with
                                    fixed benefits.
                                </p>
                                <p>
                                    Raffle every month winning #Genslr NFT holders gets <span style={{ color: '#FF5B50' }}>1000 USD</span> (sent via stable coin).
                                </p>
                                <p>
                                    Holding #Genslr <span style={{ color: '#FF5B50' }}>(non-voting)</span> NFT grants <span style={{ color: '#FF5B50' }}>10%</span> discount on
                                    token purchase once every <span style={{ color: '#FF5B50' }}>3 months</span>.
                                </p>
                                <p>
                                    The Genslr Project will partner with major retailers for <span style={{ color: '#FF5B50' }}> online/in
                                        store</span> discounts for  <span style={{ color: '#FF5B50' }}>#Genslr NFT holders</span>.
                                </p>
                            </div>
                            <div>
                                <h5 style={{ color: '#FF5B50' }}>NFT Voting</h5>
                                <p>
                                    Any <span style={{ color: '#FF5B50' }}>$gry</span> token holder can create a <span style={{ color: '#FF5B50' }}>proposition</span> to submit to
                                    the community for a <span style={{ color: '#FF5B50' }}>referendum</span>.
                                </p>
                                <p>
                                    If the proposition is <span style={{ color: '#FF5B50' }}>approved</span> then the proposer gets returned
                                    the <span style={{ color: '#FF5B50' }}>$gry</span> tokens they used to propose the <span style={{ color: '#FF5B50' }}>proposition</span>.
                                </p>
                                <p>
                                    To vote <span style={{ color: '#FF5B50' }}>$gry</span> token holders must acquire special <span style={{ color: '#FF5B50' }}>#Genslr
                                        Project voting NFT</span> with <span style={{ color: '#FF5B50' }}>$gry</span> tokens.
                                </p>
                                <p>
                                    To vote <span style={{ color: '#FF5B50' }}>yes</span> or <span style={{ color: '#FF5B50' }}>no</span> no one <span style={{ color: '#FF5B50' }}>#Genslr Project voting NFT</span> must be
                                    submitted. However, one can <span style={{ color: '#FF5B50' }}>vote/submit</span> as many <span style={{ color: '#FF5B50' }}>#Genslr
                                        Project voting NFTs</span> as desired in favor or opposition of a <span style={{ color: '#FF5B50' }}>single</span> proposition.
                                </p>
                                <p>
                                    The submission of <span style={{ color: '#FF5B50' }}>#Genslr Project voting NFT</span> will cause the
                                    <span style={{ color: '#FF5B50' }}>burn</span> of <span style={{ color: '#FF5B50' }}>$gry</span> tokens.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </main >
        </>
    )
}

export default Documentation