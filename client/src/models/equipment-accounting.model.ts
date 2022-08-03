import axios from "axios";

export class EquipmentAccounting {
  private url = "api/equipment-accounting";

  // createOneEssence = async (
  //     item: ConsolidatedListCreateOrUpdateFormData
  //   ): Promise<ConsolidatedListView> => {
  //     const url = setUrl(this.url);
  //     const { data } = await axios.post(url, item);
  //     return data;
  //   };

  // deleteOneEssence = async (
  //     id: string
  //   ): Promise<ConsolidatedListView> => {
  //     const url = setUrl(`${this.url}/${id}`);

  //     const { data } = await axios.delete<ConsolidatedListView>(url, {
  //       params: { id },
  //     });
  //     return data;
  //   };

  // updateOneEssence = async (
  //     target: string,
  //     id: number,
  //     item: FieldCreateOrUpdateAttrs
  //   ): Promise<FieldInfo> => {
  //     const url = setUrl(target, id.toString());
  //     const { data } = await axios.put(url, item);

  //     console.log(item);
  //     return data;
  //   };
}
