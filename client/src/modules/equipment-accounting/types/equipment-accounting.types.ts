import {
  CableLogView,
  FacilityView,
  GeneralInformationView,
  ImpulseLineLogView,
  MetrologyView,
  MonitoringView,
  SignalView,
  SummaryListOfEquipmentView,
} from "../../../../../server/common/types/equipment-accounting";

export type Views =
  | GeneralInformationView
  | MetrologyView
  | SignalView
  | CableLogView
  | ImpulseLineLogView
  | MonitoringView
  | SummaryListOfEquipmentView;

export interface EssenceState {
  loading: boolean;
  error: string | null;
  summaryListOfEquipment: SummaryListOfEquipmentView[];
  currentEquipment: SummaryListOfEquipmentView | null;
  facilitiesList: FacilityView[];
  metrologiesList: MetrologyView[];
  monitoringsList: MonitoringView[];
  cableLogList: CableLogView[];
  impulseLineLogList: ImpulseLineLogView[];
  signalsList: SignalView[];
  generalInformationList: GeneralInformationView[];
}

export type EssenceAction =
  | GetAllItemsAction
  | GetAllItemsSuccessAction
  | GetAllItemsErrorAction
  | GetFacilitiesListAction
  | GetFacilitiesListSuccessAction
  | GetFacilitiesListErrorAction
  | GetOneItemAction
  | GetOneItemSuccessAction
  | GetOneItemErrorAction
  | PostOneItemAction
  | PostOneItemSuccessAction
  | PostOneItemErrorAction
  | PostOneFacilityAction
  | PostOneFacilitySuccessAction
  | PostOneFacilityErrorAction
  | PostManyItemsAction
  | PostManyItemsSuccessAction
  | PostManyItemsErrorAction
  | UpdateOneItemAction
  | UpdateOneItemSuccessAction
  | UpdateOneItemErrorAction
  | DeleteOneItemAction
  | DeleteOneItemSuccessAction
  | DeleteOneItemErrorAction
  | UpdateOneMetrologyItemAction
  | UpdateOneMetrologyItemSuccessAction
  | UpdateOneMetrologyItemErrorAction
  | DeleteOneMetrologyItemAction
  | DeleteOneMetrologyItemSuccessAction
  | DeleteOneMetrologyItemErrorAction
  | UpdateOneMonitoringItemAction
  | UpdateOneMonitoringItemSuccessAction
  | UpdateOneMonitoringItemErrorAction
  | DeleteOneMonitoringItemAction
  | DeleteOneMonitoringItemSuccessAction
  | DeleteOneMonitoringItemErrorAction
  | UpdateOneSignalItemAction
  | UpdateOneSignalItemSuccessAction
  | UpdateOneSignalItemErrorAction
  | DeleteOneSignalItemAction
  | DeleteOneSignalItemSuccessAction
  | DeleteOneSignalItemErrorAction
  | UpdateOneCableLogItemAction
  | UpdateOneCableLogItemSuccessAction
  | UpdateOneCableLogItemErrorAction
  | DeleteOneCableLogItemAction
  | DeleteOneCableLogItemSuccessAction
  | DeleteOneCableLogItemErrorAction
  | UpdateOneImpulseLineLogItemAction
  | UpdateOneImpulseLineLogItemSuccessAction
  | UpdateOneImpulseLineLogItemErrorAction
  | DeleteOneImpulseLineLogItemAction
  | DeleteOneImpulseLineLogItemSuccessAction
  | DeleteOneImpulseLineLogItemErrorAction
  | SetCurrentItemAction
  | SetMetrologiesListAction
  | SetMonitoringsListAction
  | SetImpulseLineLogListAction
  | SetCableLogListListAction
  | SetSignalsListAction
  | SetGeneralInformationsListListAction;

export enum ActionTypes {
  GET_ALL_ITEMS_SUCCESS = "GET_ALL_ITEMS_SUCCESS",
  GET_ALL_ITEMS_ERROR = "GET_ALL_ITEMS_ERROR",
  GET_ALL_ITEMS = "GET_ALL_ITEMS",

