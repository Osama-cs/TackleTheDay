import { Time } from "@angular/common";

export interface TodoItem {
    id: number;
    activity: string;
    type: string;
    date: Date;
    time: Time;
}
