import { concat } from "ethers/lib/utils";
import { op } from "./utils";

export const enum Opcode {
  VAL,
  BLOCK_NUMBER,
  GREATER_THAN,
}

export const isAfterBlockNumber = (blockNumber: number) => {
  return {
    sources: [
      concat([
        op(Opcode.BLOCK_NUMBER),
        op(Opcode.VAL, 0),
        op(Opcode.GREATER_THAN),
      ]),
    ],
    constants: [blockNumber - 1],
    stackLength: 3,
    argumentsLength: 0,
  };
};