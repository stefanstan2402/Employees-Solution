import { Employees } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EmployersSolution } from "../employersSolution";
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

/** Class containing Employees operations. */
export class EmployeesImpl implements Employees {
  private readonly client: EmployersSolution;

  /**
   * Initialize a new instance of the class Employees class.
   * @param client Reference to the service client
   */
  constructor(client: EmployersSolution) {
    this.client = client;
  }

  /** @param options The options parameters. */
  getEmployees(
    options?: EmployeesGetEmployeesOptionalParams
  ): Promise<EmployeesGetEmployeesResponse> {
    return this.client.sendOperationRequest(
      { options },
      getEmployeesOperationSpec
    );
  }

  /** @param options The options parameters. */
  postEmployee(
    options?: EmployeesPostEmployeeOptionalParams
  ): Promise<EmployeesPostEmployeeResponse> {
    return this.client.sendOperationRequest(
      { options },
      postEmployeeOperationSpec
    );
  }

  /**
   * @param id
   * @param options The options parameters.
   */
  getEmployee(
    id: string,
    options?: EmployeesGetEmployeeOptionalParams
  ): Promise<EmployeesGetEmployeeResponse> {
    return this.client.sendOperationRequest(
      { id, options },
      getEmployeeOperationSpec
    );
  }

  /**
   * @param id
   * @param options The options parameters.
   */
  putEmployee(
    id: string,
    options?: EmployeesPutEmployeeOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { id, options },
      putEmployeeOperationSpec
    );
  }

  /**
   * @param id
   * @param options The options parameters.
   */
  deleteEmployee(
    id: string,
    options?: EmployeesDeleteEmployeeOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { id, options },
      deleteEmployeeOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getEmployeesOperationSpec: coreClient.OperationSpec = {
  path: "/api/Employees",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Employee" } }
        }
      }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const postEmployeeOperationSpec: coreClient.OperationSpec = {
  path: "/api/Employees",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Employee
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getEmployeeOperationSpec: coreClient.OperationSpec = {
  path: "/api/Employees/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Employee
    }
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const putEmployeeOperationSpec: coreClient.OperationSpec = {
  path: "/api/Employees/{id}",
  httpMethod: "PUT",
  responses: { 200: {} },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteEmployeeOperationSpec: coreClient.OperationSpec = {
  path: "/api/Employees/{id}",
  httpMethod: "DELETE",
  responses: { 200: {} },
  urlParameters: [Parameters.$host, Parameters.id],
  serializer
};
