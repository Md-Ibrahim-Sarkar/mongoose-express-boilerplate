import { IUser } from "./user.interface";
import { User } from "./user.model";




const createUser = (payload: Partial<IUser>) => {
  const { name, email } = payload;

  const user = User.create({ name, email })
  
  return user
}

const getAllUser = async () => {
  const users = await User.find({})
  const totalUser = await User.countDocuments()
  return {
    data: users,
    meta: {
      total: totalUser
    }
  }
}

export const serviceUser = {
  createUser, getAllUser
}