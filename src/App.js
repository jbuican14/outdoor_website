import './sass/index.scss';

// import CustomGrid from './components/CustomGrid';
import Header from './components/Header';
import AboutPage from './components/AboutPage';
import FeaturesPage from './components/FeaturesPage';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutPage />
      <FeaturesPage />
      {/* <CustomGrid /> */}
    </div>
  );
}

export default App;
