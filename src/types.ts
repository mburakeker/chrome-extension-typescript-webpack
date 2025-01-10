export type ChromeRuntimeMessage = {
  type: ChromeRuntimeMessageType;
  payload: string | null;
}

export enum ChromeRuntimeMessageType {
  FirstMessageType = "FirstMessageType",
  SecondMessageType = "SecondMessageType",
}