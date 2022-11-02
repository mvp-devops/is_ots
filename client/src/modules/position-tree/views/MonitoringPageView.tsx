import { Image, Space, Typography } from "antd";
import React from "react";
import { useTypedSelector } from "../../..";
import { setFilePath } from "../../main";

const { Text } = Typography;

const MonitoringPageView = () => {
  const { currentItem } = useTypedSelector((state) => state.positionTree);
  return (
    <div className="p-2">
      {currentItem &&
        currentItem.target === "unit" &&
        currentItem.id === "552" && (
          <Image.PreviewGroup>
            <Space
              direction="horizontal"
              className="d-flex justify-content-around mb-2"
            >
              <Text
                title="Мнемосхема объекта с кароточками оборудования.
                Карточки будут открываться при клике на позицию. 
                Информация будет подтягиваться из таблиц БД"
              >
                <Image
                  width={800}
                  src={setFilePath("/assets/001.png")}
                  alt=""
                />
              </Text>
              <Text
                title="Мнемосхема объекта данные по монтажу/проверкам будут 
              подтягиваться из таблиц БД при заполнении данных полевым персоналом"
              >
                <Image width={800} src={setFilePath("/assets/002.png")} />
              </Text>
            </Space>
            <Space
              direction="horizontal"
              className="d-flex justify-content-around mb-2"
            >
              <Text
                title="Алгоритмы будут подсечиваться при наведении фокуса мыши. 
              Информация будет подтягиваться из таблиц БД"
              >
                <Image width={800} src={setFilePath("/assets/003.png")} />
              </Text>

              <Text title="Мнемосхема объекта с описанием легенды">
                <Image width={800} src={setFilePath("/assets/004.png")} />
              </Text>
            </Space>
          </Image.PreviewGroup>
        )}
    </div>
  );
};

export default MonitoringPageView;
