import React from 'react';
import Helmet from "react-helmet";
import dsclogo from "../images/dsclogo.svg";
import logo_horizontal from "../images/logo.svg";
// import logo_horizontal from "../images/logo_horizontal.png";
import { FaBars } from "react-icons/fa";
import common from "./common.js";
import "../styles/menu.scss";
import { Grid } from '@material-ui/core';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            responsive: false
        };
    }

    componentDidMount() {
        this.setState({
            responsive: common.checkResponsive()
        });
        window.onresize = () => {
            this.setState({
                responsive: common.checkResponsive()
            });
        }
    }

    render() {
        return (
            <div className={"page"}>
                <Helmet>
                    <title>{this.props.title}</title>
                </Helmet>
                <div className={"menu"}>
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        {this.state.responsive &&
                            <Grid item xs={2}>
                                <div class="hamburger">
                                    {this.state.responsive && <FaBars size={"1.4em"} />}
                                </div>
                            </Grid>
                        }
                        <Grid item xs={this.state.responsive ? 10 : 8}>
                            {/* <img src={dsclogo} className={"dsclogo"}></img> */}
                            {this.props.showLogo == true &&
                                <img src={dsclogo} className={"logo_symbol"}></img>
                            }
                        </Grid>
                        {!this.state.responsive &&
                            <Grid item xs={4}>
                                <ul>
                                    <li>Home</li>
                                    <li>Events</li>
                                    <li>Meet the team</li>
                                    <li>Contact</li>
                                </ul>
                            </Grid>
                        }
                    </Grid>
                </div>
                <div className={"content"}>
                    {this.props.children}
                </div>
            </div>
        )
    }

}