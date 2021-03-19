export interface Position {
    "id": string;
    "type": 'Full Time' | unknown;
    "url": string;
    "created_at": string;
    "company": string;
    "company_url": string;
    "location": string;
    "title": string;
    "description": string;
    "how_to_apply": string;
    "company_logo": string;
};

export type Positions = Array<Position>;