  GET_FACILITIES_LIST_SUCCESS = "GET_FACILITIES_LIST_SUCCESS",
  GET_FACILITIES_LIST_ERROR = "GET_FACILITIES_LIST_ERROR",
  GET_FACILITIES_LIST = "GET_FACILITIES_LIST",

  GET_ONE_ITEM = "GET_ONE_ITEM",
  GET_ONE_ITEM_SUCCESS = "GET_ONE_ITEM_SUCCESS",
  GET_ONE_ITEM_ERROR = "GET_ONE_ITEM_ERROR",

  POST_ONE_ITEM = "POST_ONE_ITEM",
  POST_ONE_ITEM_SUCCESS = "POST_ONE_ITEM_SUCCESS",
  POST_ONE_ITEM_ERROR = "POST_ONE_ITEM_ERROR",

  POST_ONE_FACILITY = "POST_ONE_FACILITY",
  POST_ONE_FACILITY_SUCCESS = "POST_ONE_FACILITY_SUCCESS",
  POST_ONE_FACILITY_ERROR = "POST_ONE_FACILITY_ERROR",

  POST_MANY_ITEMS = "POST_MANY_ITEMS",
  POST_MANY_ITEMS_SUCCESS = "POST_MANY_ITEMS_SUCCESS",
  POST_MANY_ITEMS_ERROR = "POST_MANY_ITEMS_ERROR",

  UPDATE_ONE_ITEM = "UPDATE_ONE_ITEM",
  UPDATE_ONE_ITEM_SUCCESS = "UPDATE_ONE_ITEM_SUCCESS",
  UPDATE_ONE_ITEM_ERROR = "UPDATE_ONE_ITEM_ERROR",

  UPDATE_ONE_METROLOGY_ITEM = "UPDATE_ONE_METROLOGY_ITEM",
  UPDATE_ONE_METROLOGY_ITEM_SUCCESS = "UPDATE_ONE_METROLOGY_ITEM_SUCCESS",
  UPDATE_ONE_METROLOGY_ITEM_ERROR = "UPDATE_ONE_METROLOGY_ITEM_ERROR",

  UPDATE_ONE_MONITORING_ITEM = "UPDATE_ONE_MONITORING_ITEM",
  UPDATE_ONE_MONITORING_ITEM_SUCCESS = "UPDATE_ONE_MONITORING_ITEM_SUCCESS",
  UPDATE_ONE_MONITORING_ITEM_ERROR = "UPDATE_ONE_MONITORING_ITEM_ERROR",

  UPDATE_ONE_CABLE_LOG_ITEM = "UPDATE_ONE_CABLE_LOG_ITEM",
  UPDATE_ONE_CABLE_LOG_ITEM_SUCCESS = "UPDATE_ONE_CABLE_LOG_ITEM_SUCCESS",
  UPDATE_ONE_CABLE_LOG_ITEM_ERROR = "UPDATE_ONE_CABLE_LOG_ITEM_ERROR",

  UPDATE_ONE_IMPULSE_LINE_LOG_ITEM = "UPDATE_ONE_IMPULSE_LINE_LOG_ITEM",
  UPDATE_ONE_IMPULSE_LINE_LOG_ITEM_SUCCESS = "UPDATE_ONE_IMPULSE_LINE_LOG_ITEM_SUCCESS",
  UPDATE_ONE_IMPULSE_LINE_LOG_ITEM_ERROR = "UPDATE_ONE_IMPULSE_LINE_LOG_ITEM_ERROR",

  UPDATE_ONE_SIGNAL_ITEM = "UPDATE_ONE_SIGNAL_ITEM",
  UPDATE_ONE_SIGNAL_ITEM_SUCCESS = "UPDATE_ONE_SIGNAL_ITEM_SUCCESS",
  UPDATE_ONE_SIGNAL_ITEM_ERROR = "UPDATE_ONE_SIGNAL_ITEM_ERROR",

  DELETE_ONE_ITEM = "DELETE_ONE_ITEM",
  DELETE_ONE_ITEM_SUCCESS = "DELETE_ONE_ITEM_SUCCESS",
  DELETE_ONE_ITEM_ERROR = "DELETE_ONE_ITEM_ERROR",

