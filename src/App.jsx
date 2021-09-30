import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HowItWorks from './components/HowItWorks/HowItWorks';
import OurProduct from './components/OurProduct/OurProduct';
import Slogan from './components/Slogan/Slogan';
import SuccessStory from './components/SuccessStory/SuccessStory';

const App = () => {
  return <div className="app">
      <Header />
      <Slogan />
      <HowItWorks />
      <SuccessStory />
      <OurProduct />
      <Footer />
    </div>
}

export default App;
