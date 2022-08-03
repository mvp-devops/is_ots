import CollectiveCheckSheet from "./models/comment-accounting/components/views/CollectiveCheckSheet";
import { commentAccountingRequestData } from "./models/comment-accounting/utils/comment-accounting.consts";

function App() {
  return (
    <div className="App">
      <CollectiveCheckSheet data={commentAccountingRequestData} />
    </div>
  );
}

export default App;
