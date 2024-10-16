import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='flex flex-col bg-primary text-light font-poppins text-small font-light'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;