import { DataType } from "./Common";

export interface FieldTypeParam {
  key: "dim";
  value: string;
}

export interface FieldType {
  name: string;
  description: string;
  data_type?: DataType;
  is_primary_key?: boolean;
  type_params?: FieldTypeParam[];
  autoID?: boolean;
}

export enum ShowCollectionsType {
  All,
  Loaded,
}

export interface ShowCollectionsReq {
  type?: ShowCollectionsType;
  collection_names?: string[];
}

export interface CreateCollectionReq {
  // collection name
  collection_name: string;
  shards_num?: number; // int
  description?: string;
  fields: FieldType[];
}

export interface HasCollectionReq {
  /**
   * @param collection_name collection name string
   */
  collection_name: string;
}

export interface DescribeCollectionReq {
  collection_name: string;
}

export interface GetCollectionStatisticsReq {
  collection_name: string;
}

export interface LoadCollectionReq {
  collection_name: string;
}

export interface ReleaseLoadCollectionReq {
  collection_name: string;
}

export interface DropCollectionReq {
  collection_name: string;
}
