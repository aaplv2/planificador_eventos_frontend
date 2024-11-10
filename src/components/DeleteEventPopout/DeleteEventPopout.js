import { useNavigate, useParams } from "react-router-dom";
import { deleteEventById } from "../../actions/deleteEventById";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../AlertDialog/AlertDialog";
import { Button } from "../Button/Button";

function DeleteEventPopout() {
  const { id } = useParams();

  const navigate = useNavigate();

  function handleConfirmClick() {
    deleteEventById(id);
    navigate("..");
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          className="bg-primary-red hover:bg-primary-red/80"
        >
          Eliminar Evento
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription>{""}</AlertDialogDescription>
          <AlertDialogTitle>
            Confirmación de eliminación de evento
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirmClick}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteEventPopout;
