import React, { Fragment } from "react";

function Index(){
    return(
        <Fragment>
            <div id="page-top">
      <div id="wrapper">
        <ul>

          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon icon-circle ml-1">
              <img  src="assets/img/logo logigate.png"
              alt="Logo"
              style="width: 82px; height: 62px" />
            </div>
            <div className="sidebar-brand-text mx-3">LogiGate <sup>Admin</sup></div>
          </a>
          <hr className="sidebar-divider my-0" />
          <hr className="sidebar-divider" />
          <div className="sidebar-heading">
            Interfaz
          </div>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-home"></i>
              <span>Inicio</span>
            </a>
          </li>
          <hr className="sidebar-divider" />
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-box"></i>
              <span>Paquetes</span>
            </a>
          </li>
          <hr className="sidebar-divider" />
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-parking"></i>
              <span>Estacionamientos</span>
            </a>
          </li>
          <hr className="sidebar-divider" />
          <li className="nav-item">
            <a className="nav-link" href="charts.html">
              <i className="fas fa-fw fa-calendar"></i>
              <span>Calendario</span>
            </a>
          </li>
          <hr className="sidebar-divider" />
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-cog"></i>
              <span>Configuración</span>
            </a>
          </li>
          <hr className="sidebar-divider d-none d-md-block" />
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>

                    <form
                        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Buscar..."
                                aria-label="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn bg-palet-2" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <ul className="navbar-nav ml-auto" >

                        <li className="nav-item dropdown no-arrow d-sm-none">
                            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-search fa-fw"></i>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form className="form-inline mr-auto w-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small"
                                            placeholder="Buscar" aria-label="Search"
                                            aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-bell fa-fw"></i>

                                <span className="badge badge-danger badge-counter">1</span>
                            </a>

                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 className="dropdown-header bg-palet-1">
                                    Centro de Alertas
                                </h6>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-primary">
                                            <i className="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 12, 2019</div>
                                        <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                                </a>
                                
                                <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </li>

                        <div className="topbar-divider d-none d-sm-block"></div>

                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Joaquín Aravena</span>
                                <img className="img-profile rounded-circle"
                                    src="assets/img/1c708022-7898-4121-9968-0f0d24b8f986.gif" />
                            </a>

                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4 bg-palet-2" >
                                
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between bg-palet-3">
                                    <h6 className="m-0 font-weight-bold text-dark">Estacionamientos Visitas</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="chart-pie pt-4 pb-2">
                                        <canvas id="myPieChart"></canvas>
                                    </div>
                                    <div className="mt-4 text-center small">
                                        <span className="mr-2">
                                            <i className="fas fa-circle" style="color: #aef2ee;"></i> Ocupado
                                        </span>
                                        <span className="mr-2">
                                            <i className="fas fa-circle" style="color: #c4fffc;"></i> Libre
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-2 ">
                            <div className="card shadow mb-4 bg-palet-2">
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between bg-palet-3">
                                    <h6 className="m-0 font-weight-bold text-dark">Visitas Hoy</h6>
                                    <i className="fa-solid fa-person fa-2x" style="color: #272643;"></i>
                                </div>
                                
                                <div className="card-body">
                                    <h6 className="align-items-center font-weight-bold text-grey"> 35</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-2">
                            <div className="card shadow mb-4 bg-palet-2">
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between bg-palet-3">
                                    <h6 className="m-0 font-weight-bold text-dark">Paquetes en espera hoy</h6>
                                    <i className="fa-solid fa-box fa-2x" style="color: #272643;"></i>
                                </div>
                                
                                <div className="card-body">
                                    <h6 className="align-items-center font-weight-bold text-grey">5     ㅤㅤㅤHoy</h6> 

                                    <h6 className="align-items-center font-weight-bold text-grey">12ㅤㅤㅤAntiguos</h6> 
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-2 row-cols-1 ">
                            <div className="card shadow mb-3 align-items-center bg-palet-2">                      
                                <div className="card-body ">
                                    <a className = "nav-link" href="#">
                                        <h1 className="display-1 font-weight-bold text-bg-palet-1" >P</h1>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-1 row-cols ">
                            <div className="card shadow mb-3 align-items-center bg-palet-2">                      
                                <div className="card-body ">
                                    <a className = "nav-link" href="#">
                                        <h1>
                                            <i className="fa-solid fa-truck-fast" style="color: #272643;"></i>
                                        </h1>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-1 row-cols ">
                            <div className="card shadow mb-3 align-items-center bg-palet-2">                      
                                <div className="card-body ">
                                    <a className = "nav-link" href="#">
                                        <h1>
                                            <i className="fa-solid fa-person-walking" style="color: #272643;"></i>
                                        </h1>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow mb-4 ml-2">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-grey ">Ejemplo de Base de Datos</h6>
                            </div>
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between" >
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="10">
                                        <thead>
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Fecha y Hora</th>
                                                <th>Teléfono</th>
                                                <th>Departamento/Casa</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Fecha y Hora</th>
                                                <th>Teléfono</th>
                                                <th>Departamento/Casa</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            <tr>
                                                <td>Visita</td>
                                                <td>1 de Enero 2024 04:50:00</td>
                                                <td>+56 9 1111 2222</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>Visita</td>
                                                <td>1 de Enero 2024 04:50:00</td>
                                                <td>+56 9 1111 2222</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>Visita</td>
                                                <td>1 de Enero 2024 04:50:00</td>
                                                <td>+56 9 1111 2222</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>Visita</td>
                                                <td>1 de Enero 2024 04:50:00</td>
                                                <td>+56 9 1111 2222</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>Visita</td>
                                                <td>1 de Enero 2024 04:50:00</td>
                                                <td>+56 9 1111 2222</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>Visita</td>
                                                <td>1 de Enero 2024 04:50:00</td>
                                                <td>+56 9 1111 2222</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>Visita</td>
                                                <td>1 de Enero 2024 04:50:00</td>
                                                <td>+56 9 1111 2222</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>Visita</td>
                                                <td>1 de Enero 2024 04:50:00</td>
                                                <td>+56 9 1111 2222</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>Visita</td>
                                                <td>1 de Enero 2024 04:50:00</td>
                                                <td>+56 9 1111 2222</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>Visita</td>
                                                <td>1 de Enero 2024 04:50:00</td>
                                                <td>+56 9 1111 2222</td>
                                                <td>5</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>           
                    </div>
                </div>
            </div>

            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; LogiGate 2024</span>
                    </div>
                </div>
            </footer>

        </div>

    </div>

    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>

    <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a className="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
    </div>
        </Fragment>
    )
}

export default Index;