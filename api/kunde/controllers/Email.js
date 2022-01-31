
module.exports = {
    index: async ctx => {
        await strapi.plugins['email'].services.email.send({

            to: "solemanazemih@gmail.com",
            from: "solemanazemih@gmail.com",
            replyTo: "solemanazemih@gmail.com",
            subject: "Testing Sendgrid and Strapi",
            text: "Sendgrid Email"


        });
        ctx.send("Email Sent");
    }
}