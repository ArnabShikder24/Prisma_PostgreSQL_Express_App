import { Request, Response } from "express";
import { UserService } from "./user.service";


const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);
    res.send({
      sucess: true,
      message: "User Created Successfully",
      data: result
    })
  } catch (err) {
    console.log(err);
  }
}

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertOrUpdateProfile(req.body);
    res.send({
      sucess: true,
      message: "Profile Created/Updated Successfully",
      data: result
    })
  } catch (err) {
    console.log(err);
  }
}

export const UserController = {
  createUser,
  insertOrUpdateProfile
}