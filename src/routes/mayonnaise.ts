import { Router } from "express";
import { findMayonnaiseById } from "../controllers/mayonnaise";

const router = Router();

router.get("/:mayoId", findMayonnaiseById);

export default router;
