import NotFoundException from "../exceptions/NotFoundException";
import {NextFunction, Request, Response} from "express";

export default (req: Request, res: Response, next: NextFunction): void => {
   throw new NotFoundException("Route not found");
}
