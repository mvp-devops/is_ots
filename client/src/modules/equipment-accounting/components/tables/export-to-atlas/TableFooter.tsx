import { Space, Typography } from "antd";
import {useEffect, useState} from "react";

const { Text } = Typography;

const TableFooter = (data, refresh) => {
  const [sync, setSync] = useState(0);
  const [unSync, setUnSync] = useState(0);
  const [onSync, setOnSync] = useState(0);

  useEffect(() => {

      setSync(0);
      setUnSync(0);
      setOnSync(0);
      data.map(({sync_flag}) => {
        sync_flag === 0 && setUnSync(unSync + 1)
        sync_flag === 1 && setOnSync(onSync + 1)
        sync_flag === 2 && setSync(sync + 1)
      })
  }, [data, refresh]);







  return (
    <Space direction="vertical" className="d-flex justify-content-end ">
      <Space className="d-flex justify-content-end ">
        <Text  className="text-danger">Не синхронизировано:</Text>
        <Text strong className="text-danger">
          {unSync}
        </Text>
      </Space>
      <Space className="d-flex justify-content-end ">
      <Text  className="text-success">Синхронизировано:</Text>
      <Text strong className="text-success">
        {sync}
      </Text>
      </Space>
      <Space className="d-flex justify-content-end ">
        <Text className="text-info">В процессе синхронизации:</Text>
        <Text strong className="text-info">
          {onSync}
        </Text>
      </Space>
    </Space>
  );
};

export default TableFooter;