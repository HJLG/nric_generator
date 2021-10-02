import "./App.css";
import 'antd/dist/antd.css'
import { Main } from "./components/Main";
import { Layout, Typography } from "antd";
const {Text} = Typography
function App() {
  return (
    <Layout style={{ backgroundColor: "black", height: "100vh" }}>
      <div className="App">
        <Text style ={{color: "lightblue", fontSize: 30}}>NRIC Generator</Text>
        <Main />
        <br/>
      </div>
    </Layout>
  );
}

export default App;
