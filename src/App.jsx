import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Dasboard from "./components/Dasboard";
function App() {
  return (
    <>
      <div className='w-full flex font-semibold'>
        {/* navigation bar */}
        <NavigationBar/>
        {/* main camponent */}
        <main>
          <Dasboard/>
        </main>
      </div>
    </>
  );
}

export default App;
