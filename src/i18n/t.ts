import type { Dictionary } from "./getDictionary";
import { interpolate } from "./getDictionary";

export type Translator = (
  key: string,
  values?: Record<string, string | number>,
) => string;

export function makeTranslator(dict: Dictionary): Translator {
  return (key, values) => {
    const segments = key.split(".");
    let cursor: unknown = dict;
    for (const segment of segments) {
      if (cursor && typeof cursor === "object" && segment in cursor) {
        cursor = (cursor as Record<string, unknown>)[segment];
      } else {
        return key;
      }
    }
    if (typeof cursor !== "string") return key;
    return values ? interpolate(cursor, values) : cursor;
  };
}
