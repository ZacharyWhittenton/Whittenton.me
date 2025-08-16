export interface Meeting {
    id: string;
    title: string;
    description?: string;
    start: string; // ISO like 2025-08-16T10:30
    end: string;   // ISO
    location?: string | null;
    onlineLink?: string | null;
  
    participants: string[]; // emails
    createdBy: string;      // email
  
    status: 'scheduled' | 'cancelled';
    createdAt: string; // ISO
    updatedAt: string; // ISO
  }
  