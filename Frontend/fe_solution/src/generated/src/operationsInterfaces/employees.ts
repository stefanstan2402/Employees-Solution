import {
  EmployeesGetEmployeesOptionalParams,
  EmployeesGetEmployeesResponse,
  EmployeesPostEmployeeOptionalParams,
  EmployeesPostEmployeeResponse,
  EmployeesGetEmployeeOptionalParams,
  EmployeesGetEmployeeResponse,
  EmployeesPutEmployeeOptionalParams,
  EmployeesDeleteEmployeeOptionalParams
} from "../models";

/** Interface representing a Employees. */
export interface Employees {
  /** @param options The options parameters. */
  getEmployees(
    options?: EmployeesGetEmployeesOptionalParams
  ): Promise<EmployeesGetEmployeesResponse>;
  /** @param options The options parameters. */
  postEmployee(
    options?: EmployeesPostEmployeeOptionalParams
  ): Promise<EmployeesPostEmployeeResponse>;
  /**
   * @param id
   * @param options The options parameters.
   */
  getEmployee(
    id: string,
    options?: EmployeesGetEmployeeOptionalParams
  ): Promise<EmployeesGetEmployeeResponse>;
  /**
   * @param id
   * @param options The options parameters.
   */
  putEmployee(
    id: string,
    options?: EmployeesPutEmployeeOptionalParams
  ): Promise<void>;
  /**
   * @param id
   * @param options The options parameters.
   */
  deleteEmployee(
    id: string,
    options?: EmployeesDeleteEmployeeOptionalParams
  ): Promise<void>;
}
