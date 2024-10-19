import dayjs from "dayjs";
import { client, db } from ".";
import { completedGoals, goals } from "./schema";

async function seed () {
    await db.delete(completedGoals);
    await db.delete(goals);

    const result = await db.insert(goals).values([
        { title:"Treinar pela manhâ" , desiredWeekFrequency : 6 },
        { title:"Ler 10 páginas" , desiredWeekFrequency : 4 },
        { title:"Arrumar a casa" , desiredWeekFrequency : 7 },
        { title:"Estudar" , desiredWeekFrequency : 6 },
    ]).returning();

    const week = dayjs().startOf('week');

    await db.insert(completedGoals).values([
        { idGoals : result[0].id , createAt: week.add(3,'days').toDate() },
        { idGoals : result[1].id , createAt: week.toDate() }
    ])
}

seed().finally(() =>{
    client.end();
})