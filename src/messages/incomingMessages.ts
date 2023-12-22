import z from "zod";

/*const JOIN_ROOM="JOIN_ROOM";
const SEND_MESSAGE= "SEND_MESSAGE";
const UPVOTE_MESSAGE="UPVOTE_MESSAGE";

const SUPPORTED_MESSAGE_TYPE= [JOIN_ROOM,SEND_MESSAGE,UPVOTE_MESSAGE]; */

export enum SupportedMessage {
  JoinRoom = "JOIN_ROOM",
  SendMessage = "SEND_MESSAGE",
  UpvoteMessage = "UPVOTE_MESSAGE",
}

export type IncomingMessage =
  | {
      type: SupportedMessage.JoinRoom;
      payLoad: InitMessageType;
    }
  | {
      type: SupportedMessage.SendMessage;
      payLoad: UserMessageType;
    }
  | { type: SupportedMessage.UpvoteMessage; payLoad: UpvoteMessageType };

export const InitMessage = z.object({
  name: z.string(),
  userId: z.string(),
  roomId: z.string(),
});
type InitMessageType = z.infer<typeof InitMessage>;

export const UserMessage = z.object({
  name: z.string(),
  userId: z.string(),
  roomId: z.string(),
  message:z.string(),
});

type UserMessageType = z.infer<typeof UserMessage>;

export const UpvoteMessage = z.object({
  name: z.string(),
  userId: z.string(),
  roomId: z.string(),
  chatId:z.string()
});
type UpvoteMessageType = z.infer<typeof UpvoteMessage>;
