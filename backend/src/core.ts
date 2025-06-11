import * as db from "./db";
import { Lead } from "./types"


export const getTotalLeads = async (): Promise<number> => {
    return await db.getLeadsCount();
}

export const saveLead = async (leadOptions: Partial<Lead>): Promise<Lead> => {
    if (!leadOptions.name || !leadOptions.email) {
        throw new Error('Name and email are required to save a lead');
    }
    const score = calcScoreByLead(leadOptions as Lead);
    const leadData = { ...leadOptions, score };
    const lead = leadOptions?.id ?  await db.updateLead(leadOptions.id, leadData) : await db.createLeadRecord(leadData as Lead);
    return lead;
}

export const deleteLead = async (id: number): Promise<boolean> => {
    const deleted = await db.deleteLead(id);
    return deleted;
}

type LeadScoreOptions = Partial<Lead> & {
    email: string;
}

export const calcScoreByLead = ({ email, company, phone }: LeadScoreOptions, fill: boolean=false): number => {
    let score = 0;
    if (email.endsWith('.com') || email.endsWith('.org')) {
        if (email.endsWith('@gmail.com') || email.endsWith('@yahoo.com') || email.endsWith('@hotmail.com')) { 
            score += 5;
        } else {
            score += 10;
        }
    } else {
        score += 3;
    }

    if (company) {
        score += 10;
    }

    if (phone) {
        score += 5;
    }

    return score;
}
