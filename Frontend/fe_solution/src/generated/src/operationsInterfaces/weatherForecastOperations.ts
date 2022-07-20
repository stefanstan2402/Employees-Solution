import {
  WeatherForecastGetOptionalParams,
  WeatherForecastGetResponse
} from "../models";

/** Interface representing a WeatherForecastOperations. */
export interface WeatherForecastOperations {
  /** @param options The options parameters. */
  get(
    options?: WeatherForecastGetOptionalParams
  ): Promise<WeatherForecastGetResponse>;
}
