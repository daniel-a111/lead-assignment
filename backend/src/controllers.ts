import { saveLead } from "./core";
import * as db from "./db";
import { Lead, LeadOptions } from "./types";

export const getLeadList = async (req: any, res: any) => {
    res.json({ 
        leads: await db.getLeadList({ sort: req.query?.sort }),
     });
};

export const getSingleLead = async (req: any, res: any) => {
    const { id } = req.params;
    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: 'Invalid lead ID' });
    }
    res.json({ 
        lead: await db.getLeadById(id)
    });
};

export const createNewLead = async (req: any, res: any) => {
    const { name, email, company, phone, source, score } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    try {
        const lead = await saveLead(req.body as Lead);
        res.status(201).json({ lead });
    } catch (error: any) {
        res.status(500).json({ error: error?.message || 'Failed to create lead' });
    }
};

export const updateLead = async (req: any, res: any) => {
    console.log(req.params);
    console.log(req.params.id);
    const { id } = req.params;
    try {
        await saveLead({id: Number(id), ...req.body } as LeadOptions);
        res.json({ 
            lead: await db.getLeadById(id),
        });
    } catch (error: any) {
        res.status(500).json({ error: error?.message || 'Failed to update lead' });
    }
};

export const deleteLead = async (req: any, res: any) => {
    const { id } = req.params;
    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: 'Invalid lead ID' });
    }
    const lead = await db.getLeadById(Number(id));
    if (!lead) {
        return res.status(404).json({ error: 'Lead not found' });
    }
    const deleted = await db.deleteLead(Number(id));
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Lead not found' });
    }
};
