import { Request, Response } from "express";
import { UserService } from "./user.service";


const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);
    res.send({
      sucess: true,
      message: "User Created Succesfully",
      data: result
    })
  } catch (err) {
    console.log(err);
  }
}

export const UserController = {
  createUser
}