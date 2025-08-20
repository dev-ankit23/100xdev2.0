import { PrismaClient } from "@prisma/client";
import express from "express";
const Client = new PrismaClient();
const app = express();
app.use(express.json());
app.post("/createuser", async (req, res) => {
    await Client.user.create({
        data: req.body,
    });
    res.json({
        message: "User Created",
    });
});
// CreateUser();
app.listen(3000, () => {
    console.log("App is listening....");
});
//# sourceMappingURL=index.js.map