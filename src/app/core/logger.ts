export abstract class Logger {
  abstract log(message: string): void;
  abstract logInfo(message: string): void;
  abstract logDebug(message: string): void;
}