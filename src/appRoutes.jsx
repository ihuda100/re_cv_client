import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutAdmin from "./componentsAdmin/layoutAdmin";
import LayoutClient from "./componentsClient/layoutClient";
import LogInClient from "./componentsClient/logInClient";
import SignUpClient from "./componentsClient/signUpClient";
import Page404 from "./componentsClient/Page404";
import Welcome from "./componentsClient/welcome";
import HomeClient from "./componentsClient/homeClient";
import DashboardAdmin from "./componentsAdmin/dashboardAdmin";
import DashboardAdmin222 from "./componentsAdmin/dashboardAdmin222";
import ForgotPass from "./componentsClient/forgotPass";
import Varification from "./componentsClient/varification";
import Submit from "./componentsClient/submit";
import Help from "./componentsClient/help";
import VarificationforgotPass from "./componentsClient/varificationforgotPass";
import LogoutClient from "./componentsClient/logoutClient";
import Form from "./componentsClient/Form";
import Upload from "./componentsClient/Upload";
import VerifyFinal from "./componentsClient/VerifyFinal";
import Template from "./componentsClient/Template";
import CVtemp1 from "./componentsClient/CVtemp1";

import Previwe from "./componentsAdmin/Previwe";
import CVtemp2 from "./componentsClient/CVtemp2";
import CVtemp3 from "./componentsClient/CVtemp3";
import History from "./componentsClient/History";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<DashboardAdmin />} />
          <Route path="/admin/userlist" element={<DashboardAdmin222 />} />
          <Route path="/admin/previwe" element={<Previwe/>}/>
        </Route>

        <Route path="/" element={<LayoutClient />}>
          <Route index element={<Welcome />} />
          <Route path="/login" element={<LogInClient />} />
          <Route path="/logout" element={<LogoutClient />} />
          <Route path="/signup" element={<SignUpClient />} />
          <Route path="/varification" element={<Varification />} />
          <Route path="/homeClient" element={<HomeClient />} />
          <Route path="/history" element={<History />} />
          <Route path="/form" element={<Form />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/verify" element={<VerifyFinal />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/forgotPassClient" element={<ForgotPass />} />
          <Route path="/help" element={<Help />} />
          <Route path="/*" element={<Page404 />} />
          <Route
            path="/VarificationforgotPass"
            element={<VarificationforgotPass />}
          />
          <Route path="/template" element={<Template />} />
          <Route path="/cvtemp1" element={<CVtemp1 />} />
          <Route path="/cvtemp2" element={<CVtemp2 />} />
          <Route path="/cvtemp3" element={<CVtemp3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
