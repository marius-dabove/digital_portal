import { useState } from 'react'
import {BrowserRouter, Routes,Route, } from 'react-router-dom'
import CitizenDashboard from './pages/dashboard/CitizenDashboard.jsx'
import Landing from './pages/Landing.jsx'
import Login from './Pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import IssuerDashboard from './pages/dashboard/IssuerDashboard.jsx'
import CitizenHome from './pages/CitizenHome.jsx'
import BirthCertificateGeneral from './pages/certificate/Birth Certi/BirthCertificateGeneral.jsx'
import BirthCertificatePersonal from './pages/certificate/Birth Certi/BirthCertificatePersonal.jsx'
import BirthCertificateParent from './pages/certificate/Birth Certi/BirthCertificateParent.jsx'
import BirthCertificateDocuments from './pages/certificate/Birth Certi/BirthCertificateDocuments.jsx'
import IssuerGenerateCertificate from './pages/certificate/Birth Certi/IssuerGenerateCertificate.jsx'
import CertificatePreview from './pages/certificate/Birth Certi/CertificatePreview.jsx'
import CertificateReviewPage from './pages/certificate/Birth Certi/CertificateReviewPage.jsx'
import Profile from './pages/auth/profile.jsx'
import AcademicCertificateGeneral from './pages/certificate/AcademicCertificateGeneral.jsx'
import AcademicPersonal from './pages/certificate/AcademicPersonal.jsx'
import AcademicDetails from './pages/certificate/AcademicDetails.jsx'
import IssuerGenerateAcademic from './pages/certificate/IssuerGenerateAcademic.jsx'
import AcademicCertificatePreview from './pages/certificate/AcademicCertificatePreview.jsx'
import IssuerReviewApplication from './pages/dashboard/IssuerReviewApplication.jsx'
import AcademicReviewPage from './pages/certificate/AcademicReviewPage.jsx'
import AdminDashboard from './components/Admin/AdminDashboard.jsx'









function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/dashboard' element={<CitizenDashboard  />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />}/>
      <Route path='/issuer/dashboard' element={<IssuerDashboard />} />
      <Route path='/home' element={<CitizenHome />}/>
      <Route path='certificate/birth' element={<BirthCertificateGeneral/>}/>
      <Route path='/certificate/birth/personal' element={<BirthCertificatePersonal/>}/>
      <Route path='/certificate/birth/parent' element={<BirthCertificateParent/>}/>
      <Route path='/certificate/birth/documents' element={<BirthCertificateDocuments/>}/>
      <Route path='/issuer/generate/:applicationId' element={<IssuerGenerateCertificate/>}/>
      <Route path='/certificate/preview' element={<CertificatePreview/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/certificate/birth/review-page' element={<CertificateReviewPage/>}/>
      <Route path='/certificate/academic' element={<AcademicCertificateGeneral/>}/>
      <Route path='/certificate/academic-personal' element={<AcademicPersonal/>}/>
      <Route path='/certificate/academic-details' element={<AcademicDetails/>}/>
      <Route path='/issuer/academic/generate'  element={<IssuerGenerateAcademic/>}/>
      <Route path='/academic/preview' element={<AcademicCertificatePreview/>}/>
      <Route path='/issuer/review/:id' element={<IssuerReviewApplication/>}/>
      <Route path='/certificate/academic/review-page' element={<AcademicReviewPage/>}/>

        <Route path='/admin' element={<AdminDashboard />}/>
      

    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
