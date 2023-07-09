async function LoadButtons(client){
    const {LoadFiles} = require("../Functions/fileLoader");
    
    await client,buttons.clear();
    
    const Files = await LoadFiles("Buttons");

    Files.forEach(file => {
        const button = require(file);
        client.button.set(button.data.name, button);
    });

    return console.log("Buttons Loaded")


}

module.exports = { LoadButtons };