import { Dropdown, Menu, Space, TableColumnsType, Typography } from "antd";
import {
  EllipsisOutlined,
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import { ColumnType } from "antd/lib/table";
import {
  CableLogView,
  GeneralInformationView,
  ImpulseLineLogView,
  MetrologyView,
  MonitoringView,
  SignalView,
  Views,
} from "../../types";
import { setTableColumnFilters } from ".";
import { useEquipmentAccountingTable } from "./hooks";
import { Link } from "react-router-dom";
import { FormActions } from "../../../main";
import { DeleteDialog } from "../../../../components";
import { MenuItemType } from "rc-menu/lib/interface";
import {
  formatDate,
  setDateToVerification,
  verificateDates,
} from "../../../../utils/main.utils";

const { Text } = Typography;

const TableColumns = (
  target: string,
  dataSource: Views[],
  currentRow?: Views
): TableColumnsType<Views> => {
  const { setFormVisible, setActionType } = useEquipmentAccountingTable();
  const columns: TableColumnsType<Views> = [];
  const menuItems: MenuItemType[] = [];

  const menu = <Menu items={menuItems} />;

  const editAssetMenuItem = {
    label: (
      <Space
        className="text-secondary"
        onClick={() => {
          setActionType(FormActions.EDIT_EQUIPMENT);
          setFormVisible(true);
        }}
      >
        <EditOutlined
          style={{ marginBottom: "6px", padding: 0 }}
          className="text-secondary"
        />
        Редактировать
      </Space>
    ),

    key: "EDIT_EQUIPMENT_ASSET",
  };

  const deleteAssetMenuItem = {
    label: (
      <DeleteDialog
        target="cable-log"
        id={currentRow?.id as string}
        onCancel={() => {
          setFormVisible(false);
          setActionType("");
        }}
        onConfirm={() => console.log(currentRow?.id)}
        children={
          <Space className="text-secondary">
            <DeleteOutlined
              className="text-danger"
              style={{ marginBottom: "6px", padding: 0 }}
            />
            Удалить
          </Space>
        }
      />
    ),
    key: "REMOVE_EQUIPMENT_ASSET",
  };

  const questionareViewMenuItem = {
    label: (
      <Space className="text-secondary">
        <Link
          to="../../../../GPN-A.PNG"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <SearchOutlined
            style={{
              marginRight: "6px",
              marginBottom: "6px",
              padding: 0,
            }}
            className="text-primary"
          />
          <Text type="secondary">Опросный лист</Text>
        </Link>
      </Space>
    ),

    key: "QUESTIONARE_VIEW",
  };

  const technologyCardsViewMenuItem = {
    label: (
      <Space className="text-secondary">
        <SearchOutlined
          style={{ marginBottom: "6px", padding: 0 }}
          className="text-success"
        />
        Тех. карты
      </Space>
    ),

    key: "COMMISION_WORK_CARD_VIEW",
    children: [
      {
        label: (
          <Space className="text-secondary">
            <Link
              to="../../../../GPN-A.PNG"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <AppstoreAddOutlined
                style={{
                  marginRight: "6px",
                  marginBottom: "6px",
                  padding: 0,
                }}
                className="text-primary"
              />
              <Text type="secondary">ПНР</Text>
            </Link>
          </Space>
        ),

        key: "VIEW-1-1",
      },
      {
        label: (
          <Space
            className="text-secondary"
            // onClick={() => {
            //   setActionType("POST");
            //   setFormVisible(true);
            // }}
          >
            <AppstoreAddOutlined
              style={{ marginBottom: "6px", padding: 0 }}
              className="text-primary"
            />
            ТО
          </Space>
        ),

        key: "TECHNICAL_SERVICE_VIEW",
      },
      {
        label: (
          <Space
            className="text-secondary"
            // onClick={() => {
            //   setActionType("POST");
            //   setFormVisible(true);
            // }}
          >
            <AppstoreAddOutlined
              style={{ marginBottom: "6px", padding: 0 }}
              className="text-primary"
            />
            МО
          </Space>
        ),

        key: "METROLOGY_SERVICE_VIEW",
      },
    ],
  };

  const metrologyDocumentsViewMenuItem = (currentRow: MetrologyView) => {
    return {
      label: (
        <Space className="text-secondary">
          <SearchOutlined
            style={{ marginBottom: "6px", padding: 0 }}
            className="text-primary"
          />
          Документы
        </Space>
      ),

      key: "VIEW",
      children: [
        {
          label: (
            <Space className="text-secondary">
              <Link
                to={currentRow ? currentRow.typeApprovalCertificate : "#"}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <SearchOutlined
                  style={{ marginRight: "6px", padding: 0 }}
                  className="text-primary"
                />
                <Text type="secondary">
                  Свидетельство об утверждении типа СИ
                </Text>
              </Link>
            </Space>
          ),
          key: "VIEW-1",
        },
        {
          label: (
            <Space className="text-secondary">
              <Link
                to={currentRow ? currentRow.verificationProcedure : "#"}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <SearchOutlined
                  style={{ marginRight: "6px", padding: 0 }}
                  className="text-primary"
                />
                <Text type="secondary">Методика поверки</Text>
              </Link>
            </Space>
          ),
          key: "VIEW-2",
        },
        {
          label: (
            <Space className="text-secondary">
              <Link
                to={currentRow ? currentRow.document : "#"}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <SearchOutlined
                  style={{ marginRight: "6px", padding: 0 }}
                  className="text-primary"
                />
                <Text type="secondary">
                  Документ со сведениями о поверке/калибровке
                </Text>
              </Link>
            </Space>
          ),
          key: "VIEW-3",
        },
        {
          label: (
            <Space className="text-secondary">
              <a
                rel="noreferrer"
                href={currentRow ? currentRow.arshin : "#"}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <SearchOutlined
                  style={{ marginRight: "6px", padding: 0 }}
                  className="text-primary"
                />
                <Text type="secondary">"ФГИС «АРШИН»</Text>
              </a>
            </Space>
          ),
          key: "VIEW-4",
        },
      ],
    };
  };

  const wiringDiagramViewMenuItem = {
    label: (
      <Space className="text-secondary">
        <Link
          to="../../../../GPN-A.PNG"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <SearchOutlined
            style={{
              marginRight: "6px",
              marginBottom: "6px",
              padding: 0,
            }}
            className="text-primary"
          />
          <Text type="secondary">
            Схема внешних электрических проводок (С5)
          </Text>
        </Link>
      </Space>
    ),

    key: "WIRING_DIAGRAM_VIEW",
  };

  const monitoringDocumentsViewMenuItem = {
    label: (
      <Space className="text-secondary">
        <SearchOutlined
          style={{ marginBottom: "6px", padding: 0 }}
          className="text-primary"
        />
        Документы
      </Space>
    ),

    key: "MONITORING_DOCUMENTS_VIEW",
    children: [
      {
        label: (
          <Space className="text-secondary">
            <Link to="#" target="_blank" style={{ textDecoration: "none" }}>
              <SearchOutlined
                style={{
                  marginRight: "6px",

                  padding: 0,
                }}
                className="text-primary"
              />
              <Text type="secondary">
                Ведомость смонтированного оборудования
              </Text>
            </Link>
          </Space>
        ),
        key: "LIST_OF_INSTALLED_EQUIPMENT_VIEW",
      },
      {
        label: (
          <Space className="text-secondary">
            <Link to="#" target="_blank" style={{ textDecoration: "none" }}>
              <SearchOutlined
                style={{ marginRight: "6px", padding: 0 }}
                className="text-primary"
              />
              <Text type="secondary">Акт о подключении</Text>
            </Link>
          </Space>
        ),
        key: "CONNECTION_ACT_VIEW",
      },
      {
        label: (
          <Space className="text-secondary">
            <Link to="#" target="_blank" style={{ textDecoration: "none" }}>
              <SearchOutlined
                style={{ marginRight: "6px", padding: 0 }}
                className="text-primary"
              />
              <Text type="secondary">Акт об окончии ПНР</Text>
            </Link>
          </Space>
        ),
        key: "ACT_OF_COMPLETION_OOF_THE_COMMISION_WORS_VIEW",
      },
      {
        label: (
          <Space className="text-secondary">
            <Link to="#" target="_blank" style={{ textDecoration: "none" }}>
              <SearchOutlined
                style={{ marginRight: "6px", padding: 0 }}
                className="text-primary"
              />
              <Text type="secondary">Протокол проверки сигналов</Text>
            </Link>
          </Space>
        ),
        key: "SIGNAL_TEST_PROTOCOL_VIEW",
      },
      {
        label: (
          <Space className="text-secondary">
            <Link to="#" target="_blank" style={{ textDecoration: "none" }}>
              <SearchOutlined
                style={{ marginRight: "6px", padding: 0 }}
                className="text-primary"
              />
              <Text type="secondary">Акт ввода в эксплуатацию</Text>
            </Link>
          </Space>
        ),
        key: "COMMISIONING_ACT_VIEW",
      },
    ],
  };

  const numberColumn: ColumnType<Views> = {
    title: "№ п/п",

    key: "number",
    align: "center",
    width: 50,

    render: (_, __, ind: number) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {ind + 1}
      </Text>
    ),
  };

  const unitFilters = setTableColumnFilters("unit", dataSource);

  const unitColumn: ColumnType<Views> = {
    title: "Объект",
    dataIndex: "unit",
    key: "unit",
    align: "center",
    // width: 150,
    filterSearch: unitFilters.length > 5 ? true : false,
    filters: unitFilters,
    onFilter: (value: any, record) =>
      record.unit
        ? record.unit.toUpperCase().includes(value.toUpperCase())
        : false,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const subUnitFilters = setTableColumnFilters("sub-unit", dataSource);

  const subUnitColumn: ColumnType<Views> = {
    title: "Установка",
    dataIndex: "subUnit",
    key: "subUnit",

    width: 150,
    filterSearch: subUnitFilters.length > 5 ? true : false,
    filters: subUnitFilters,
    onFilter: (value: any, record) =>
      record.subUnit
        ? record.subUnit.toUpperCase().includes(value.toUpperCase())
        : false,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const tagFilters = setTableColumnFilters("tag", dataSource);

  const tagColumn: ColumnType<Views> = {
    title: "TAG",
    dataIndex: "tag",
    key: "tag",

    width: 100,
    filterSearch: tagFilters.length > 5 ? true : false,
    filters: tagFilters,
    onFilter: (value: any, record) =>
      record.tag.toUpperCase().includes(value.toUpperCase()),
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const installationLocationFilters = setTableColumnFilters(
    "installation-location",
    dataSource
  );

  const installationLocationColumn: ColumnType<Views> = {
    title: "Место установки",
    dataIndex: "installationLocation",
    key: "installationLocation",
    align: "center",
    width: 150,
    filterSearch: installationLocationFilters.length > 5 ? true : false,
    filters: installationLocationFilters,
    onFilter: (value: any, record) =>
      (record as GeneralInformationView).installationLocation
        ? (record as GeneralInformationView).installationLocation
            .toUpperCase()
            .includes(value.toUpperCase())
        : false,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const controlledParameterFilters = setTableColumnFilters(
    "controlled-parameter",
    dataSource
  );

  const controlledParameterColumn: ColumnType<Views> = {
    title: "Параметр",
    dataIndex: "controlledParameter",
    key: "controlledParameter",
    align: "center",
    width: 100,
    filterSearch: controlledParameterFilters.length > 5 ? true : false,
    filters: controlledParameterFilters,
    onFilter: (value: any, record) =>
      (record as GeneralInformationView).controlledParameter
        ? (record as GeneralInformationView).controlledParameter
            .toUpperCase()
            .includes(value.toUpperCase())
        : false,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const equipmentTypeFilters = setTableColumnFilters(
    "equipment-type",
    dataSource
  );

  const equipmentTypeColumn: ColumnType<Views> = {
    title: "Тип",
    dataIndex: "facility",
    key: "equipmentType",
    align: "center",
    width: 80,
    filterSearch: equipmentTypeFilters.length > 5 ? true : false,
    filters: equipmentTypeFilters,
    onFilter: (value: any, record) =>
      (record as GeneralInformationView).facility.equipmentType
        ? (record as GeneralInformationView).facility.equipmentType
            .toUpperCase()
            .includes(value.toUpperCase())
        : false,
    render: (facility) => (
      <Text type="secondary">{facility.equipmentType}</Text>
    ),
  };

  const rsuColumn: ColumnType<Views> = {
    title: "РСУ",
    dataIndex: "systemType",
    key: "systemType",
    align: "center",
    render: (_blank, record) =>
      (record as GeneralInformationView).systemType.includes("РСУ")
        ? "Да"
        : "Нет",
    filters: [
      {
        value: "Да",
        text: "Да",
      },
      {
        value: "Нет",
        text: "Нет",
      },
    ],
    width: 80,
  };

  const pazColumn: ColumnType<Views> = {
    title: "ПАЗ",
    dataIndex: "systemType",
    key: "systemType",
    align: "center",
    render: (_blank, record) =>
      (record as GeneralInformationView).systemType.includes("ПАЗ")
        ? "Да"
        : "Нет",
    filters: [
      {
        value: "Да",
        text: "Да",
      },
      {
        value: "Нет",
        text: "Нет",
      },
    ],
    width: 80,
  };

  const kitsoColumn: ColumnType<Views> = {
    title: "КИТСО",
    dataIndex: "systemType",
    key: "systemType",
    align: "center",
    render: (_blank, record) =>
      (record as GeneralInformationView).systemType.includes("КИТСО")
        ? "Да"
        : "Нет",
    filters: [
      {
        value: "Да",
        text: "Да",
      },
      {
        value: "Нет",
        text: "Нет",
      },
    ],
    width: 80,
  };

  const countryFilters = setTableColumnFilters("country", dataSource);

  const countryColumn: ColumnType<Views> = {
    title: "Страна",
    dataIndex: "facility",
    key: "country",
    align: "center",
    filterSearch: countryFilters.length > 5 ? true : false,
    filters: countryFilters,
    onFilter: (value: any, record) =>
      (record as GeneralInformationView).facility.country
        ? (record as GeneralInformationView).facility.country
            .toUpperCase()
            .includes(value.toUpperCase())
        : false,
    render: (facility) => <Text type="secondary">{facility.country}</Text>,
  };

  const vendorFilters = setTableColumnFilters("vendor", dataSource);

  const vendorColumn: ColumnType<Views> = {
    title: "Произв.",
    dataIndex: "facility",
    key: "vendor",
    align: "center",
    filterSearch: vendorFilters.length > 5 ? true : false,
    filters: vendorFilters,
    onFilter: (value: any, record) =>
      (record as GeneralInformationView).facility.vendor
        ? (record as GeneralInformationView).facility.vendor
            .toUpperCase()
            .includes(value.toUpperCase())
        : false,
    render: (facility) => <Text type="secondary">{facility.vendor}</Text>,
  };

  const facilityTitleFilters = setTableColumnFilters(
    "facility-title",
    dataSource
  );

  const facilityTitleColumn: ColumnType<Views> = {
    title: "Наим-е",
    dataIndex: "facility",
    key: "facilityTitle",
    align: "center",
    filterSearch: facilityTitleFilters.length > 5 ? true : false,
    filters: facilityTitleFilters,
    onFilter: (value: any, record) =>
      (record as GeneralInformationView).facility.title
        ? (record as GeneralInformationView).facility.title
            .toUpperCase()
            .includes(value.toUpperCase())
        : false,
    render: (facility) => <Text type="secondary">{facility.title}</Text>,
  };

  const facilityModificationFilters = setTableColumnFilters(
    "facility-modification",
    dataSource
  );

  const facilityModificationColumn: ColumnType<Views> = {
    title: "Модиф.",
    dataIndex: "facilityModification",
    key: "facilityModification",
    align: "center",
    filterSearch: facilityModificationFilters.length > 5 ? true : false,
    filters: facilityModificationFilters,
    onFilter: (value: any, record) =>
      (record as GeneralInformationView).facilityModification
        ? (record as GeneralInformationView).facilityModification
            .toUpperCase()
            .includes(value.toUpperCase())
        : false,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const specificationColumn: ColumnType<Views> = {
    title: "Специф.",
    dataIndex: "specification",
    key: "specification",
    align: "center",
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const monthColumn: ColumnType<Views> = {
    title: "Мес.вып.",
    dataIndex: "month",
    key: "month",
    align: "center",
    render: (value) => <Text type="secondary">{value}</Text>,
    width: 50,
  };

  const yearColumn: ColumnType<Views> = {
    title: "Год вып.",
    dataIndex: "year",
    key: "year",
    align: "center",
    render: (value) => <Text type="secondary">{value}</Text>,
    width: 50,
  };

  const periodColum: ColumnType<Views> = {
    title: "Срок эксп.",
    dataIndex: "period",
    key: "period",
    align: "center",
    render: (value) => <Text type="secondary">{value}</Text>,
    width: 50,
  };

  const sgroeiFilters = setTableColumnFilters("sgroei", dataSource);

  const sgroeiColumn: ColumnType<Views> = {
    title: "СГРОЕИ",
    dataIndex: "sgroei",
    key: "sgroei",
    align: "center",
    filterSearch: sgroeiFilters.length > 5 ? true : false,
    filters: sgroeiFilters,
    onFilter: (value: any, record) =>
      (record as MetrologyView).sgroei
        ? (record as MetrologyView).sgroei
            .toUpperCase()
            .includes(value.toUpperCase())
        : false,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const measurementAreaFilters = setTableColumnFilters(
    "measurement-area",
    dataSource
  );

  const measurementAreaColumn: ColumnType<Views> = {
    title: "Область измерений",
    dataIndex: "measurementArea",
    key: "measurementArea",
    align: "center",
    width: 120,
    filterSearch: measurementAreaFilters.length > 5 ? true : false,
    filters: measurementAreaFilters,
    onFilter: (value: any, record) =>
      (record as MetrologyView).measurementArea
        ? (record as MetrologyView).measurementArea
            .toUpperCase()
            .includes(value.toUpperCase())
        : false,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const measurementTypeFilters = setTableColumnFilters(
    "measurement-type",
    dataSource
  );

  const measurementTypeColumn: ColumnType<Views> = {
    title: "Вид измерений",
    dataIndex: "meansurementType",
    key: "meansurementType",
    align: "center",
    width: 120,
    filterSearch: measurementTypeFilters.length > 5 ? true : false,
    filters: measurementTypeFilters,
    onFilter: (value: any, record) =>
      (record as MetrologyView).meansurementType
        ? (record as MetrologyView).meansurementType
            .toUpperCase()
            .includes(value.toUpperCase())
        : false,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const measurementGroupFilters = setTableColumnFilters(
    "measurement-group",
    dataSource
  );

  const measurementGroupColumn: ColumnType<Views> = {
    title: "Группа СИ",
    dataIndex: "meansureGroup",
    key: "meansureGroup",
    align: "center",
    width: 120,
    filterSearch: measurementGroupFilters.length > 5 ? true : false,
    filters: measurementGroupFilters,
    onFilter: (value: any, record) =>
      (record as MetrologyView).meansureGroup
        ? (record as MetrologyView).meansureGroup
            .toUpperCase()
            .includes(value.toUpperCase())
        : false,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const grsiFilters = setTableColumnFilters("grsi", dataSource);

  const grsiColumn: ColumnType<Views> = {
    title: "№ ГРСИ",
    dataIndex: "grsi",
    key: "grsi",
    align: "center",
    filterSearch: grsiFilters.length > 5 ? true : false,
    filters: grsiFilters,
    onFilter: (value: any, record) =>
      (record as MetrologyView).grsi
        ? (record as MetrologyView).grsi
            .toUpperCase()
            .includes(value.toUpperCase())
        : false,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const minColumn: ColumnType<Views> = {
    title: "min",
    dataIndex: "min",
    key: "min",
    align: "center",
    // width: 200,
    render: (value, record) => (
      <Text type="secondary">
        {value} {(record as MetrologyView).range}
      </Text>
    ),
  };

  const maxColumn: ColumnType<Views> = {
    title: "max",
    dataIndex: "max",
    key: "max",
    align: "center",
    // width: 200,
    render: (value, record) => (
      <Text type="secondary">
        {value} {(record as MetrologyView).range}
      </Text>
    ),
  };

  const accuracyColumn: ColumnType<Views> = {
    title: "Погрешность/класс точности, %",
    dataIndex: "accuracy",
    key: "accuracy",
    align: "center",
    // width: 200,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const documentTypeColumn: ColumnType<Views> = {
    title: "Тип документа",
    dataIndex: "documentType",
    key: "documentType",
    align: "center",
    // width: 200,
    render: (value, record) => <Text type="secondary">{value}</Text>,
  };

  const counterpartyColumn: ColumnType<Views> = {
    title: "Орг-я, выполнившая работы",
    dataIndex: "counterparty",
    key: "counterparty",
    align: "center",
    // width: 200,
    render: (value, record) => <Text type="secondary">{value}</Text>,
  };

  const fromDateColumn: ColumnType<Views> = {
    title: "Дата поверки/калибровки",
    dataIndex: "fromDate",
    key: "fromDate",
    align: "center",
    width: 120,
    render: (value, record) => (
      <Text type="secondary">
        {formatDate((record as MetrologyView).fromDate)}
      </Text>
    ),
  };

  const toDateFilters = setTableColumnFilters(
    "date-to-verification",
    dataSource
  );

  const toDateColumn: ColumnType<Views> = {
    title: "Дата след. поверки/калибровки",
    // dataIndex: "toDate",
    // key: "toDate",
    align: "center",
    width: 120,
    filterSearch: toDateFilters.length > 5 ? true : false,
    filters: toDateFilters,
    onFilter: (value: any, record) =>
      (record as MetrologyView).toDate
        ? (record as MetrologyView).toDate
            .toUpperCase()
            .includes(formatDate(value.toUpperCase()))
        : false,
    render: (value, record) => (
      <Text
        type={
          verificateDates(
            setDateToVerification(
              (record as MetrologyView).fromDate,
              (record as MetrologyView).mpi
            )
          ) === "d"
            ? "danger"
            : verificateDates(
                setDateToVerification(
                  (record as MetrologyView).fromDate,
                  (record as MetrologyView).mpi
                )
              ) === "s"
            ? "success"
            : "warning"
        }
      >
        {setDateToVerification(
          (record as MetrologyView).fromDate,
          (record as MetrologyView).mpi
        )}
      </Text>
    ),
  };

  const mpiColumn: ColumnType<Views> = {
    title: "МПИ, мес.",
    dataIndex: "mpi",
    key: "mpi",
    align: "center",
    width: 60,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const metrologyStatusColumn: ColumnType<Views> = {
    title: "Статус",
    dataIndex: "status",
    key: "status",
    align: "center",
    // width: 200,
    render: (value, record) => <Text type="secondary">{value}</Text>,
  };

  const signalTypeFilters = setTableColumnFilters("signal-type", dataSource);

  const signalTypeColumn: ColumnType<Views> = {
    title: "Тип",
    dataIndex: "signalType",
    key: "signalType",
    align: "center",
    filterSearch: signalTypeFilters.length > 5 ? true : false,
    filters: signalTypeFilters,
    onFilter: (value: any, record) =>
      (record as SignalView).signalType
        ? (record as SignalView).signalType
            .toUpperCase()
            .includes(value.toUpperCase())
        : false,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const signalProtocolFilters = setTableColumnFilters(
    "signal-protocol",
    dataSource
  );

  const signalProtocolColumn: ColumnType<Views> = {
    title: "Тип",
    dataIndex: "signalProtocol",
    key: "signalProtocol",
    align: "center",
    filterSearch: signalProtocolFilters.length > 5 ? true : false,
    filters: signalProtocolFilters,
    onFilter: (value: any, record) =>
      (record as SignalView).signalProtocol
        ? (record as SignalView).signalProtocol
            .toUpperCase()
            .includes(value.toUpperCase())
        : false,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const signalTagColumn: ColumnType<Views> = {
    title: "TAG сигнала",
    dataIndex: "signalTag",
    key: "signalTag",
    align: "center",
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const hColumn: ColumnType<Views> = {
    title: "H",
    dataIndex: "h",
    key: "h",
    align: "center",
    width: 80,
    render: (value) => <Text type="warning">{+value}</Text>,
  };

  const lColumn: ColumnType<Views> = {
    title: "L",
    dataIndex: "l",
    key: "l",
    align: "center",
    width: 80,
    render: (value) => <Text type="warning">{+value}</Text>,
  };

  const llColumn: ColumnType<Views> = {
    title: "LL",
    dataIndex: "ll",
    key: "ll",
    align: "center",
    width: 80,
    render: (value) => <Text type="danger">{+value}</Text>,
  };

  const hhColumn: ColumnType<Views> = {
    title: "HH",
    dataIndex: "hh",
    key: "hh",
    align: "center",
    width: 80,
    render: (value) => <Text type="danger">{+value}</Text>,
  };

  const emergencyProtocolColumn: ColumnType<Views> = {
    title: "Описание",
    dataIndex: "emergencyProtocol",
    key: "emergencyProtocol",
    align: "center",
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const numberOfCableTraceColumn: ColumnType<Views> = {
    title: "№ каб. трассы",
    dataIndex: "numberOfTrace",
    key: "numberOfTrace",
    align: "center",
    // width: 200,

    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const cableMarkFilters = setTableColumnFilters("cable-mark", dataSource);

  const cableMarkColumn: ColumnType<Views> = {
    title: "Марка кабеля",
    dataIndex: "cableMark",
    key: "cableMark",
    align: "center",
    // width: 200,
    filterSearch: cableMarkFilters.length > 5 ? true : false,
    filters: cableMarkFilters,
    onFilter: (value: any, record) =>
      (record as CableLogView)
        ? (record as CableLogView).cableMark
            .toUpperCase()
            .includes(value.toUpperCase())
        : false,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const cableSectionColumn: ColumnType<Views> = {
    title: "Сечение кабеля",
    dataIndex: "cableSection",
    key: "cableSection",
    align: "center",
    // width: 100,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const fromUnitColumn: ColumnType<Views> = {
    title: "Место подключения, от",
    dataIndex: "fromUnit",
    key: "fromUnit",
    align: "center",
    // width: 250,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const fromPlaceColumn: ColumnType<Views> = {
    title: "Точка подключения, от",
    dataIndex: "fromPlace",
    key: "fromPlace",
    align: "center",
    // width: 250,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const toUnitColumn: ColumnType<Views> = {
    title: "Место подключения, до",
    dataIndex: "toUnit",
    key: "toUnit",
    align: "center",
    // width: 250,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const toPlaceColumn: ColumnType<Views> = {
    title: "Точка подключения, до",
    dataIndex: "toPlace",
    key: "toPlace",
    align: "center",
    // width: 250,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const cableLenghtColumn: ColumnType<Views> = {
    title: "Длина",
    dataIndex: "cableLenght",
    key: "cableLenght",
    align: "center",
    width: 80,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const rangeColumn: ColumnType<Views> = {
    title: "Ед. изм.",
    dataIndex: "range",
    key: "range",
    align: "center",
    width: 50,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const numberOfImpulseLineTraceColumn: ColumnType<Views> = {
    title: "№ импульсной линии",
    dataIndex: "numberOfTrace",
    key: "numberOfTrace",
    align: "center",
    width: 200,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const impulseLineTypeFilters = setTableColumnFilters(
    "impulse-line-type",
    dataSource
  );

  const impulseLineTypeColumn: ColumnType<Views> = {
    title: "Тип импульсной линии",
    dataIndex: "impulseLineType",
    key: "impulseLineType",
    align: "center",
    width: 200,
    filterSearch: impulseLineTypeFilters.length > 5 ? true : false,
    filters: impulseLineTypeFilters,
    onFilter: (value: any, record) =>
      (record as ImpulseLineLogView)
        ? (record as ImpulseLineLogView).impulseLineType
            .toUpperCase()
            .includes(value.toUpperCase())
        : false,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const impulseLineLenghtColumn: ColumnType<Views> = {
    title: "Длина",
    dataIndex: "impulseLineLenght",
    key: "impulseLineLenght",
    align: "center",
    width: 80,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const mountDateColumn: ColumnType<Views> = {
    title: "Дата монтажа",
    dataIndex: "mountDate",
    key: "mountDate",
    align: "center",
    width: 150,
    render: (value, record) => (
      <Text type="secondary">
        {formatDate((record as MonitoringView).mountDate)}
      </Text>
    ),
  };

  const connectDateColumn: ColumnType<Views> = {
    title: "Дата подключения",
    dataIndex: "connectDate",
    key: "connectDate",
    align: "center",
    width: 150,
    render: (value, record) => (
      <Text type="secondary">
        {formatDate((record as MonitoringView).connectDate)}
      </Text>
    ),
  };

  const testDateColumn: ColumnType<Views> = {
    title: "Дата проведения ПНР",
    dataIndex: "testDate",
    key: "testDate",
    align: "center",
    width: 150,
    render: (value, record) => (
      <Text type="secondary">
        {formatDate((record as MonitoringView).testDate)}
      </Text>
    ),
  };

  const awpDateColumn: ColumnType<Views> = {
    title: "Дата проверки прохождения сигналов на АРМ",
    dataIndex: "awpDate",
    key: "awpDate",
    align: "center",
    width: 150,
    render: (value, record) => (
      <Text type="secondary">
        {formatDate((record as MonitoringView).awpDate)}
      </Text>
    ),
  };

  const commisionDateColumn: ColumnType<Views> = {
    title: "Дата ввода в эксплуатацию",
    dataIndex: "commisionDate",
    key: "commisionDate",
    align: "center",
    width: 150,
    render: (value, record) => (
      <Text type="secondary">
        {formatDate((record as MonitoringView).commisionDate)}
      </Text>
    ),
  };

  const descriptionColumn: ColumnType<Views> = {
    title: "Примечание",
    dataIndex: "description",
    key: "description",
    align: "center",
    // width: 300,
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const actionsColumn: ColumnType<Views> = {
    title: "",
    key: "actions",
    width: 30,
    render: (_blank, record) => (
      <Dropdown trigger={["click"]} overlay={menu}>
        <EllipsisOutlined className="text-secondary" />
      </Dropdown>
    ),
  };

  switch (target) {
    case "general-information": {
      columns.push(numberColumn);
      columns.push({
        title: "Общие сведения",

        children: [
          unitColumn,
          subUnitColumn,
          installationLocationColumn,
          tagColumn,
          controlledParameterColumn,
        ],
      });
      columns.push(equipmentTypeColumn);
      columns.push({
        title: "Система",
        children: [rsuColumn, pazColumn, kitsoColumn],
      });
      columns.push({
        title: "Данные об оборудовании",
        children: [
          countryColumn,
          vendorColumn,
          facilityTitleColumn,
          facilityModificationColumn,
          specificationColumn,
          {
            title: "Хар-ки",
            children: [monthColumn, yearColumn, periodColum],
          },
        ],
      });
      columns.push(descriptionColumn);
      columns.push(actionsColumn);

      menuItems.push(questionareViewMenuItem);
      menuItems.push(technologyCardsViewMenuItem);
      menuItems.push(editAssetMenuItem);
      menuItems.push(deleteAssetMenuItem);

      break;
    }
    case "metrology": {
      columns.push(numberColumn);
      columns.push({
        title: "Общие сведения",

        children: [unitColumn, subUnitColumn, tagColumn],
      });
      columns.push(sgroeiColumn);
      columns.push(measurementAreaColumn);
      columns.push(measurementTypeColumn);
      columns.push(measurementGroupColumn);
      columns.push(grsiColumn);
      columns.push({
        title: "Характеристики",
        children: [
          {
            title: "Пределы измерений",

            children: [minColumn, maxColumn],
          },
          accuracyColumn,
        ],
      });
      columns.push({
        title: "Сведения о МО",
        children: [
          {
            title: "Документ",
            children: [
              documentTypeColumn,
              counterpartyColumn,
              fromDateColumn,
              toDateColumn,
              mpiColumn,
            ],
          },
          metrologyStatusColumn,
        ],
      });

      menuItems.push(
        metrologyDocumentsViewMenuItem(currentRow as MetrologyView)
      );
      menuItems.push(editAssetMenuItem);
      menuItems.push(deleteAssetMenuItem);

      break;
    }
    case "signal": {
      columns.push(numberColumn);
      columns.push({
        title: "Общие сведения",

        children: [unitColumn, subUnitColumn, tagColumn],
      });
      columns.push(signalTypeColumn);
      columns.push(signalProtocolColumn);
      columns.push(signalTagColumn);
      columns.push({
        title: "Уставки",
        children: [hColumn, lColumn, llColumn, hhColumn],
      });
      columns.push(emergencyProtocolColumn);
      columns.push(actionsColumn);

      menuItems.push(editAssetMenuItem);
      menuItems.push(deleteAssetMenuItem);

      break;
    }
    case "cable-log": {
      columns.push(numberColumn);
      columns.push({
        title: "Общие сведения",

        children: [unitColumn, subUnitColumn, tagColumn],
      });
      columns.push(numberOfCableTraceColumn);
      columns.push(cableMarkColumn);
      columns.push(cableSectionColumn);
      columns.push(fromUnitColumn);
      columns.push(fromPlaceColumn);
      columns.push(toUnitColumn);
      columns.push(toPlaceColumn);
      columns.push(cableLenghtColumn);
      columns.push(rangeColumn);
      columns.push(descriptionColumn);
      columns.push(actionsColumn);

      menuItems.push(wiringDiagramViewMenuItem);
      menuItems.push(editAssetMenuItem);
      menuItems.push(deleteAssetMenuItem);

      break;
    }
    case "impulse-line-log": {
      columns.push(numberColumn);
      columns.push({
        title: "Общие сведения",

        children: [unitColumn, subUnitColumn, tagColumn],
      });
      columns.push(numberOfImpulseLineTraceColumn);
      columns.push(impulseLineTypeColumn);
      columns.push(fromPlaceColumn);
      columns.push(toPlaceColumn);
      columns.push(impulseLineLenghtColumn);
      columns.push(rangeColumn);
      columns.push(actionsColumn);

      menuItems.push(editAssetMenuItem);
      menuItems.push(deleteAssetMenuItem);

      break;
    }
    case "monitoring": {
      columns.push(numberColumn);
      columns.push({
        title: "Общие сведения",

        children: [unitColumn, subUnitColumn, tagColumn],
      });
      columns.push(mountDateColumn);
      columns.push(connectDateColumn);
      columns.push(testDateColumn);
      columns.push(awpDateColumn);
      columns.push(commisionDateColumn);

      menuItems.push(monitoringDocumentsViewMenuItem);
      menuItems.push(editAssetMenuItem);
      menuItems.push(deleteAssetMenuItem);

      break;
    }
    default:
      break;
  }

  return columns;
};

export default TableColumns;