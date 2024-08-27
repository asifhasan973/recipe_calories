import './App.css';
import Header from './Components/Header/Header';
import OurRecipies from './Components/OurRecipies/OurRecipies';

function App() {
  return (
    <>
      <div className="lexend">
        <Header></Header>
        <main>
          <OurRecipies></OurRecipies>
        </main>
      </div>
    </>
  );
}

export default App;
