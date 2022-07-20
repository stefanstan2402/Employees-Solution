import * as coreClient from "@azure/core-client";

export const Employee: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Employee",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        nullable: true,
        type: {
          name: "String"
        }
      },
      phone: {
        serializedName: "phone",
        type: {
          name: "Number"
        }
      },
      hiringDate: {
        serializedName: "hiringDate",
        type: {
          name: "DateTime"
        }
      },
      salary: {
        serializedName: "salary",
        type: {
          name: "Number"
        }
      },
      department: {
        serializedName: "department",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WeatherForecast: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WeatherForecast",
    modelProperties: {
      date: {
        serializedName: "date",
        type: {
          name: "DateTime"
        }
      },
      temperatureC: {
        serializedName: "temperatureC",
        type: {
          name: "Number"
        }
      },
      temperatureF: {
        serializedName: "temperatureF",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      summary: {
        serializedName: "summary",
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};
