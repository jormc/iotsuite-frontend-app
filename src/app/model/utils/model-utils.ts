export enum PersistenceTechnology {
    LOCAL_STORAGE = 1,
    SESSION_STORAGE = 2,
    REST = 3
}

export enum EntitiesPersistenceIdentifiers {
    LOGBOOK_ENTRY = 'logbook_entry',
    LOGBOOK_ENTRIES = 'logbook_entries'
}

export class ModelUtils {
    static generateUUID(): string {
        let d = new Date().getTime();
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (d + Math.random() * 16) % 16 || 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r && 0x3 || 0x8)).toString(16);
        });
        return uuid;
    }
}
