import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyModalProps {
    trigger: React.ReactNode;
}

const PrivacyModal = ({ trigger }: PrivacyModalProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[85vh]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Política de Privacidad</DialogTitle>
                    <DialogDescription>
                        Última actualización: {new Date().toLocaleDateString('es-CL')}
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4">
                    <div className="space-y-6 text-sm">
                        <section>
                            <h3 className="font-bold text-base mb-2">1. Introducción</h3>
                            <p className="text-muted-foreground">
                                En Legends SPA, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política
                                describe cómo recopilamos, usamos, almacenamos y protegemos su información personal cuando
                                utiliza nuestra plataforma de coaching con inteligencia artificial para esports.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">2. Información que Recopilamos</h3>
                            <p className="text-muted-foreground mb-3">
                                Recopilamos diferentes tipos de información para proporcionar y mejorar nuestros servicios:
                            </p>
                            <div className="space-y-2 text-muted-foreground ml-4">
                                <p><strong>• Información de cuenta:</strong> Nombre, correo electrónico, nombre de usuario,
                                    contraseña y foto de perfil.</p>
                                <p><strong>• Datos de juego:</strong> Estadísticas de rendimiento, historial de partidas,
                                    replays, clasificaciones, personajes utilizados y patrones de juego.</p>
                                <p><strong>• Información de uso:</strong> Interacciones con la app, tiempo de sesión,
                                    funciones utilizadas y preferencias de configuración.</p>
                                <p><strong>• Datos técnicos:</strong> Dirección IP, tipo de dispositivo, sistema operativo,
                                    navegador y datos de ubicación aproximada.</p>
                                <p><strong>• Información de pago:</strong> Datos de facturación procesados de forma segura
                                    por nuestros proveedores de pago externos.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">3. Cómo Utilizamos su Información</h3>
                            <p className="text-muted-foreground mb-3">
                                Utilizamos la información recopilada para:
                            </p>
                            <div className="space-y-2 text-muted-foreground ml-4">
                                <p>• Proporcionar análisis personalizados y recomendaciones de coaching mediante IA</p>
                                <p>• Mejorar y entrenar nuestros algoritmos de inteligencia artificial</p>
                                <p>• Procesar pagos y gestionar suscripciones</p>
                                <p>• Enviar notificaciones sobre actualizaciones, nuevas funciones y contenido relevante</p>
                                <p>• Detectar y prevenir fraudes, abusos y actividades sospechosas</p>
                                <p>• Realizar análisis estadísticos y mejorar la experiencia del usuario</p>
                                <p>• Cumplir con obligaciones legales y resolver disputas</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">4. Compartir Información con Terceros</h3>
                            <p className="text-muted-foreground mb-3">
                                No vendemos su información personal. Compartimos datos únicamente en las siguientes circunstancias:
                            </p>
                            <div className="space-y-2 text-muted-foreground ml-4">
                                <p>• Con proveedores de servicios que nos ayudan a operar la plataforma (hosting,
                                    procesamiento de pagos, análisis)</p>
                                <p>• Con APIs de juegos para obtener datos de rendimiento necesarios para el coaching</p>
                                <p>• Cuando usted autoriza explícitamente compartir información (por ejemplo, con
                                    entrenadores o equipos)</p>
                                <p>• Para cumplir con requisitos legales, órdenes judiciales o procesos legales</p>
                                <p>• En caso de fusión, adquisición o venta de activos de la empresa</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">5. Almacenamiento y Seguridad de Datos</h3>
                            <p className="text-muted-foreground">
                                Implementamos medidas de seguridad técnicas y organizativas para proteger su información,
                                incluyendo encriptación de datos, acceso restringido, firewalls y monitoreo continuo.
                                Sus datos se almacenan en servidores seguros y son respaldados regularmente. Sin embargo,
                                ningún método de transmisión por internet es 100% seguro, por lo que no podemos garantizar
                                seguridad absoluta.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">6. Retención de Datos</h3>
                            <p className="text-muted-foreground">
                                Conservamos su información personal durante el tiempo que mantenga una cuenta activa con
                                nosotros. Después de eliminar su cuenta, retenemos ciertos datos durante un período limitado
                                para cumplir con obligaciones legales, resolver disputas y prevenir fraudes. Los datos
                                anonimizados pueden conservarse indefinidamente para investigación y mejora de servicios.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">7. Sus Derechos de Privacidad</h3>
                            <p className="text-muted-foreground mb-3">
                                Usted tiene los siguientes derechos respecto a su información personal:
                            </p>
                            <div className="space-y-2 text-muted-foreground ml-4">
                                <p>• Acceder a los datos que tenemos sobre usted</p>
                                <p>• Solicitar la corrección de información inexacta</p>
                                <p>• Solicitar la eliminación de su cuenta y datos personales</p>
                                <p>• Oponerse al procesamiento de sus datos para ciertos fines</p>
                                <p>• Solicitar la portabilidad de sus datos</p>
                                <p>• Retirar el consentimiento para el procesamiento de datos en cualquier momento</p>
                            </div>
                            <p className="text-muted-foreground mt-3">
                                Para ejercer estos derechos, contáctenos a través de los canales indicados al final de
                                esta política.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">8. Cookies y Tecnologías de Seguimiento</h3>
                            <p className="text-muted-foreground">
                                Utilizamos cookies y tecnologías similares para mejorar su experiencia, recordar preferencias,
                                analizar el uso de la plataforma y personalizar contenido. Puede controlar las cookies a
                                través de la configuración de su navegador, aunque esto puede afectar algunas funcionalidades
                                de la aplicación.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">9. Uso de Inteligencia Artificial</h3>
                            <p className="text-muted-foreground">
                                Nuestra plataforma utiliza inteligencia artificial para analizar su rendimiento y proporcionar
                                recomendaciones. Los algoritmos de IA procesan sus datos de juego para identificar patrones,
                                áreas de mejora y estrategias óptimas. Los datos utilizados para entrenar nuestros modelos
                                de IA son anonimizados y agregados para proteger su privacidad.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">10. Privacidad de Menores</h3>
                            <p className="text-muted-foreground">
                                Legends SPA está destinado a usuarios mayores de 13 años. Si un padre o tutor descubre que
                                su hijo menor de 13 años ha proporcionado información personal sin su consentimiento, debe
                                contactarnos inmediatamente para que podamos eliminar dicha información.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">11. Enlaces a Sitios de Terceros</h3>
                            <p className="text-muted-foreground">
                                Nuestra plataforma puede contener enlaces a sitios web, servicios o APIs de terceros
                                (como plataformas de juegos). No somos responsables de las prácticas de privacidad de
                                estos terceros. Le recomendamos revisar sus políticas de privacidad antes de proporcionar
                                cualquier información.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">12. Transferencias Internacionales</h3>
                            <p className="text-muted-foreground">
                                Sus datos pueden ser transferidos y procesados en servidores ubicados fuera de su país de
                                residencia. Nos aseguramos de que estas transferencias cumplan con las leyes de protección
                                de datos aplicables y que se implementen medidas de seguridad adecuadas.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">13. Cambios a esta Política</h3>
                            <p className="text-muted-foreground">
                                Podemos actualizar esta política de privacidad periódicamente para reflejar cambios en
                                nuestras prácticas o por razones legales. Le notificaremos sobre cambios significativos
                                por correo electrónico o mediante un aviso en la plataforma. El uso continuado de nuestros
                                servicios después de dichos cambios constituye su aceptación de la política actualizada.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">14. Contacto</h3>
                            <p className="text-muted-foreground">
                                Si tiene preguntas, inquietudes o solicitudes relacionadas con esta política de privacidad
                                o el manejo de sus datos personales, puede contactarnos a través de:
                            </p>
                            <div className="mt-2 text-muted-foreground ml-4">
                                <p>• Correo electrónico: reclutame@legendslatam.com</p>
                                <p>• Sistema de soporte dentro de la aplicación</p>
                                <p>• Formulario de contacto en nuestro sitio web</p>
                            </div>
                        </section>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

export default PrivacyModal;