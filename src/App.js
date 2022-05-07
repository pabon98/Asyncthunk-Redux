import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMissions } from "./redux/mission/missionSlice";

function App() {
  const { missions, loading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  if (loading) {
    // return <h2>Loading...</h2>
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border  text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
   <div className="container">
      <div className="App">
      <h1>Flight Mission</h1>
     <div className="row">
     {missions.map((item) => (
        <div className="col-md-4 g-3">
          {/* <h2>{item.mission_name}</h2>
            <h3>{item.launch_year}</h3> */}
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={item.links.mission_patch_small}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-title">{item.mission_name}</h4>
              <h5 class="card-text">Rocket Name: {item.rocket.rocket_name}.</h5>
              <h6 className="card-text">Launch Year: {item.launch_year}</h6>
              <p className="card-text">Launch Date: {item.launch_date_local}</p>
              <a href={item.links.wikipedia} class="btn btn-primary">
                Visit
              </a>
            </div>
          </div>
        </div>
      ))}
     </div>
    </div>
   </div>
  );
}

export default App;
