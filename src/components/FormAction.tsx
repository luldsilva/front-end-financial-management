import { ButtonHTMLAttributes } from "react";

interface formActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // handleSubmit: FormEventHandler<HTMLButtonElement>;
  // type: 'Button';
  // action: 'submit';
  text: string;
}

const FormAction = (
  { text, ...props }: formActionProps
) => {

  const type = "Button";
  const action = "submit";

  return (
    <>
      {type === "Button" ? (
        <button
          type={action}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md 
          text-white bg-navy-blue hover:bg-medium-blue focus:outline-none focus:ring-2 focus:ring-offset-2 mt-10"
          // onSubmit={handleSubmit}
          {...props}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};
export default FormAction;
