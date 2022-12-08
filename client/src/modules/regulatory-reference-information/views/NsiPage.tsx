import { Layout } from "antd";
import NsiTable from "../components/tables/NsiTable";
import {useTypedSelector} from "../../../hooks";

const NsiPage = () => {
  const {} = useTypedSelector(state => state.nsi);
  return (
    <Layout className="site-layout-background p-2">
      <NsiTable />
    </Layout>
  );
};

export default NsiPage;