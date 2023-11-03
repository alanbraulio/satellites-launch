import { format as dateFnsFormat } from 'date-fns';

export function formatDate(date: string | Date, dateFormat: string) {
    const dateToFormat = new Date(date);
    const formattedDate = dateFnsFormat(dateToFormat, dateFormat);
    return formattedDate;
}
