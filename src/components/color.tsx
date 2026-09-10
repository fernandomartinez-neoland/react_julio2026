import type { Dispatch, SetStateAction } from "react";

// Definimos la "forma" de los props que recibe este componente hijo.
interface FrameColorProps {
  // 1er parametro: el valor que viene del padre (solo lectura).
  numero: number;
  // 2do parametro: la funcion setter del padre. Sirve para alterar
  // la variable de estado que vive en App.tsx desde este hijo.
  // El tipo tiene que coincidir con el useState del padre: useState(0) -> number.
  setterNumero: Dispatch<SetStateAction<number>>;
}

export default function FrameColor({ numero, setterNumero }: FrameColorProps) {
  return (
    <>
      <h1>{numero}</h1>

      {/* Al llamar al setter del padre, React re-renderiza App y este hijo */}
      <button type="button" onClick={() => setterNumero((n) => n + 1)}>
        sumar desde el hijo
      </button>

      <button type="button" onClick={() => setterNumero(0)}>
        reset desde el hijo
      </button>
    </>
  );
}
