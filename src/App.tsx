import './App.css';
import { LoginScreen } from './screens/login';
import { ProjectListScreen } from './screens/project-list/index';
function App() {
  return (
    <div className="App">
      <ProjectListScreen/>
      <LoginScreen></LoginScreen>
    </div>
  );
}

export default App;
