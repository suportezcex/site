export default class FormService {

    sendEmail = async (values: any) => {
        const response = await fetch(
            "https://leikk0yhba.execute-api.us-east-2.amazonaws.com/dev/submit-email",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
                // body: JSON.stringify({
                //     name: "João Silva",
                //     email: "joao@gmail.com",
                //     message: "Apenas um teste",
                // }),
            }
        );

        return await response.json();
    }
}