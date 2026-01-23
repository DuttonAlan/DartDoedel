export interface Player {
    id: number;
    name: string;
    isBot: boolean;
    
    isCurrentPlayer: boolean;
    currentPoints?: number;
    avgPoints?: number;
}
