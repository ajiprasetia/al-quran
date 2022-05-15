import React from "react";
import { Link } from 'react-router-dom';
import './App.css';
import { Footer } from '../footer';
const Dashboard = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center fixed-top">
                <a className="navbar-brand text-center" href="#">
                    AL-QURAN
                </a>
            </nav>
            <div className="jumbotron jumbotron-fluid" id="main">
                <div className="container">
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 info-panel">
                        <div className="row">
                            <div className="col-lg">
                                <i class="fas fa-quran float-left mr-4" style={{fontSize: "100px"}}/>
                                <h3>BACA AL-QURAN</h3>
                                <h5>144 surat</h5>
                                <Link to="surat" className="btn btn-primary tombol">Mulai Membaca</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
