import { Lead as LeadModel, sequelize } from "./models/connection";
import { Lead, LeadData } from "./types";


export interface LeadListOptions {
  sort: 'name' | 'score'
}

export const init = async (force: boolean=false) => {
  await sequelize.sync({ force });
}

export const getLeadList = async (options?: LeadListOptions) => {
  const sort = options?.sort || 'score';
  const direction = options?.sort === 'name' ? 'ASC' : 'DESC';
  console.log({options})
  return (await LeadModel.findAll({
    order: [[sort, direction]],
  })).map((l: any) => l.toJSON()) as Lead[];
}

export const getLeadById = async (id: number): Promise<Lead | null> => {
  const lead = await LeadModel.findByPk(id);
  return lead ? lead.toJSON() as Lead : null;
}

export const createLeadRecord = async (lead: LeadData): Promise<Lead> => {
  const newLead = await LeadModel.create(lead as any);
  return newLead.toJSON() as Lead;
}
export const updateLead = async (id: number, lead: Partial<Lead>): Promise<Lead> => {
  const [updatedCount, updatedLeads] = await LeadModel.update(lead, {
    where: { id },
    returning: true
  });
  const leadRecord = await getLeadById(id);
  if (!leadRecord) {
    throw new Error(`Lead with id ${id} not found`);
  }
  return leadRecord;
}
export const deleteLead = async (id: number): Promise<boolean> => {
  const deletedCount = await LeadModel.destroy({
    where: { id }
  });
  return deletedCount > 0;
}

export const getLeadsCount = async (): Promise<number> => {
  return await LeadModel.count();
}