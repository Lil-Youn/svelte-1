import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "Posts",
    columns: [
      { name: "title", type: "string" },
      { name: "labels", type: "multiple" },
      { name: "slug", type: "string" },
      { name: "text", type: "text" },
      { name: "author", type: "link", link: { table: "Users" } },
      { name: "createdAt", type: "datetime" },
      { name: "views", type: "int" },
    ],
  },
  {
    name: "Users",
    columns: [
      { name: "name", type: "string" },
      { name: "email", type: "email" },
      { name: "bio", type: "text" },
    ],
    revLinks: [{ column: "author", table: "Posts" }],
  },
  {
    name: "site-2",
    columns: [
      { name: "name", type: "string" },
      { name: "nickname", type: "string" },
      { name: "age", type: "int" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Posts = InferredTypes["Posts"];
export type PostsRecord = Posts & XataRecord;

export type Users = InferredTypes["Users"];
export type UsersRecord = Users & XataRecord;

export type Site2 = InferredTypes["site-2"];
export type Site2Record = Site2 & XataRecord;

export type DatabaseSchema = {
  Posts: PostsRecord;
  Users: UsersRecord;
  "site-2": Site2Record;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Simon-s-workspace-qf11og.eu-central-1.xata.sh/db/xata-learning",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient({
    databaseURL:
      "https://Simon-s-workspace-qf11og.eu-central-1.xata.sh/db/xata-learning",

    apiKey: import.meta.env.VITE_XATA_API_KEY,
    fetch: fetch,
    branch: import.meta.env.VITE_XATA_BRANCH,
    enableBrowser: true,
  });
  return instance;
};
