import "./App.css";
import Reports from "./components/Reports";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { changePosition } from "./store/actions";

function App() {
  const reports = useSelector((state) => state.reports);
  const dispatch = useDispatch();

  const handleOnDragEnd = (result) => {
    const { destination, source } = result;

    if (!result.destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newReports = [...reports];
    const [removed] = newReports.splice(source.index, 1);
    newReports.splice(destination.index, 0, removed);
    dispatch(changePosition(newReports));
  };

  return (
    <div className="App">
      <div className={"main"}>
        <h1 className={"title"}>Equities</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Reports />
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
