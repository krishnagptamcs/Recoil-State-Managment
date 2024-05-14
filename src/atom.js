import { atom } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 103,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 50,
});
export const messagingAtom = atom({
  key: "messagingAtom",
  default: 60,
});
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});
