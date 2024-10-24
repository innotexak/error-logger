# Error Logger

A simple error logging package for sending errors to a centralized error management system.

## Installation

To install the package, run:

```bash
npm install  c-instance-error-logger
```
or 

```bash
yarn add  c-instance-error-logger
```

## Usage
Here's an example of how to use the c-instance-error-logger in your application:
import CInstanceErrorLogger from 'c-instance-error-logger';

```bash
// Initialize the logger with your secret key
const logger = new CInstanceErrorLogger('your_secret_key');

// Log an error with medium severity
logger.medium({
  message: 'An error occurred',
  stack: 'Error stack trace',
  type: 'TypeError',
  platform: 'web',
  environment: 'production',
});
```

## License
This project is licensed under the MIT License.