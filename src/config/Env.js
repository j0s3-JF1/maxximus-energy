class Env {
    static serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    static templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    static publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    static whatsAppNumber = process.env.REACT_APP_WHATSAPP_NUMBER;
}

export default Env;