import { ErrorMessageStyle } from "./ErrorMessageStyles";

type Props = {
  message: string;
};

const ErrorMessage: React.FunctionComponent<Props> = ({ message }) => (
  <ErrorMessageStyle>{message}</ErrorMessageStyle>
);

export default ErrorMessage;
