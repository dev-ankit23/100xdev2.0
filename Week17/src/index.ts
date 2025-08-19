import { Client } from "pg";

const pgClient = new Client({
  connectionString:
    "postgresql://neondb_owner:npg_vbXNgGM5U7Ij@ep-hidden-credit-ae44a37k-pooler.c-2.us-east-2.aws.neon.tech/neondb",
  ssl: {
    rejectUnauthorized: true,
  },
});

async function main() {
  await pgClient.connect();

  const result = await pgClient.query("SELECT * FROM USERS;");
  console.log(result.rows);
}

main();


// situation is bas right now
