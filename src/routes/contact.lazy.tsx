// @ts-expect-error
import { useFormStatus } from 'react-dom';
import { createLazyFileRoute } from '@tanstack/react-router'
import { useMutation } from '@tanstack/react-query';
import postContact, { type ContactInformation } from '../api/postContact';

export const Route = createLazyFileRoute('/contact')({
  component: ContactRoute,
})

function ContactRoute() {
  const mutation = useMutation({
    mutationKey: ["contact"],
    mutationFn: function (formData: FormData) {
      const formInfo: ContactInformation = {
        name: formData.get("name") as string, 
        email: formData.get("email") as string,
        message: formData.get("message") as string
      }
      return postContact({ ...formInfo })
    }
  });

  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate(new FormData(e.target as HTMLFormElement));
        }}>
          <ContactInput type="text" name="name" placeholder="Name" />
          <ContactInput type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}

type ContactInputProps = {
  type: string,
  name: string,
  placeholder: string
}

function ContactInput(props: ContactInputProps) {
  const { pending } = useFormStatus();

  return (
    <input
      disabled={pending}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
    />
  )
}
