export interface AuditParametersType {
  uuid: string;
  name: string;
  location: string;
  browser: string;
  networkShape: string;
}

export interface PageType {
  name: string;
  url: string;
  uuid: string;
  latestAuditStatusHistories: AuditStatusHistoryType[];
}

export interface ApiPageType {
  name: string;
  url: string;
  uuid: string;
  latest_audit_status_histories: ApiAuditStatusHistoryType[];
}

export interface ScriptType {
  uuid: string;
  name: string;
  latestAuditStatusHistories: AuditStatusHistoryType[];
}

export interface ApiScriptType {
  uuid: string;
  name: string;
  latest_audit_status_histories: ApiAuditStatusHistoryType[];
}

export interface ProjectType {
  uuid: string;
  name: string;
  pages: PageType[];
  scripts: ScriptType[];
  screenshotUrl: string;
  latestAuditAt: string;
  auditParametersList: AuditParametersType[];
}

export interface AuditParametersAPIType {
  uuid: string;
  name: string;
  location: string;
  browser: string;
  network_shape: string;
}

export interface AuditStatusHistoryType {
  createdAt: string;
  status: "SUCCESS" | "REQUESTED" | "PENDING" | "ERROR";
  details: string;
  auditParametersId: string;
}

export interface ApiAuditStatusHistoryType {
  created_at: string;
  status: "SUCCESS" | "REQUESTED" | "PENDING" | "ERROR";
  details: string;
  parameters: string;
}

export interface ApiProjectType {
  uuid: string;
  name: string;
  pages: ApiPageType[];
  scripts: ApiScriptType[];
  audit_parameters_list: AuditParametersAPIType[];
  screenshot_url: string;
  latest_audit_at: string;
}
