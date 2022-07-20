import * as coreClient from "@azure/core-client";

export interface Employee {
  id?: string;
  name?: string;
  email?: string;
  phone?: number;
  hiringDate?: Date;
  salary?: number;
  department?: string;
}

export interface WeatherForecast {
  date?: Date;
  temperatureC?: number;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly temperatureF?: number;
  summary?: string;
}

/** Optional parameters. */
export interface EmployeesGetEmployeesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getEmployees operation. */
export type EmployeesGetEmployeesResponse = Employee[];

/** Optional parameters. */
export interface EmployeesPostEmployeeOptionalParams
  extends coreClient.OperationOptions {
  body?: Employee;
}

/** Contains response data for the postEmployee operation. */
export type EmployeesPostEmployeeResponse = Employee;

/** Optional parameters. */
export interface EmployeesGetEmployeeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getEmployee operation. */
export type EmployeesGetEmployeeResponse = Employee;

/** Optional parameters. */
export interface EmployeesPutEmployeeOptionalParams
  extends coreClient.OperationOptions {
  body?: Employee;
}

/** Optional parameters. */
export interface EmployeesDeleteEmployeeOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface WeatherForecastGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type WeatherForecastGetResponse = WeatherForecast[];

/** Optional parameters. */
export interface EmployersSolutionOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
