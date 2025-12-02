import { 
  type WaitlistEntry, 
  type InsertWaitlistEntry,
  type ContactSubmission,
  type InsertContactSubmission,
  waitlistEntries,
  contactSubmissions
} from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class DatabaseStorage implements IStorage {
  async createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry> {
    const [created] = await db.insert(waitlistEntries).values(entry).returning();
    return created;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [created] = await db.insert(contactSubmissions).values(submission).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
