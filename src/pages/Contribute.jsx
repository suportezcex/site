import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/Form";
import FormService from "@/services/FormService";
import CustomButton from "@/components/CustomButton";

const Contribute = () => {
  const formService = new FormService();

  const validationFormSchema = z.object({
    company_name: z.string().min(1, "Campo obrigatório"),
    name: z.string().min(1, "Campo obrigatório"),
    email: z
      .string()
      .min(1, "Campo obrigatório")
      .email("Preencha um email válido"),
    phone: z.string(),
    position: z.string(),
    types: z.coerce.string(),
    details: z.string(),
  });

  const createMoreThan100Form = useForm({
    resolver: zodResolver(validationFormSchema),
  });

  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting },
  } = createMoreThan100Form;

  const handleFormSubmit = async (values) => {
    try {
      const response = await formService.sendEmail({ type: "sell", ...values });
      alert(response.message);
      // if (response.status) {
      //   alert("Dados enviado com sucesso");
      // } else {
      //   alert("Erro ao tentar enviar os dados.");
      // }
    } catch (error) {
      alert("Erro ao tentar enviar os dados.");
    } finally {
      reset();
    }
  };

  const options = [
    { key: "forest", value: "Floresta", label: "Floresta" },
    { key: "plantation", value: "Plantação", label: "Plantação" },
  ];

  return (
    <div className="flex justify-center mt-14 mr-4 md:mr-14 md:py-16 px-6 mr-4 md:px-14">
      <FormProvider {...createMoreThan100Form}>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-[50%]">
          <Form.Field>
            <Form.Label htmlFor="company_name" required>
              NOME DA ORGANIZAÇÃO
            </Form.Label>
            <Form.Input type="text" name="company_name" />
            <Form.ErrorMessage field="company_name" />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="name" required>
              SEU NOME
            </Form.Label>
            <Form.Input type="text" name="name" />
            <Form.ErrorMessage field="name" />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="email" required>
              SEU E-MAIL
            </Form.Label>
            <Form.Input type="email" name="email" />
            <Form.ErrorMessage field="email" />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="phone">TELEFONE / WHATSAPP</Form.Label>
            <Controller
              render={({ field }) => (
                <Form.Mask mask={"(99) 99999-9999"} {...field} />
              )}
              name="phone"
              control={control}
              defaultValue={""}
            />
            <Form.ErrorMessage field="phone" />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="position">CARGO NA ORGANIZAÇÃO</Form.Label>
            <Form.Input type="text" name="position" />
            <Form.ErrorMessage field="position" />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="types">Qual o tipo de projeto?</Form.Label>
            <Form.CheckBox name="types" options={options} />
            <Form.ErrorMessage field="types" />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="details">
              DESCREVA TODOS OS DETALHES TÉCNICOS
            </Form.Label>
            <Form.TextArea type="text" name="details" />
            <Form.ErrorMessage field="details" />
          </Form.Field>

          <CustomButton
            type="submit"
            styleClass="profile__btn  mt-6"
            content={"Enviar"}
            loading={isSubmitting}
          />
        </form>
      </FormProvider>
    </div>
  );
};
export default Contribute;
