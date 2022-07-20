import { WeatherForecastOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EmployersSolution } from "../employersSolution";
import {
  WeatherForecastGetOptionalParams,
  WeatherForecastGetResponse
} from "../models";

/** Class containing WeatherForecastOperations operations. */
export class WeatherForecastOperationsImpl
  implements WeatherForecastOperations {
  private readonly client: EmployersSolution;

  /**
   * Initialize a new instance of the class WeatherForecastOperations class.
   * @param client Reference to the service client
   */
  constructor(client: EmployersSolution) {
    this.client = client;
  }

  /** @param options The options parameters. */
  get(
    options?: WeatherForecastGetOptionalParams
  ): Promise<WeatherForecastGetResponse> {
    return this.client.sendOperationRequest({ options }, getOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/WeatherForecast",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "WeatherForecast" } }
        }
      }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
