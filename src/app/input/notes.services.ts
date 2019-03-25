export class NotesServices {

    private _allNotes: string[] = [];
    private _activeNotes: string[] = [];
    private _completeNotes: string[] = [];

    public addNote(note: string): void {
        this._allNotes.push(note);
    }

    public getAllNotes(): string[] {
        return this._allNotes;
    }

    public setAllNotes(value: string[]): void {
        this._allNotes = value;
    }

    public getActiveNotes(): string[] {
        return this._activeNotes;
    }

    public setActiveNotes(value: string[]): void {
        this._activeNotes = value;
    }

    public getCompleteNotes(): string[] {
        return this._completeNotes;
    }

    public setCompleteNotes(value: string[]): void {
        this._completeNotes = value;
    }


}