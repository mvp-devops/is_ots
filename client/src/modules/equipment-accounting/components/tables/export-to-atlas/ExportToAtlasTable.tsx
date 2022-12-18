import {useEffect,  useState} from "react";
import {Input, notification, Space, Spin, Table, Typography} from "antd";
import {PlusOutlined, SearchOutlined, SyncOutlined} from "@ant-design/icons";
import TableColumns from "./TableColumns";
import TableFooter from "./TableFooter";
import {findAtlasAssets} from "../../../api/equipment-accounting.api";
import {useTypedSelector} from "../../../../../hooks";
import {FormActions, tableLocale} from "../../../../main";

const { Text } = Typography;

const ExportToAtlasTable = () => {

  const [searchInput, setSearchInput] = useState("");
  const [dataSource, setDataSource] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filteredResults, setFilteredResults] = useState([]);
  const {target, currentItem: {id}} = useTypedSelector(state => state.positionTree);

  useEffect(() => {
      setLoading(true);
      findAtlasAssets(target, id).then(data => setDataSource(data)).catch(e =>  notification["error"]({
        message: "Ошибка",
        description: e.message
      })).finally(() => setLoading(false))

  }, []);

  useEffect(() => {
if(refresh) {
  setLoading(true);
  findAtlasAssets(target, id).then(data => setDataSource(data)).catch(e =>  notification["error"]({
    message: "Ошибка",
    description: e.message
  })).finally(() => {
    setLoading(false)
    setRefresh(false)
  })
}
  }, [refresh]);



  const pagination = (pageSize: number, length: number) => {
    const showSizeChanger = length <= pageSize ? false : true;
    const count = Math.ceil(length / pageSize)
    const pageSizeOptions =  [length]
    return {
      defaultPageSize: pageSize,
      showSizeChanger,
      // pageSizeOptions
    }

  }

  const searchItems = (data: any[], searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data?.filter((item) => {
        return Object?.values(item)
          ?.join("")
          ?.toLowerCase()
          ?.includes(searchInput?.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  const title = (
    <Space className="d-flex align-items-center justify-content-end">
      <Space
        direction="horizontal"
        className="d-flex align-items-center justify-content-between"
      >
        <Input
          placeholder="Поиск..."
          className=" mt-2 mb-2"
          style={{ color: "red", maxWidth: 600 }}
          size="small"
          suffix={<SearchOutlined className="text-primary" />}
          onChange={(e) => searchItems(dataSource, e.target.value)}
        />
        <SyncOutlined
          key="REFRESH"
          className="text-info mr-2 mb-2"
          style={{ fontSize: 16, cursor: "pointer" }}
          title="обновить"
          onClick={() => setRefresh(true)}
        />
      </Space>
    </Space>
  );


  return (

      <Table
        className="border p-1 mt-2"
        style={{ fontSize: 12 }}
        pagination={dataSource.length > 10 ? pagination(10, (searchInput.length > 1 ? filteredResults : dataSource).length) : false}
        size="small"
        locale={tableLocale}
        loading={loading}
        title={() => title}
        rowKey={(record) => +record.id}
        columns={TableColumns(dataSource)}
        dataSource={searchInput.length > 1 ? filteredResults : dataSource}
        footer={() => TableFooter(searchInput.length > 1 ? filteredResults : dataSource, refresh)}
        // onRow={(record, rowIndex) => {
        //   return {
        //     onMouseEnter: (event) => {
        //       console.log(record.path_to_doc);
        //
        //     },
        //   };
        // }}
      />
  );
};

export default ExportToAtlasTable;