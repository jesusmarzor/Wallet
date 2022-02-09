import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { TransferForm } from '../TransferForm';
import { TransferList } from '../TransferList';
import {useWallet} from '../../hooks/useWallet';
import "./styles.scss";
import { Spinner } from '../Spinner';

function App() {
    const [money, setMoney] = useState(0);
    const [transfers, setTransfers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const wallet = useWallet({api : "wallet"});

    useEffect(() => {
        setMoney(wallet.money || 0);
        setTransfers(wallet.transfers || []);
        if(transfers != [])
            setLoading(false);
    },[wallet]);

    return (
        <div className="container">
            <p className="container__money">$ {money}</p>
            <TransferForm setTransfers={setTransfers} setMoney={setMoney}/>
            {
                (loading)
                ?
                    <Spinner/>
                :
                    <TransferList transfers={transfers}/>
            }
       </div>
    );
}

export default App;

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}
