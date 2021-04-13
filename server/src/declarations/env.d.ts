declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PORT: string;
    DATABASE_URI: string;
    REDIS_URI: string;
    REDIS_SECRET: string;
  }
}