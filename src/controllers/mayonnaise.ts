import { Mayonnaise } from "../models/mayonnaise";
import { RequestHandler } from "express";
import { sendDataResponse, sendMessageResponse } from "../helpers/responses";

export const findMayonnaiseById: RequestHandler<{ mayoId: string }> = async (
  req,
  res
) => {
  const mayoId = +req.params.mayoId;
  try {
    const foundMayonnaise = await Mayonnaise.findById(mayoId);

    if (!foundMayonnaise) {
      return sendDataResponse(res, 404, { id: "mayonnaise not found" });
    }

    return sendDataResponse(res, 200, foundMayonnaise);
  } catch (error: any) {
    console.error("What happened?: ", error.message);
    return sendMessageResponse(res, 500, "Unable to send mayonnaise");
  }
};
