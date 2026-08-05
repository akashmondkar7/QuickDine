import { Document, model, Schema , Types} from "mongoose";

export interface IBooking extends Document{
   user:Types.ObjectId;
    restaurant:Types.ObjectId;
    date:Date;
    time:string;
    guests:number;
    occasion?:string;
    specialRequests?:string;
    status:"confirmed"|"cancelled" |"completed";
    bookingId:string;
    createdAt:Date;
    updatedAT:Date;

}

const UserSchema = new Schema<IBooking>(
    {
      user:{type:Schema.Types.ObjectId,ref:"User",required:true},
      restaurant:{type:Schema.Types.ObjectId,ref:"Restaurant",required:true},
      password:{type:String,required:true,minlength:6},
      phone:{type:String,required:true,minlength:10},
      role:{type:String,enum:["user","admin","owner"],default:"user"},


    },
    {
        timestamps:true
    }
   

)
// Remove Password when converting to JSON

UserSchema.set("toJSON",{
    transform:(doc ,ret)=>{
      delete ret.password;
      return ret
    }
})

export const User =model<IUser>("User",UserSchema)