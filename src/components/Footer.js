import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer center-on-small-only">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 ml-auto">
                            <h5 className="title social-section-title">Social Media</h5>
                            <div className="social-section text-md-left">
                                <ul className="text-center">
                                    <li>
                                        <a className="btn-floating  btn-fb waves-effect waves-light">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn-floating  btn-ins waves-effect waves-light">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn-floating  btn-tw waves-effect waves-light">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn-floating  btn-yt waves-effect waves-light">
                                            <i className="fa fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn-floating  btn-li waves-effect waves-light">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn-floating  btn-dribbble waves-effect waves-light">
                                            <i className="fa fa-dribbble left"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn-floating  btn-pin waves-effect waves-light">
                                            <i className="fa fa-pinterest"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn-floating  btn-gplus waves-effect waves-light">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 ml-auto">
                            <h5 className="title">Delivery</h5>
                            <ul>
                                <li>
                                    <a>Store Delivery</a>
                                </li>
                                <li>
                                    <a>Online Delivery</a>
                                </li>
                                <li>
                                    <a>Delivery Terms &amp; Conditions</a>
                                </li>
                                <li>
                                    <a>Tracking</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 ml-auto">
                            <h5 className="title">Need help?</h5>
                            <ul>
                                <li>
                                    <a>FAQ</a>
                                </li>
                                <li>
                                    <a>Contact Us</a>
                                </li>
                                <li>
                                    <a>Return Policy</a>
                                </li>
                                <li>
                                    <a>Product Registration</a>
                                </li>
                            </ul>

                        </div>
                        <div className="col-lg-3 ml-auto">
                            <h5 className="title">OUR STORES</h5>
                            <ul>
                                <li>
                                    <a>Ha Noi: 214A8 Cau Giay Street</a>
                                </li>
                                <li>
                                    <a>Khanh Hoa: Nha Trang City</a>
                                </li>
                                <li>
                                    <a>Ho Chi Minh city: District 1 </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
