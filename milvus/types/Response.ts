import {
  DataType,
  IndexState,
  KeyValuePair,
  NumberArrayId,
  StringArrayId,
} from "./Common";
export enum ErrorCode {
  SUCCESS = "Success",
  INDEX_NOT_EXIST = "IndexNotExist",
  // UNEXPECTED_ERROR = "UnexpectedError",
  // CONNECT_FAILED = "CONNECT_FAILED",
  // PERMISSION_DENIED = "PERMISSION_DENIED",
  // COLLECTION_NOT_EXISTS = "COLLECTION_NOT_EXISTS",
  // ILLEGAL_ARGUMENT = "ILLEGAL_ARGUMENT",
  // ILLEGAL_DIMENSION = "ILLEGAL_DIMENSION",
  // ILLEGAL_INDEX_TYPE = "ILLEGAL_INDEX_TYPE",
  // ILLEGAL_COLLECTION_NAME = "ILLEGAL_COLLECTION_NAME",
  // ILLEGAL_TOPK = "ILLEGAL_TOPK",
  // ILLEGAL_ROWRECORD = "ILLEGAL_ROWRECORD",
  // ILLEGAL_VECTOR_ID = "ILLEGAL_VECTOR_ID",
  // ILLEGAL_SEARCH_RESULT = "ILLEGAL_SEARCH_RESULT",
  // FILE_NOT_FOUND = "FILE_NOT_FOUND",
  // META_FAILED = "META_FAILED",
  // CACHE_FAILED = "CACHE_FAILED",
  // CANNOT_CREATE_FOLDER = "CANNOT_CREATE_FOLDER",
  // CANNOT_CREATE_FILE = "CANNOT_CREATE_FILE",
  // CANNOT_DELETE_FOLDER = "CANNOT_DELETE_FOLDER",
  // CANNOT_DELETE_FILE = "CANNOT_DELETE_FILE",
  // BUILD_INDEX_ERROR = "BUILD_INDEX_ERROR",
  // ILLEGAL_NLIST = "ILLEGAL_NLIST",
  // ILLEGAL_METRIC_TYPE = "ILLEGAL_METRIC_TYPE",
  // OUT_OF_MEMORY = "OUT_OF_MEMORY",
}

interface TimeStamp {
  created_timestamp: string; // hybrid timestamp it's milvus inside timestamp
  created_utc_timestamp: string;
}

interface TimeStampArray {
  created_timestamps: string[];
  created_utc_timestamps: string[];
}
export interface ResStatus {
  error_code: string | number;
  reason: string;
}

export interface BoolResponse {
  status: ResStatus;
  value: Boolean;
}

export interface CollectionData {
  name: string;
  id: string;
  timestamp: string;
  loadedPercentage: string;
}

export interface ShowCollectionsResponse extends TimeStampArray {
  status: ResStatus;
  data: CollectionData[];
}

export interface FieldSchema {
  name: string;
  description: string;
  data_type: string;
  is_primary_key?: boolean;
  type_params: KeyValuePair[];
  index_params: KeyValuePair[];
  autoID: boolean;
}

export interface CollectionSchema {
  name: string;
  description: string;
  fields: FieldSchema[];
}

export interface DescribeCollectionResponse extends TimeStamp {
  status: ResStatus;
  schema: CollectionSchema;
  collectionID: string;
  virtual_channel_names: string[]; // not useful for now
  physical_channel_names: string[]; // not useful for now
}

export interface StatisticsResponse {
  status: ResStatus;
  stats: KeyValuePair[];
  data: { [x: string]: any };
}

export interface ShowPartitionsResponse extends TimeStampArray {
  status: ResStatus;
  partition_names: string[];
  partitionIDs: number[];
}

export interface IndexDescription {
  index_name: string;
  indexID: number;
  params: KeyValuePair[];
  field_name: string;
}
export interface DescribeIndexResponse {
  status: ResStatus;
  index_descriptions: IndexDescription[];
}

export interface GetIndexStateResponse {
  status: ResStatus;
  state: IndexState;
}

export interface GetIndexBuildProgressResponse {
  status: ResStatus;
  indexed_rows: number;
  total_rows: number;
}

export interface MutationResult {
  succ_index: Number[];
  err_index: Number[];
  status: ResStatus;
  acknowledged: boolean;
  insert_cnt: string;
  delete_cnt: string;
  upsert_cnt: string;
  timestamp: string;
  IDs: StringArrayId | NumberArrayId;
}

export interface SearchResultData {
  score: number;
  id: string;
  fields: { type: string; field_name: string; data: string }[];
}

export interface SearchResults {
  status: ResStatus;
  results: SearchResultData[];
}

export interface FlushResult {
  status: ResStatus;
}

export interface QueryResult {
  status: ResStatus;
  fields_data: {
    type: DataType;
    field_name: string;
    field: any;
    field_id: number;
  }[];
}
