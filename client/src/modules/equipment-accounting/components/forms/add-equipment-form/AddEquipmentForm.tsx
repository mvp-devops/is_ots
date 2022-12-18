import React from 'react';
import {Button, Form, notification, Space} from "antd";
import {FormInstance} from "antd/es/form";
import FormSteps from "./FormSteps";
import {useActions, useTypedSelector} from "../../../../../hooks";


const {Item} = Form;

const AddEquipmentForm = () => {
  const [form] = Form.useForm();

  const formRef = React.createRef<FormInstance>();
  const {target, currentItemFolderPath, checkedItem, currentItem} = useTypedSelector(state => state.positionTree);

  const {setFormVisible, createOneEquipment} = useActions()

  //FIXME: допилить добавление модификаций оборудования массивом
  const onFinish = (values: any) => {

    const data= {
      parentFolderPath: currentItemFolderPath,
      generalInformation: {
        projectId:
          target === "field" ? +checkedItem.id
            : target === "project" ? +currentItem.id
              : target === "unit" ? +currentItem.keys[2]
                : +currentItem.keys[3],
        unitId: +values.unitId,
        subUnitId: +values.subUnitId,
        facilityId: values.facilityId !== "NEW" ? values.facilityId : null,
        facilityModification: values.facilityModification,
        facility: values.facilityId !== "NEW" ? null : {
          technicalCardId: +values.technicalCardId,
          country: values.country,
          vendor: values.vendor,
          title: values.title,
          equipmentType: values.equipmentType,
          measurementArea: values.measurementArea,
          measurementType: values.measurementType,
          measureGroup: values.measureGroup,
          modifications: [values.facilityModification]
        },
        tag: values.tag,
        installationLocation: values.installationLocation,
        controlledParameter: values.controlledParameter,
        systemType: values.systemType,
        factoryNumber: values.factoryNumber,
        period: values.period,
        year: values.year,
        month: values.month,
        questionnaire: values.questionnaire,
        specification: values.specification,
        description: values.description
      },
      metrology: {
        counterpartyId: values.counterpartyId,
        sgroei: values.sgroei,
        grsi: values.grsi,
        min: values.min,
        max: values.max,
        range: values.range,
        accuracy: values.accuracy,
        mpi: values.mpi,
        metrologyType: values.metrologyType,
        documentType: values.documentType,
        documentNumber: values.documentNumber,
        document: values.document,
        fromDate: values.fromDate,
        toDate: values.toDate,
        status: values.status,
        arshin: values.arshin,
        verificationProcedure: values.verificationProcedure,
        typeApprovalCertificate: values.typeApprovalCertificate
      },
      signals: values.signals,
      cableLog: values.cableLog,
      impulseLineLog: values.impulseLineLog,
      monitoring: {
        functionalDiagram: values.functionalDiagram,
        mountDate: values.mountDate,
        mountDocument: values.mountDocument,
        connectDate: values.connectDate,
        connectDocument: values.connectDocument,
        testDate: values.testDate,
        testDocument: values.testDocument,
        awpDate: values.awpDate,
        awpDocument: values.awpDocument,
        commissionDate: values.commissinDate,
        commissionDocument: values.commissionDocument
      }
    }

    createOneEquipment(data)
    onReset();
    setFormVisible(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    notification["error"]({
      message: "Ошибка",
      description: "Ошибка ввода данных. Проверьте все поля формы",
    });
  };

  const onReset = () => {
    formRef.current!.resetFields();
    form.setFieldsValue([]);
  };

  return (
    <Form
      ref={formRef}
      form={form}
      name="EQUIPMENT_ASSET_FORM"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
    >
      <FormSteps form={form}/>

      <Space className="d-flex justify-content-end">
        <Item>
          <Button type="primary" htmlType="submit">
            Добавить
          </Button>
        </Item>
      </Space>
    </Form>
  );
};

export default AddEquipmentForm;