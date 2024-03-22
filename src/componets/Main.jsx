import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    return(
        <main>
            <form>
                <label>Nome <input type="text" /></label>
                <br/>
                <label>Telefone <input type="number" /></label>
                <button type="submit">Enviar</button>
            
            </form>
        
          {nome}

        </main>
    );
}
