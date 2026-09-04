import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JobGrid from "./pages/JobGrid";
import JobDetails from "./pages/JobDetails";
import SavedJobs from "./pages/SavedJobs";
import ApplyForm from "./pages/ApplyForm";


function App() {

  return (<div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path= "/" element={<JobGrid/>} />
      <Route path= "/jobs/:title/:id" element={<JobDetails/>} />
      <Route path= "/saved-jobs" element={<SavedJobs/>} />
      <Route path= "/jobs/:title/:id/apply" element={<ApplyForm/>} />
    </Routes>
    </BrowserRouter>
  </div>)

}

export default App;