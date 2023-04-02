import react, { useEffect, useState } from 'react'
import "./home.css";
import axios from 'axios';

const Home = () => {

const [tickers,setTickers]=useState([]);
const [loader,setLoader]=useState(false);
useEffect(() => {
    async function fetchTickers() {
      try {
        const response = await axios.get('http://localhost:5000/tickers');
        setTickers(response.data);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTickers();
  }, []);
  let  count=0;
    return (
        <>
            <div className='section'>
                <div className='theme'>
                    <div className='header'>
                        <div className='image'>
                            <img src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" alt='hodlign' />
                        </div>
                        <div className='content'>
                            <button class="btn">INR<i class="fa-solid fa-circle-chevron-down" style={{ marginLeft: '10px' }}></i></button>
                            <button class="btn">Btc<i class="fa-solid fa-circle-chevron-down" style={{ marginLeft: '10px' }}></i></button>
                            <button class="btn">Buy Btc</button>

                        </div>
                        <div className='social-icons'>
                            <button type="button"><i class="fa-brands fa-telegram"></i>connect Telegram</button>
                        </div>
                    </div>


                    <div className="bottom-section">
                        <div className='container-fluid'>
                            <div className='subheader'>



                                <div className='text1'>
                                    <div className='color'>
                                        0.54%
                                    </div>
                                    <div className='caption'>5mins</div>
                                </div>

                                <div className='text1'>
                                    <div className='color'>
                                        0.9%
                                    </div>
                                    <div className='caption'>1hour</div>
                                </div>
                                <div className='text1' style={{ maxWidth: '40%' }}>
                                    <span style={{ color: 'white', textAlign: 'center' }}>Best price to Trade</span>
                                    <div className='color1'>
                                        ₹24,88,944</div>
                                    <span style={{ color: 'white', textAlign: 'center' }}>Average BTC/INR net price including commission
                                    </span>
                                </div>
                                <div className='text1'>
                                    <div className='color'>
                                        1.08% </div>
                                    <div className='caption'>1day</div>
                                </div>
                                <div className='text1'>
                                    <div className='color'>
                                        7.33%
                                    </div>
                                    <div className='caption'>7days</div>
                                </div>

                            </div>
                        </div>

                 {loader?<div className='hello'>loading...</div>
                 :
                     <>
                        <div class='table-data'>

                            <table>
                                <tr>
                                <th>#</th>
              <th>Name</th>
              <th>Last</th>
              <th>Buy</th>
              <th>Sell</th>
              <th>Volume</th>
              <th>Base Unit</th>

                                </tr>
                                {tickers.map(ticker => (
                                <tr key={ticker?.name}>
                                     <td>{++count}</td>
                                  <td>{ticker?.name}</td>
                                   <td>{ticker?.last}</td>
                                    <td className='buy'>{ticker?.buy}</td>
                                   <td className='sell'>{ticker?.sell}</td>
                                  <td>{ticker?.volume}</td>
                                 <td>{ticker?.base_unit}</td>

                                </tr>
                                ))}
                            </table>
                        </div>
</>
}
                    </div>
                </div>

                <div className='footer'>
                    <button className='btn1'>
                        Add to home screen
                    </button>
                </div>
            </div>

        </>
    )

}
export default Home;