  DELETE_ONE_METROLOGY_ITEM = "DELETE_ONE_METROLOGY_ITEM",
  DELETE_ONE_METROLOGY_ITEM_SUCCESS = "DELETE_ONE_METROLOGY_ITEM_SUCCESS",
  DELETE_ONE_METROLOGY_ITEM_ERROR = "DELETE_ONE_METROLOGY_ITEM_ERROR",

  DELETE_ONE_MONITORING_ITEM = "DELETE_ONE_MONITORING_ITEM",
  DELETE_ONE_MONITORING_ITEM_SUCCESS = "DELETE_ONE_MONITORING_ITEM_SUCCESS",
  DELETE_ONE_MONITORING_ITEM_ERROR = "DELETE_ONE_MONITORING_ITEM_ERROR",

  DELETE_ONE_CABLE_LOG_ITEM = "DELETE_ONE_CABLE_LOG_ITEM",
  DELETE_ONE_CABLE_LOG_ITEM_SUCCESS = "DELETE_ONE_CABLE_LOG_ITEM_SUCCESS",
  DELETE_ONE_CABLE_LOG_ITEM_ERROR = "DELETE_ONE_CABLE_LOG_ITEM_ERROR",

  DELETE_ONE_IMPULSE_LINE_LOG_ITEM = "DELETE_ONE_IMPULSE_LINE_LOG_ITEM",
  DELETE_ONE_IMPULSE_LINE_LOG_ITEM_SUCCESS = "DELETE_ONE_IMPULSE_LINE_LOG_ITEM_SUCCESS",
  DELETE_ONE_IMPULSE_LINE_LOG_ITEM_ERROR = "DELETE_ONE_IMPULSE_LINE_LOG_ITEM_ERROR",

  DELETE_ONE_SIGNAL_ITEM = "DELETE_ONE_SIGNAL_ITEM",
  DELETE_ONE_SIGNAL_ITEM_SUCCESS = "DELETE_ONE_SIGNAL_ITEM_SUCCESS",
  DELETE_ONE_SIGNAL_ITEM_ERROR = "DELETE_ONE_SIGNAL_ITEM_ERROR",

  SET_CURRENT_ITEM = "SET_CURRENT_ITEM",
  SET_METROLOGIES_LIST = "SET_METROLOGIES_LIST",
  SET_MONITORINGS_LIST = "SET_MONITORINGS_LIST",
  SET_CABLE_LOG_LIST = "SET_CABLE_LOG_LIST",
  SET_SIGNALS_LIST = "SET_SIGNALS_LIST",
  SET_IMPULSE_LINE_LOG_LIST = "SET_IMPULSE_LINE_LOG_LIST",
  SET_GENERAL_INFORMATIONS_LIST = "SET_GENERAL_INFORMATIONS_LIST",
}

interface GetAllItemsAction {
  type: ActionTypes.GET_ALL_ITEMS;
}
interface GetAllItemsSuccessAction {
  type: ActionTypes.GET_ALL_ITEMS_SUCCESS;
  payload: SummaryListOfEquipmentView[];
}
interface GetAllItemsErrorAction {
  type: ActionTypes.GET_ALL_ITEMS_ERROR;
  payload: string;
}
interface GetFacilitiesListAction {
  type: ActionTypes.GET_FACILITIES_LIST;
}
interface GetFacilitiesListSuccessAction {
  type: ActionTypes.GET_FACILITIES_LIST_SUCCESS;
  payload: FacilityView[];
}
interface GetFacilitiesListErrorAction {
  type: ActionTypes.GET_FACILITIES_LIST_ERROR;
  payload: string;
}
interface GetOneItemAction {
  type: ActionTypes.GET_ONE_ITEM;
}
interface GetOneItemSuccessAction {
  type: ActionTypes.GET_ONE_ITEM_SUCCESS;
  payload: SummaryListOfEquipmentView;
}
interface GetOneItemErrorAction {
  type: ActionTypes.GET_ONE_ITEM_ERROR;
  payload: string;
}

