import { NextFunction, Request, Response } from "express"

export const asyncErrorHandler = (fn: Function) => (req : Request, res : Response, next : NextFunction) =>{
    return new Promise(fn(res,req, next)).then((next))
}