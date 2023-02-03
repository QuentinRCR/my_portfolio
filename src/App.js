import './App.scss';
import Project from './components/Project'

function App() {
  return (
    <div className="App">
      <Project title={"Personal project - Consultation of bus schedules"}
               backendURL={"https://github.com/QuentinRCR/backend-shuttle-time-display"}
               frontendURL={"https://github.com/QuentinRCR/shuttle-time-display"}
               dates={["January 2023","Today"]}
               technologies={["React","Spring Boot"]}
               videoURL={"https://drive.google.com/file/d/1H4_u8ao7DGZO2L2rPvkl3VUS00g7HXLJ/preview"}
      ></Project>
    </div>
  );
}

export default App;
