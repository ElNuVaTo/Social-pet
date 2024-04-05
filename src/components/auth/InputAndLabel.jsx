import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputAndLabel = ({
  htmlFor,
  children,
  type,
  id,
  placeholder,
  classNameLabel,
  autoComplete,
}) => {
  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={htmlFor} className={classNameLabel}>
          {children}
        </Label>
        <Input
          type={type}
          id={id}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      </div>
    </>
  );
};
export default InputAndLabel;
