import React from 'react';
import Main from '../componets/Main';
import Row from '../componets/Row';
import requests from '../Requests';

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming}/>
        <Row rowID='2' title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowID='3' title='Trending' fetchURL={requests.requestTrending}/>
        <Row rowID='4' title='TopRated' fetchURL={requests.requestTopRated}/>
    </div>
  )
}

export default Home