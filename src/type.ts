  export enum IErrorTypeEnum {
    TypeError = 'typeError',
    ReferenceError = 'referenceError',
    SyntaxError = 'syntaxError',
    CustomError = 'customError',
    Other = 'other'
  }
  
  export enum IEnvironment {
    Development = 'development',
    Production = 'production',
    Staging = 'staging'
  }
  
  export enum IPlatform {
    Web = 'web',
    Mobile = 'mobile',
    Desktop = 'desktop',
  }
  
  export enum ISeverity {
    Low = 'low',
    Medium = 'medium',
    High = 'high',
  }
  
  export interface IError {
      appId: string ;
      sdkVersion: string ;
      errorMessage: string;
      errorStack?: string;
      errorType: IErrorTypeEnum;
      appVersion: string;
      environment: IEnvironment | string;
      platform: IPlatform;
      operatingSystem?: string;
      browser?: string;
      device?: string;
      ipAddress?: string;
      location?: { country?: string; city?: string };
      severity: ISeverity;
    
    }
  