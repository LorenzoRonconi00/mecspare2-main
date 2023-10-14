'use client';

import { useRouter } from "next/navigation";
import Heading from "../Heading";
import Button from "../Button";

const EmptyState = ({
    titolo = "Nessun articolo trovato",
    sottotitolo = "Prova a rimuovere qualche filtro",
    showReset
}) => {
    const router = useRouter();

    return ( 
        <div
        className="h-[60vh] flex flex-col gap-2 items-center mt-40"
        >
            <Heading 
            title={titolo}
            subtitle={sottotitolo}
            center
            />
            <div
            className="w-48 mt-4"
            >
                {showReset && (
                    <Button 
                    outline
                    label="Rimuovi i filtri"
                    onClick={() => router.push('/search')}
                    />
                )}
            </div>
        </div>
     );
}
 
export default EmptyState;