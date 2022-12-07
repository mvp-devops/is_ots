import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks";
import {List, Space, Table, Typography} from "antd";
import {ColumnType} from "antd/lib/table";
import {tableLocale} from "../modules/main";

const {Text} = Typography;

const Contacts = () => {
  const {currentItem} = useTypedSelector(state => state.positionTree);
  const [contacts, setContacts] = useState([]);

  const contactsList = [
    {
      subsidiaryId: 2,
      customers: [
        {
          id: 1,
          fieldId: null,
          fio: "Бадулин Алексей Владимирович",
          subdivision: "Сектор по метрологии, автоматизации, связи и ИТ",
          position: "Руководитель направления по автоматизации",
          email: "Badulin.AV@gazprom-neft.ru",
          phoneInternal: "+7 (3452) 69-30-67 (доб.75096)",
          phone: ""
        }
      ]
    },
    {
      subsidiaryId: 1,
      customers: [
        {
          id: 2,
          fieldId: null,
          fio: "Рубцов Евгений Вячеславович",
          subdivision: "Управление автоматизации, связи и ИТ",
          position: "Начальник управления",
          email: "Rubtsov.EV@yamal.gazprom-neft.ru",
          phoneInternal: "+7 (3452) 69-30-67 (доб.70070)",
          phone: "+7 (963) 452-22-88"
        },
        {
          id: 3,
          fieldId: null,
          fio: "Такутдинов Ильдар Ринатович",
          subdivision: "Управление автоматизации, связи и ИТ",
          position: "Руководитель направления по АСУТП и автоматизации",
          email: "Takutdinov.IR@yamal.gazprom-neft.ru",
          phoneInternal: "+7 (3452) 69-30-67 (доб.70077)",
          phone: "+7 (932) 050-00-77"
        },
        {
          id: 4,
          fieldId: null,
          fio: "Войкин Алексей Сергеевич",
          subdivision: "Управление автоматизации, связи и ИТ",
          position: "Главный метролог - Руководитель направления",
          email: "Voykin.AS@yamal.gazprom-neft.ru",
          phoneInternal: "+7 (3452) 69-30-67 (доб.70055)",
          phone: "+7 (922) 060-42-52"
        }
      ]
    },
    {
      subsidiaryId: 3,
      customers: [
        {
          id: 5,
          fieldId: null,
          fio: "Храмов Олег Анатольевич",
          subdivision: "Подразд-е по метрологии, автоматизации, связи и ИТ",
          position: "Рук-тель по метрологии, автоматизации, связи и ИТ",
          email: "Khramov.OA@yamal.gazprom-neft.ru",
          phoneInternal: "+7 (3452) 53-90-27 (доб.78888)",
          phone: "+7 (922) 060-00-90"
        },
        {
          id: 6,
          fieldId: null,
          fio: "Баландин Дмитрий Викторович",
          subdivision: "Группа по автоматизации",
          position: "Руководитель группы",
          email: "Balandin.DV@tmn.gazprom-neft.ru",
          phoneInternal: "+7 (3452) 53-90-27 (доб.78777)",
          phone: "+7 (932) 481-02-77"
        },
        {
          id: 7,
          fieldId: null,
          fio: "Попов Евгений Сергеевич",
          subdivision: "Группа по автоматизации",
          position: "Руководитель направления по автоматизации",
          email: "Popov.ES@yamal.gazprom-neft.ru",
          phoneInternal: "+7 (3452) 53-90-27 (доб.78228)",
          phone: "+7 (922) 067-55-55"
        },
        {
          id: 8,
          fieldId: null,
          fio: "Волков Евгений Сергеевич",
          subdivision: "Группа по метрологии и химико-аналитической лаборатории",
          position: "Руководитель группы - Главный метролог",
          email: "Volkov.ES@gazprom-neft.ru",
          phoneInternal: "+7 (3452) 53-90-27 (доб.78787)",
          phone: "+7 (999) 343-13-33"
        },
        {
          id: 9,
          fieldId: [5],
          fio: "Аржановский Артем Анатольевич",
          subdivision: "Проект «Нефтяные оторочки Чаяндинского НГКМ»",
          position: "Руководитель направления по КИП и метрологии",
          email: "Arzhanovskiy.AA@gazprom-neft.ru",
          phoneInternal: "+7 (3452) 53-90-27 (доб.77690)",
          phone: ""
        },
        {
          id: 10,
          fieldId: [3,4,8],
          fio: "Кульков Виталий Викторович",
          subdivision: "Проект «Нефтяные оторочки»",
          position: "Руководитель направления по КИП, автоматике и метрологии",
          email: "Kulkov.VV@tmn.gazprom-neft.ru",
          phoneInternal: "+7 (3452) 53-90-27 (доб.77659)",
          phone: "+7 (963) 450-09-04"
        },
        {
          id: 11,
          fieldId: [6,9],
          fio: "Сеферян Артур Ефремович",
          subdivision: "Управление по инжинирингу",
          position: "Руководитель направления по АСУ ТП",
          email: "Seferyan.AE@gazprom-neft.ru",
          phoneInternal: "+7 (3452) 53-90-27 (доб.78235)",
          phone: "+7 (905) 408-27-20"
        },
        {
          id: 12,
          fieldId: [11,12],
          fio: "Руденко Евгений Юрьевич",
          subdivision: "Отдел метрологии, автоматизации, связи и информационных технологий",
          position: "Начальник отдела",
          email: "Rudenko.EYu@gazprom-neft.ru",
          phoneInternal: "+7 (3452) 53-90-27 (доб.78235)",
          phone: "+7 (922) 260-09-29"
        }
      ]
    },
  ]

  useEffect(() => {
    if(currentItem.target === "subsidiary") {
      setContacts(contactsList.filter(item => item.subsidiaryId === +currentItem.id)[0]?.customers.filter(item => !item.fieldId) || [])
    }
    if(currentItem.target === "field") {
      setContacts(contactsList.filter(item => item.subsidiaryId === +currentItem.keys[0])[0]?.customers.filter(item => item.fieldId?.includes(+currentItem.id)) || [] )
    }

  }, [currentItem]);



  return (
<>
  <Text type={"secondary"} strong className={"d-flex justify-content-center"}>Контактные данные Заказчика:</Text>
  <List
    itemLayout="horizontal"
    dataSource={contacts}
    renderItem={item => {
      const link = `mailto:${item.email}`
      return (
        <List.Item>
          <List.Item.Meta
            title={<Space>
              <Text type={"secondary"}>{item.fio}</Text>

            </Space>}
            description={
              <Space direction={"vertical"} className={"d-flex justify-content between"}>
                <Space>
                  <Text type={"secondary"}>{item.subdivision}.</Text>
                  <Text type={"secondary"}>{item.position}</Text>
                </Space>
                <Space>
                  <a href={link}>{item.email}</a>
                </Space>
                <Space>
                  <Text type={"secondary"}>Корп. тел.: {item.phoneInternal}</Text>
                </Space>
                {item.phone &&
                  <Space>
                    <Text type={"secondary"}>Сот. тел.: {item.phone}</Text>
                  </Space>
                }

              </Space>}
          />
        </List.Item>
      )
    }}
  />
</>
  );
};

export default Contacts;