interface PostOneItemAction {
  type: ActionTypes.POST_ONE_ITEM;
}
interface PostOneItemSuccessAction {
  type: ActionTypes.POST_ONE_ITEM_SUCCESS;
  payload: SummaryListOfEquipmentView;
}
interface PostOneItemErrorAction {
  type: ActionTypes.POST_ONE_ITEM_ERROR;
  payload: string;
}
interface PostManyItemsAction {
  type: ActionTypes.POST_MANY_ITEMS;
}
interface PostManyItemsSuccessAction {
  type: ActionTypes.POST_MANY_ITEMS_SUCCESS;
  payload: SummaryListOfEquipmentView[];
}
interface PostManyItemsErrorAction {
  type: ActionTypes.POST_MANY_ITEMS_ERROR;
  payload: string;
}

interface PostOneFacilityAction {
  type: ActionTypes.POST_ONE_FACILITY;
}
interface PostOneFacilitySuccessAction {
  type: ActionTypes.POST_ONE_FACILITY_SUCCESS;
  payload: SummaryListOfEquipmentView;
}
interface PostOneFacilityErrorAction {
  type: ActionTypes.POST_ONE_FACILITY_ERROR;
  payload: string;
}

interface UpdateOneItemAction {
  type: ActionTypes.UPDATE_ONE_ITEM;
}
interface UpdateOneItemSuccessAction {
  type: ActionTypes.UPDATE_ONE_ITEM_SUCCESS;
  payload: GeneralInformationView;
}
interface UpdateOneItemErrorAction {
  type: ActionTypes.UPDATE_ONE_ITEM_ERROR;
  payload: string;
}
interface DeleteOneItemAction {
  type: ActionTypes.DELETE_ONE_ITEM;
}
interface DeleteOneItemSuccessAction {
  type: ActionTypes.DELETE_ONE_ITEM_SUCCESS;
  payload: GeneralInformationView;
}
interface DeleteOneItemErrorAction {
  type: ActionTypes.DELETE_ONE_ITEM_ERROR;
  payload: string;
}

interface UpdateOneMetrologyItemAction {
  type: ActionTypes.UPDATE_ONE_METROLOGY_ITEM;
}
interface UpdateOneMetrologyItemSuccessAction {
  type: ActionTypes.UPDATE_ONE_METROLOGY_ITEM_SUCCESS;
  payload: MetrologyView;
}
interface UpdateOneMetrologyItemErrorAction {
  type: ActionTypes.UPDATE_ONE_METROLOGY_ITEM_ERROR;
  payload: string;
}
interface DeleteOneMetrologyItemAction {
  type: ActionTypes.DELETE_ONE_METROLOGY_ITEM;
}
interface DeleteOneMetrologyItemSuccessAction {
  type: ActionTypes.DELETE_ONE_METROLOGY_ITEM_SUCCESS;
  payload: MetrologyView;
}
interface DeleteOneMetrologyItemErrorAction {
  type: ActionTypes.DELETE_ONE_METROLOGY_ITEM_ERROR;
  payload: string;
}

interface UpdateOneMonitoringItemAction {
  type: ActionTypes.UPDATE_ONE_MONITORING_ITEM;
}
interface UpdateOneMonitoringItemSuccessAction {
  type: ActionTypes.UPDATE_ONE_MONITORING_ITEM_SUCCESS;
  payload: MonitoringView;
}
interface UpdateOneMonitoringItemErrorAction {
  type: ActionTypes.UPDATE_ONE_MONITORING_ITEM_ERROR;
  payload: string;
}
interface DeleteOneMonitoringItemAction {
  type: ActionTypes.DELETE_ONE_MONITORING_ITEM;
}
interface DeleteOneMonitoringItemSuccessAction {
  type: ActionTypes.DELETE_ONE_MONITORING_ITEM_SUCCESS;
  payload: MonitoringView;
}
interface DeleteOneMonitoringItemErrorAction {
  type: ActionTypes.DELETE_ONE_MONITORING_ITEM_ERROR;
  payload: string;
}

