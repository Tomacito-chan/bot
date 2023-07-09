module.exports = {
    name: `say`,
    /**
     *
     * @param {Message} message
     */
    async execute(message, args){
        
        if(!args.length) return;// verificar si no agregan el texto despues del prefix y el nombre del comando
        message.delete(); // para borrar el menssaje despues de enviarlo (opcional)

        const contenido = args.join(" "); // recibir el mensaje
        // Esto siguiente es un filtro que pueden usar por si desean que el Bot no diga ciertas palabras
        let filters = ['nuv','sexo']; 

         for (let filter of filters) {
             if(contenido.search(filter) !== -1){
                 return message.channel.send({ content: `no dire babosadas :ghost:` });
             }
         }
        
        message.channel.send({ content: `${contenido}` });
    },
};