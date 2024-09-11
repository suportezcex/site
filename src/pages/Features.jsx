import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/Form";
import { useState } from "react";
import { isValidCPF } from "@/helpers";
import CustomButton from "@/components/CustomButton";

const Features = () => {
  const [moreThan100, setMoreThan100] = useState(false);

  const handleSendEmail = async () => {
    try {
      const response = await fetch(
        "https://khbifbnzfdq4sd6czsulmeerge0zggya.lambda-url.us-east-2.on.aws/",
        {
          // Substitua pela URL do seu API Gateway
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // ou o domínio específico
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
          body: JSON.stringify({
            name: "Vinnie Alves",
            email: "vinnie@phurshell.com",
            message: "Apenas um teste",
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Email enviado com sucesso:", data);
        // Aqui você pode atualizar o estado do seu componente, mostrando uma mensagem de sucesso, por exemplo
      } else {
        console.error("Erro ao enviar o email:", data);
        // Aqui você pode atualizar o estado do seu componente, mostrando uma mensagem de erro, por exemplo
      }
    } catch (error) {
      console.error("Erro ao tentar enviar os dados:", error);
      // Aqui você pode lidar com erros de rede ou outras exceções
    }
  };

  return (
    <div className="flex justify-center mt-14 mr-4 md:mr-14 md:py-16 px-6 mr-4 md:px-14">
      <div className="columns-1 w-[50%]">
        <h2 className="font-figtree font-bold text-lg mb-4 text-center">
          Opções de compra
        </h2>
        <div className="flex mb-10 justify-center gap-10">
          <CustomButton
            styleClass="profile__btn"
            onClick={() => setMoreThan100(false)}
            content={"Menos de 100 créditos"}
          />
          <CustomButton
            styleClass="profile__btn"
            onClick={() => setMoreThan100(true)}
            content={"Mais de 100 créditos"}
          />
        </div>
        {moreThan100 ? <MoreThan100Form /> : <LessThan100Form />}

        <CustomButton
          styleClass="profile__btn"
          onClick={handleSendEmail}
          content={"Email de teste"}
        />
      </div>
    </div>
  );
};
export default Features;

export const LessThan100Form = () => {
  const validationLessThan100FormSchema = z.object({
    qty: z.coerce.number().min(1, "Campo obrigatório"),
    name: z.string().min(1, "Campo obrigatório"),
    document: z.string().refine((value) => {
      const cleanValue = value.replace(/[^\d]+/g, "");
      if (cleanValue.length === 11) {
        return isValidCPF(cleanValue);
      }
      return cleanValue.length === 14;
    }, "CPF ou CNPJ inválido"),
    email: z
      .string()
      .min(1, "Campo obrigatório")
      .email("Preencha um email válido"),
    phone: z.string().min(14, "Campo obrigatório"),
    source: z.string(),
  });

  const createLessThan100Form = useForm({
    resolver: zodResolver(validationLessThan100FormSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = createLessThan100Form;

  const handleFormSubmit = (values) => {
    try {
      console.log("OPA", values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...createLessThan100Form}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Form.Field>
          <Form.Label htmlFor="qty" required>
            QUANTIDADE (QUANTIDADE DE CRÉDITOS DESEJA COMPRAR)
          </Form.Label>
          <Form.Input type="number" name="qty" />
          <Form.ErrorMessage field="qty" />
        </Form.Field>
        <Form.Field>
          <Form.Label htmlFor="source" required>
            ORIGEM E PREÇO DOS CRÉDITOS
          </Form.Label>
          <Form.Radio
            name="source"
            value="Brasil - REDD+ - Floresta R$ 53,80 cada"
          />
          <Form.ErrorMessage field="source" />
        </Form.Field>
        <Form.Field>
          <Form.Label htmlFor="name" required>
            SEU NOME OU NOME DA EMPRESA
          </Form.Label>
          <Form.Input type="text" name="name" />
          <Form.ErrorMessage field="name" />
        </Form.Field>
        <Form.Field>
          <Form.Label htmlFor="document" required>
            CPF ou CNPJ
          </Form.Label>
          <Form.CpfCnpj name="document" />
          <Form.ErrorMessage field="document" />
        </Form.Field>
        <Form.Field>
          <Form.Label htmlFor="email" required>
            EMAIL
          </Form.Label>
          <Form.Input type="email" name="email" />
          <Form.ErrorMessage field="email" />
        </Form.Field>
        <Form.Field>
          <Form.Label htmlFor="phone" required>
            WHATSAPP
          </Form.Label>
          <Form.Mask type="text" name="phone" mask={"(99) 99999-9999"} />
          <Form.ErrorMessage field="phone" />
        </Form.Field>

        <button
          type="submit"
          disabled={isSubmitting}
          className="profile__btn mt-6"
        >
          <span>Comprar</span>
        </button>
      </form>
    </FormProvider>
  );
};

export const MoreThan100Form = () => {
  const validationMoreThan100FormSchema = z.object({
    company_name: z.string().min(1, "Campo obrigatório"),
    phone: z.string().min(14, "Campo obrigatório"),
    name: z.string().min(1, "Campo obrigatório"),
    email: z
      .string()
      .min(1, "Campo obrigatório")
      .email("Preencha um email válido"),
    website: z.string(),
    celphone: z.string(),
    position: z.string(),
    reasons: z.string(),
    estimate: z.string(),
    inventory: z.string(),
    consultancy: z.string(),
    company_details: z.string(),
  });

  const createMoreThan100Form = useForm({
    resolver: zodResolver(validationMoreThan100FormSchema),
    defaultValues: {
      inventory: "Sim",
      consultancy: "Sim",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = createMoreThan100Form;

  const handleFormSubmit = (values) => {
    try {
      console.log("OPA", values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...createMoreThan100Form}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Form.Field>
          <Form.Label htmlFor="company_name" required>
            NOME DA ORGANIZAÇÃO
          </Form.Label>
          <Form.Input type="text" name="company_name" />
          <Form.ErrorMessage field="company_name" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="phone" required>
            TELEFONE COMERCIAL
          </Form.Label>
          <Form.Mask mask="(99) 99999-9999" type="text" name="phone" />
          <Form.ErrorMessage field="phone" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="website">SITE</Form.Label>
          <Form.Input type="text" name="website" />
          <Form.ErrorMessage field="website" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="name" required>
            NOME
          </Form.Label>
          <Form.Input type="text" name="name" />
          <Form.ErrorMessage field="name" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="email" required>
            EMAIL
          </Form.Label>
          <Form.Input type="email" name="email" />
          <Form.ErrorMessage field="email" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="celphone">TELEFONE / WHATSAPP</Form.Label>
          <Form.Mask mask="(99) 99999-9999" type="text" name="celphone" />
          <Form.ErrorMessage field="celphone" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="position">CARGO NA ORGANIZAÇÃO</Form.Label>
          <Form.Input type="text" name="position" />
          <Form.ErrorMessage field="position" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="reasons">
            QUAIS MOTIVOS PARA COMPRAR CRÉDITOS?
          </Form.Label>
          <Form.Input type="text" name="reasons" />
          <Form.ErrorMessage field="reasons" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="estimate">
            POSSUI ESTIMATIVA DE QUANTIDADE A SER COMPRADA?
          </Form.Label>
          <Form.Input type="text" name="estimate" />
          <Form.ErrorMessage field="estimate" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="inventory">
            GOSTARIA DE REALIZAR UM INVENTARIO DE EMISSOES DE GEE (GASES DO
            EFEITO ESTUFA, INCLUINDO O CO2)?
          </Form.Label>
          <Form.YesOrNo name="inventory" />
          <Form.ErrorMessage field="inventory" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="consultancy">
            GOSTARIA DE REALIZAR NOSSA CONSULTORIA PARA DIMINUIR AS EMISSÕES DE
            GEE (GASES DO EFEITO ESTUFA, INCLUINDO O CO2)?
          </Form.Label>
          <Form.YesOrNo name="consultancy" />
          <Form.ErrorMessage field="consultancy" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="company_details">
            DESCREVA DETALHES DA ORGANIZAÇÃO E POSSÍVEL COMPRA DE CRÉDITOS
          </Form.Label>
          <Form.TextArea type="text" name="company_details" />
          <Form.ErrorMessage field="company_details" />
        </Form.Field>

        <button
          type="submit"
          disabled={isSubmitting}
          className="profile__btn mt-6"
        >
          <span>Enviar</span>
        </button>
      </form>
    </FormProvider>
  );
};
