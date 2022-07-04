//Stampare a schermo un messaggio all’interno di un elemento h1, utilizzando i data nell'istanza di Vue.

const app = new Vue (
    {
        el:`#root`,

        data: {
            message : ``,
            messageInput: ``,
            imageSource : ``,
            imageSourceInput: ``,
        }, 

        methods: {
            sendData: function () {
                console.log(`Cliccato`);
                this.message = this.messageInput;
                this.imageSource = this.imageSourceInput;
            },
        },
    },
);
