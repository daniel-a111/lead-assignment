
export interface LeadOptions {
    id?: number;
    name: string;
    email: string;
    company?: string;
    phone?: string;
    source?: string;
}

export type LeadData = LeadOptions & {
    score: number;
}

export type Lead = LeadData & {
  id: number;
  score: number;
  created_at?: Date;
}