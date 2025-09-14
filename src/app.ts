import express, { Express, Request, Response } from "express";
 
const app: Express = express();

interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});
 
/**
* Health check endpoint that returns status of the server
* @returns JSON response with server health metrics
*/
app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };
 
    res.json(healthData);
});
 
export default app;