interface UpdateOneSignalItemAction {
  type: ActionTypes.UPDATE_ONE_SIGNAL_ITEM;
}
interface UpdateOneSignalItemSuccessAction {
  type: ActionTypes.UPDATE_ONE_SIGNAL_ITEM_SUCCESS;
  payload: SignalView;
}
interface UpdateOneSignalItemErrorAction {
  type: ActionTypes.UPDATE_ONE_SIGNAL_ITEM_ERROR;
  payload: string;
}
interface DeleteOneSignalItemAction {
  type: ActionTypes.DELETE_ONE_SIGNAL_ITEM;
}
interface DeleteOneSignalItemSuccessAction {
  type: ActionTypes.DELETE_ONE_SIGNAL_ITEM_SUCCESS;
  payload: SignalView;
}
interface DeleteOneSignalItemErrorAction {
  type: ActionTypes.DELETE_ONE_SIGNAL_ITEM_ERROR;
  payload: string;
}

interface UpdateOneCableLogItemAction {
  type: ActionTypes.UPDATE_ONE_CABLE_LOG_ITEM;
}
interface UpdateOneCableLogItemSuccessAction {
  type: ActionTypes.UPDATE_ONE_CABLE_LOG_ITEM_SUCCESS;
  payload: CableLogView;
}
interface UpdateOneCableLogItemErrorAction {
  type: ActionTypes.UPDATE_ONE_CABLE_LOG_ITEM_ERROR;
  payload: string;
}
interface DeleteOneCableLogItemAction {
  type: ActionTypes.DELETE_ONE_CABLE_LOG_ITEM;
}
interface DeleteOneCableLogItemSuccessAction {
  type: ActionTypes.DELETE_ONE_CABLE_LOG_ITEM_SUCCESS;
  payload: CableLogView;
}
interface DeleteOneCableLogItemErrorAction {
  type: ActionTypes.DELETE_ONE_CABLE_LOG_ITEM_ERROR;
  payload: string;
}

interface UpdateOneImpulseLineLogItemAction {
  type: ActionTypes.UPDATE_ONE_IMPULSE_LINE_LOG_ITEM;
}
interface UpdateOneImpulseLineLogItemSuccessAction {
  type: ActionTypes.UPDATE_ONE_IMPULSE_LINE_LOG_ITEM_SUCCESS;
  payload: ImpulseLineLogView;
}
interface UpdateOneImpulseLineLogItemErrorAction {
  type: ActionTypes.UPDATE_ONE_IMPULSE_LINE_LOG_ITEM_ERROR;
  payload: string;
}
interface DeleteOneImpulseLineLogItemAction {
  type: ActionTypes.DELETE_ONE_IMPULSE_LINE_LOG_ITEM;
}
interface DeleteOneImpulseLineLogItemSuccessAction {
  type: ActionTypes.DELETE_ONE_IMPULSE_LINE_LOG_ITEM_SUCCESS;
  payload: ImpulseLineLogView;
}
interface DeleteOneImpulseLineLogItemErrorAction {
  type: ActionTypes.DELETE_ONE_IMPULSE_LINE_LOG_ITEM_ERROR;
  payload: string;
}

interface SetMetrologiesListAction {
  type: ActionTypes.SET_METROLOGIES_LIST;
  payload: MetrologyView[];
}
interface SetMonitoringsListAction {
  type: ActionTypes.SET_MONITORINGS_LIST;
  payload: MonitoringView[];
}
interface SetCableLogListListAction {
  type: ActionTypes.SET_CABLE_LOG_LIST;
  payload: CableLogView[];
}
interface SetImpulseLineLogListAction {
  type: ActionTypes.SET_IMPULSE_LINE_LOG_LIST;
  payload: ImpulseLineLogView[];
}
interface SetSignalsListAction {
  type: ActionTypes.SET_SIGNALS_LIST;
  payload: SignalView[];
}
interface SetGeneralInformationsListListAction {
  type: ActionTypes.SET_GENERAL_INFORMATIONS_LIST;
  payload: GeneralInformationView[];
}

interface SetCurrentItemAction {
  type: ActionTypes.SET_CURRENT_ITEM;
  payload: SummaryListOfEquipmentView;
}
