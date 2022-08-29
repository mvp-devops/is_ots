import { UserEntity } from "../../src/modules/regulatory-reference-information";

export const formatUser = (user: UserEntity): string => {
  return `
        ${user.lastName} ${user.firstName.slice(0, 1)}. ${user.secondName.slice(
    0,
    1
  )}. \n\
        ${user.subsidiary.title} \n\
        ${user.subdivision} \n\
        ${user.position} \n\
        ${user.email} \n\
        ${user.phone}
      `;
};
