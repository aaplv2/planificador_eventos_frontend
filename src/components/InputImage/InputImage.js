import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Label } from "../Label/Label";

export function InputImage() {
  function handleOnChange(e) {
    console.log(e.target.files[0]);
  }

  return (
    <Button
      className="grid w-full max-w-sm items-center gap-1.5"
      onChange={handleOnChange}
    >
      <Label htmlFor="picture">Subir Imagen</Label>
      <Input id="picture" type="file" style={{ display: "none" }} />
    </Button>
  );
}
