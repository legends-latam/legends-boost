import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import FaqSection from "@/components/FaqSection.tsx";

interface FaqModalProps {
    trigger: React.ReactNode;
}

const FaqModal = ({ trigger }: FaqModalProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[85vh]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Legends</DialogTitle>
                    <DialogDescription>
                        Última actualización: {new Date().toLocaleDateString('es-CL')}
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4">
                    <div className="space-y-6 text-sm">
                        <FaqSection />
                        <section>
                            <h3 className="font-bold text-base mb-2">Contacto</h3>
                            <p className="text-muted-foreground">
                                Si tiene preguntas, inquietudes o solicitudes relacionadas con la plataforma
                                , puede contactarnos a través de:
                            </p>
                            <div className="mt-2 text-muted-foreground ml-4">
                                <p>• Correo electrónico: reclutame@legendslatam.com</p>
                                <p>• Sistema de soporte dentro de la aplicación</p>
                                <p>• Contacto de Whatsaap</p>
                            </div>
                        </section>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

export default FaqModal;