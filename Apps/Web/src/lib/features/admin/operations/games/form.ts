export interface MatchModeInput {
    id?: string;
    name: string;
    description: string;
}

export function readMatchModes(formData: FormData): MatchModeInput[] {
    const ids = formData.getAll('matchModeId').map(String);
    const names = formData.getAll('matchModeName').map(String);
    const descriptions = formData.getAll('matchModeDescription').map(String);

    return names
        .map((name, index) => ({
            id: ids[index]?.trim() || undefined,
            name,
            description: descriptions[index] ?? ''
        }))
        .filter((mode) => mode.name.trim() || mode.description.trim());
}