export default function getNextHours(time?: Date): Date {
    const newtime = time || new Date();
    newtime.setHours(newtime.getHours() + 1);
    return newtime;
}
