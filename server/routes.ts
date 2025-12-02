import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEntrySchema, insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistEntrySchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(validatedData);
      res.json({ success: true, entry });
    } catch (error) {
      console.error("Error creating waitlist entry:", error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid request" 
      });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, submission });
    } catch (error) {
      console.error("Error creating contact submission:", error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid request" 
      });
    }
  });

  return httpServer;
}
