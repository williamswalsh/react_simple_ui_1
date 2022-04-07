import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import PageContent from './components/PageContent';
import './style.css';

function Page() {
  return (
    <>
      <Header />
      <PageContent />
      <Footer />
    </>
  );
}
const root = createRoot(document.getElementById("root"));
root.render(<Page />);