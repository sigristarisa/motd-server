import { Response } from "express";

type StatusMessage = {
  [key: number]: string;
  200: string;
  201: string;
  400: string;
  401: string;
  403: string;
  404: string;
  500: string;
};

const STATUS_MESSAGES: StatusMessage = {
  200: "success - OK",
  201: "success - created",
  400: "client error – bad request",
  401: "client error – unauthorized",
  403: "client error - forbidden",
  404: "client error – not found",
  500: "server error – internal server error",
};

export const sendDataResponse = (
  res: Response,
  statusCode: number,
  payload: object
) => {
  return res.status(statusCode).json({
    status: STATUS_MESSAGES[statusCode],
    data: payload,
  });
};

export const sendMessageResponse = (
  res: Response,
  statusCode: number,
  message: string
) => {
  return res.status(statusCode).json({
    status: STATUS_MESSAGES[statusCode],
    message,
  });
};
