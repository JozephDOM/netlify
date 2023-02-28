const fs = requite('fs');

fs.writeFileSync('./.env', `API=${process.env.API}\n`);