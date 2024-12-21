import { Outlet, Route, Routes } from 'react-router';
import AboutUs from './views/AboutUs';
import AvailableCats from './views/AvailableCats';
import BaseLayout from './views/BaseLayout';
import ContactUs from './views/ContactUs';
import Home from './views/Home';

function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route path={'/'} element={<Home />} />
        <Route path={'/available-cats'} element={<AvailableCats />} />
        <Route path={'/contact-us'} element={<ContactUs />} />
        <Route path={'/about-us'} element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;
