"use client";

import { FullMessageType } from "@/app/types";
import { FC } from "react";

interface MessageBoxProps {
  data: FullMessageType;
  isLast?: boolean;
}

export const MessageBox: FC<MessageBoxProps> = () => {
  return <div></div>;
};
