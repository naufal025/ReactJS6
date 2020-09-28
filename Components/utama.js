import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Beranda from './beranda';
import Protokol from './protokol';
import Data from './data';
import List from './list';


const Utama = () => (
    <Switch>

        <Route path="/list" component={List} />
       
    </Switch>
)

export default Utama;