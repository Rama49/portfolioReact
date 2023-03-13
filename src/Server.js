const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send emails
const app = express();
app.use(cors());
app.use("/", router);
app.listen(5000 () , console.log("server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "********@gmail.com",
        pass: ""
    },
});

contactEmail.verify((error) =>{
    if (error) {
        console.log(error);
    } else {
        console.log('Ready to send')
    }
})

router.post("/contact", (req, res) => 
{
    const name = req.body.fitrstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: "********@gmail.com",
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p}
                 <p>Email: ${name}</p}
                   <p>Phone: ${name}</p}
                   <p>Message: ${name}</p}`

}
contactEmail.sendMail(mail, (error) =>{
    if(error) {
        res.json(error);
    }else{
        res.json({ code: 200, status: "Message Sent"});
    }
})
})