import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import ReactDetail from './pages/technologies/ReactPage';
import Angular from './pages/technologies/AngularPage';
import AspDotNetCore from './pages/technologies/AspDotNetCorePage';   
import Azure from './pages/technologies/AzurePage';
import Nodejs from './pages/technologies/NodejsPage';
import Python from './pages/technologies/PythonPage';
import PowerBIPage from './pages/technologies/PowerBIPage';
import BlazorPage from './pages/technologies/BlazorPage';
import SqlServerPage from './pages/technologies/SqlServerPage';
import MongoDBPage from './pages/technologies/MongoDBPage'; 
import XamarinPage from './pages/technologies/XamarinPage';
import DotNetLanguagesPage from './pages/technologies/DotNetLanguagesPage';

import TireLubeShops from './pages/industries/TireLubeShopsPage';

import AutoMechanic from './pages/industries/AutoMechanicsPage';
import MultiLocationAutos from './pages/industries/MultiLocationAutosPage';
import MobileMechanicShop from './pages/industries/MobileMechanicShopPage';
import AutoPartsDealers from './pages/industries/AutoPartsDealersPage';
import OtherAutoServices from './pages/industries/OtherAutoServicesPage';

import SoftwareDevelopment from './pages/services/SoftwareDevelopmentPage';
import WebDevelopment from './pages/services/WebDevelopmentPage';
import MobileAppDevelopment from './pages/services/MobileAppDevelopmentPage';
import DigitalMarketing from './pages/services/DigitalMarketingPage';
import SocialMediaMarketing from './pages/services/SocialMediaMarketingPage';

const App = () => {
  return (
    <Router basename="/drivelogix">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologies/react" element={<ReactDetail />} />
        <Route path="/technologies/angular" element={<Angular />} />
        <Route path="/technologies/sql-server" element={<SqlServerPage />} />
        <Route path="/technologies/asp-dot-net-core" element={<AspDotNetCore />} />
        <Route path="/technologies/azure" element={<Azure />} />
        <Route path="/technologies/nodejs" element={<Nodejs />} />
        <Route path="/technologies/python" element={<Python />} />        
        <Route path="/technologies/power-bi" element={<PowerBIPage />} />
        <Route path="/technologies/blazor" element={<BlazorPage />} />
        <Route path="/technologies/mongodb" element={<MongoDBPage />} />
        <Route path="/technologies/xamarin" element={<XamarinPage />} />
        <Route path="/technologies/dotnet-languages" element={<DotNetLanguagesPage />} />
        {/* Route Links for different Industries  */}
        
        <Route path="/industries/auto-mechanic-shops" element={<AutoMechanic />} />
        <Route path="/industries/tire-lube-shops" element={<TireLubeShops />} />
        <Route path="/industries/auto-parts-dealers" element={<AutoPartsDealers />} />
        <Route path="/industries/mobile-mechanic-shop" element={<MobileMechanicShop />} />
        <Route path="/industries/multi-location-business" element={<MultiLocationAutos />} />
        <Route path="/industries/others-towing-car-washes" element={<OtherAutoServices />} />

        {/* Route Links for different Industries  */}
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />

      </Routes>
    </Router>
  );
};

export default App;
