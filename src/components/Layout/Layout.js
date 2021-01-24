import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSidedrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSidedrawer: false})
    }

    sideDrawerToggleHandler = () => {
        console.log('test');
        this.setState((prevState) => {
            return { showSidedrawer: !prevState.showSidedrawer }
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                />
                <SideDrawer 
                    open={this.state.showSidedrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;