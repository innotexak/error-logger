import axios from 'axios';
import { IError, ISeverity } from './type';

const url = 'http://localhost:6060/api/v1/log/errors'


class CInstanceErrorLogger {
  private apiUrl: string;
  private secretKey: string;

  constructor(secretKey: string) {
    if (!secretKey) {
      throw new Error('A secret key is required to initialize the error logger');
    }
    this.secretKey = secretKey;
    this.apiUrl = url;
  }

  // Method to set the error severity to 'low'
  low(errorData: IError) {
    return this.logErrorWithSeverity(ISeverity.Low, errorData);
  }

  // Method to set the error severity to 'medium'
  medium(errorData: IError) {
    return this.logErrorWithSeverity(ISeverity.Medium, errorData);
  }

  // Method to set the error severity to 'high'
  high(errorData: IError) {
    return this.logErrorWithSeverity(ISeverity.High, errorData);
  }


  // Generic method to log the error with a specified severity
  private async logErrorWithSeverity(severity: ISeverity, errorData: IError) {
    // Add severity to the error data
    errorData.severity = severity;

    try {
      const response = await axios.post(
        this.apiUrl,
        errorData,
        { headers: { 
            'Content-Type': 'application/json', 
            "x-secret-key": this.secretKey
        } }
      );
      console.log(`Error logged successfully with severity ${severity}: ${response.data.id}`);
    } catch (error) {
      console.error(`Error logging failed:`, error);
    }
  }
}

export default CInstanceErrorLogger;
