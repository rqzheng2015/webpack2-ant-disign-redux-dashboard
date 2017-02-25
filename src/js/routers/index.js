/**
 * Created by rqzheng on 2017/2/19.
 */
import React from 'react';
import {Route} from 'react-router-dom';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';
import Page4 from '../pages/page4';
import TablePage from '../pages/tablePage';
import WelcomePage from '../pages/welcomePage';
export default class RouterContent extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={WelcomePage}/>
                <Route exact path="/welcomePage" component={WelcomePage}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/page2" component={Page2}/>
                <Route path="/page3" component={Page3}/>
                <Route path="/page4" component={Page4}/>
                <Route path="/tablePage" component={TablePage}/>
            </div>
        )
    }
}
