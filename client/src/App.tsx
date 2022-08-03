// import { Typography } from "antd";
import { CollectiveCheckSheet } from "./models/comment-accounting";
import { commentAccountingRequestData } from "./models/comment-accounting/utils/comment-accounting.consts";

// const { Text } = Typography;

function App() {
  return (
    <div className="App">
      <CollectiveCheckSheet data={commentAccountingRequestData} />
    </div>
  );
}

export default App;
