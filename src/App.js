import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Login } from './components/auth/Login';
import { NuevaCuenta } from './components/auth/NuevaCuenta';
import { Proyectos } from './components/proyectos/Proyectos';
import ProyectoState from './context/proyectos/proyectoState';


function App() {
  // Todo lo que coloquemos dentro del switch seran las paginas
  // Todo lo que este fuera del switch se vera en todas las paginas

  // Envolviendo todo en el State para que los datos se pasen a todos los componenetes
  return (
    <ProyectoState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/proyectos" component={Proyectos} />
        </Switch>
      </Router>
    </ProyectoState>
  );
}

export default App;
