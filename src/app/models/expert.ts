export interface Expert {
    id: number;
    name: string;
    description: string;
    works: Work[];
}

export interface Work {
    id: number;
    img: string;
    description: string;
}

export interface Comments {
    id: number;
    comments: Comment[];
}

export interface Comment {
    id: number;
    text: string;
    user: string;
}

export interface Timetable {
    id: number;
    timetable: string;
}
