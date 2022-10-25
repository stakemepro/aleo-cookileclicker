const readlineAsync = require('readline-async');
const {getResultApp} = require('./aleo-module');

(async function() {
    console.log("Aleo-cookieclicker by stakeme#9529");
    console.log("                                  ____  ");
    console.log("                                 / __ \ ");
    console.log("                                / / _' |");
    console.log("                               | | (_| |");
    console.log("                                \ \__,_|");
    console.log("                                 \____/ ");
    let state = "";
    while (true) {
        console.log('Enter command (init, claim, levelup)');
        const cmd = await readlineAsync();
        switch (cmd) {
            case 'init':
                state = await getResultApp('app', 'init');
                console.log('✅ [State]', state);
                break;
            case 'claim':
                if (state) {
                    state = await getResultApp('app', `main "{id_type: 1u8}" "${state}"`);
                    console.log('✅ [State]', state);
                } else {
                    console.log('🟠 State empty. Please use init.');
                }
                break;
            case 'levelup':
                if (state) {
                    if (state.includes('true')) { //bad condition
                        state = await getResultApp('app', `main "{id_type: 2u8}" "${state}"`);
                        console.log('✅ [State]', state);
                    } else {
                        console.log("🟠 Can't level up");
                    }
                } else {
                    console.log('🟠 State empty. Please use init.');
                }
                break
            default:
                console.log('🔴 Command error. Exit.')
                process.exit(0);
        }
    }
})();
