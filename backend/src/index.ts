import express from 'express';
import cors from 'cors';
import * as db from './db';
import router from './routes';
import { getTotalLeads, saveLead } from './core';

const app = express();
const PORT = parseInt(process.env.PORT || '3000');
const host = '0.0.0.0';

app.use(cors());
app.use(express.json());
app.use('/api/leads', router);

app.listen(PORT, host, async () => {
    await db.init(true);
    if (await getTotalLeads() === 0) {
        await saveLead({
            name: 'John Doe',
            email: 'john@company.com',
            company: 'ABC Corp',
            phone: '25',
        });
        await saveLead({
            name: 'Jane Smith',
            email: 'jane@gmail.com',
            company: 'XYZ Corp',
        });
        await saveLead({
            name: 'Bob Johnson',
            email: 'bob@example.net',
        });
    }
    console.log(`Server is running on http://localhost:${PORT}`);
});