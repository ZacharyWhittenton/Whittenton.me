import { Injectable } from '@angular/core';
import { Meeting } from '../models/meeting.model';

const STORAGE_KEY = 'apwu_scheduler_meetings_v1';

@Injectable({ providedIn: 'root' })
export class SchedulerService {

  listAll(): Meeting[] {
    return loadMeetings().sort((a, b) => a.start.localeCompare(b.start));
  }

  listForUser(email: string): Meeting[] {
    return this.listAll().filter(m => m.participants.includes(email) || m.createdBy === email);
  }

  upcomingForUser(email: string, limit = 8): Meeting[] {
    const now = new Date().toISOString();
    return this
      .listForUser(email)
      .filter(m => m.status === 'scheduled' && m.start >= now)
      .sort((a, b) => a.start.localeCompare(b.start))
      .slice(0, limit);
  }

  create(payload: Omit<Meeting, 'id' | 'status' | 'createdAt' | 'updatedAt'>): { ok: boolean; error?: string; meeting?: Meeting } {
    const meetings = loadMeetings();

    if (!payload.title?.trim()) return { ok: false, error: 'Title is required.' };
    if (!payload.start || !payload.end) return { ok: false, error: 'Start and end are required.' };
    if (new Date(payload.end) <= new Date(payload.start)) return { ok: false, error: 'End must be after start.' };
    if (!payload.participants?.length) return { ok: false, error: 'Select at least one participant.' };

    const conflicting = meetings.find(m =>
      m.status === 'scheduled' &&
      overlaps(payload.start, payload.end, m.start, m.end) &&
      m.participants.some(p => payload.participants.includes(p))
    );
    if (conflicting) return { ok: false, error: 'Time conflict with another meeting for a participant.' };

    const now = new Date().toISOString();
    const meeting: Meeting = {
      ...payload,
      id: crypto.randomUUID(),
      status: 'scheduled',
      createdAt: now,
      updatedAt: now,
    };
    meetings.push(meeting);
    saveMeetings(meetings);
    return { ok: true, meeting };
  }

  update(id: string, patch: Partial<Meeting>): { ok: boolean; error?: string; meeting?: Meeting } {
    const meetings = loadMeetings();
    const idx = meetings.findIndex(m => m.id === id);
    if (idx < 0) return { ok: false, error: 'Meeting not found.' };

    const updated: Meeting = { ...meetings[idx], ...patch, updatedAt: new Date().toISOString() };
    if (new Date(updated.end) <= new Date(updated.start)) return { ok: false, error: 'End must be after start.' };

    const timeChanged = patch.start || patch.end || patch.participants;
    if (timeChanged) {
      const conflict = meetings.find(m =>
        m.id !== id &&
        m.status === 'scheduled' &&
        overlaps(updated.start, updated.end, m.start, m.end) &&
        m.participants.some(p => updated.participants.includes(p))
      );
      if (conflict) return { ok: false, error: 'Time conflict with another meeting.' };
    }

    meetings[idx] = updated;
    saveMeetings(meetings);
    return { ok: true, meeting: updated };
  }

  cancel(id: string): { ok: boolean; error?: string } {
    const meetings = loadMeetings();
    const idx = meetings.findIndex(m => m.id === id);
    if (idx < 0) return { ok: false, error: 'Meeting not found.' };
    meetings[idx].status = 'cancelled';
    meetings[idx].updatedAt = new Date().toISOString();
    saveMeetings(meetings);
    return { ok: true };
  }
}

/* helpers */
function loadMeetings(): Meeting[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Meeting[]) : [];
  } catch {
    return [];
  }
}
function saveMeetings(list: Meeting[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}
function overlaps(aStart: string, aEnd: string, bStart: string, bEnd: string): boolean {
  return new Date(aStart) < new Date(bEnd) && new Date(bStart) < new Date(aEnd);
}
