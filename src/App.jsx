import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StepOne />} />
          <Route path="step-two" element={<StepTwo />} />
          <Route path="step-three" element={<StepThree />} />
          <Route path="step-four" element={<StepFour />} />
          <Route path="thank-you" element={<ThankYou />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
