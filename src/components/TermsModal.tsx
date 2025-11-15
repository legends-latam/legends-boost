import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsModalProps {
    trigger: React.ReactNode;
}

const TermsModal = ({ trigger }: TermsModalProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[85vh]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Términos y Condiciones</DialogTitle>
                    <DialogDescription>
                        Última actualización: {new Date().toLocaleDateString('es-CL')}
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4">
                    <div className="space-y-6 text-sm">
                        <section>
                            <h3 className="font-bold text-base mb-2">1. Aceptación de los Términos</h3>
                            <p className="text-muted-foreground">
                                Al acceder y utilizar Legends SPA, nuestra plataforma de coaching con inteligencia artificial
                                para esports, usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de
                                acuerdo con alguno de estos términos, no debe utilizar nuestros servicios.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">2. Descripción del Servicio</h3>
                            <p className="text-muted-foreground">
                                Legends SPA es una aplicación de coaching impulsada por inteligencia artificial diseñada para
                                mejorar el rendimiento de jugadores de esports. Proporcionamos análisis, entrenamientos personalizados,
                                estrategias y recomendaciones basadas en IA. Nuestros servicios incluyen análisis de partidas,
                                planes de entrenamiento, coaching en tiempo real y herramientas de mejora continua.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">3. Registro y Cuenta de Usuario</h3>
                            <p className="text-muted-foreground">
                                Para utilizar Legends SPA, debe crear una cuenta proporcionando información precisa y completa.
                                Es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las
                                actividades que ocurran bajo su cuenta. Debe notificarnos inmediatamente sobre cualquier uso
                                no autorizado de su cuenta.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">4. Privacidad y Protección de Datos</h3>
                            <p className="text-muted-foreground">
                                Recopilamos y procesamos datos de rendimiento, estadísticas de juego y información de usuario
                                para mejorar nuestros servicios de coaching. Toda la información está protegida según las leyes
                                de privacidad aplicables. No compartimos sus datos personales con terceros sin su consentimiento,
                                excepto cuando sea necesario para proporcionar nuestros servicios o cuando lo requiera la ley.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">5. Suscripciones y Pagos</h3>
                            <p className="text-muted-foreground">
                                Legends SPA ofrece diferentes planes de suscripción con características y precios variables.
                                Los pagos se procesan de forma segura a través de proveedores de pago certificados. Las
                                suscripciones se renuevan automáticamente a menos que se cancelen antes del período de
                                facturación. Los reembolsos están sujetos a nuestra política de reembolso específica.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">6. Uso Aceptable</h3>
                            <p className="text-muted-foreground">
                                Se compromete a utilizar Legends SPA únicamente para fines legítimos de mejora en esports.
                                Está prohibido usar la plataforma para hacer trampa, obtener ventajas injustas, vulnerar
                                términos de servicio de juegos, compartir cuentas, o cualquier actividad ilegal o que viole
                                las políticas de los juegos o torneos.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">7. Limitaciones del Servicio de IA</h3>
                            <p className="text-muted-foreground">
                                Si bien nuestra IA está diseñada para proporcionar análisis y recomendaciones precisas, no
                                garantizamos resultados específicos en el rendimiento de los jugadores. La IA puede cometer
                                errores o proporcionar sugerencias que no sean óptimas en todas las situaciones. El usuario
                                es responsable de sus propias decisiones y acciones en el juego.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">8. Propiedad Intelectual</h3>
                            <p className="text-muted-foreground">
                                Todo el contenido, tecnología, algoritmos de IA, diseño y funcionalidades de Legends SPA son
                                propiedad exclusiva de nuestra empresa y están protegidos por leyes de propiedad intelectual.
                                Los usuarios conservan la propiedad de sus datos de juego, pero nos otorgan una licencia para
                                procesarlos y analizarlos para mejorar nuestros servicios.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">9. Modificaciones del Servicio</h3>
                            <p className="text-muted-foreground">
                                Nos reservamos el derecho de modificar, suspender o descontinuar cualquier aspecto de Legends SPA
                                en cualquier momento. Nos esforzaremos por notificar a los usuarios con anticipación sobre
                                cambios significativos que puedan afectar su experiencia o suscripción.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">10. Responsabilidad y Garantías</h3>
                            <p className="text-muted-foreground">
                                Legends SPA se proporciona "tal cual" sin garantías de ningún tipo. No nos hacemos responsables
                                de pérdidas, daños o perjuicios derivados del uso de nuestros servicios, incluyendo pero no
                                limitado a pérdidas en competencias, clasificaciones o ingresos relacionados con esports.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">11. Terminación de Cuenta</h3>
                            <p className="text-muted-foreground">
                                Podemos suspender o terminar su cuenta si viola estos términos, si hay actividad sospechosa,
                                o por cualquier razón que consideremos apropiada. Usted puede cancelar su suscripción en
                                cualquier momento desde la configuración de su cuenta. Al terminar, perderá acceso a todos
                                los servicios premium.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">12. Ley Aplicable</h3>
                            <p className="text-muted-foreground">
                                Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa relacionada
                                con estos términos o el uso de Legends SPA será resuelta en los tribunales competentes de Chile.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-base mb-2">13. Contacto y Soporte</h3>
                            <p className="text-muted-foreground">
                                Para preguntas, soporte técnico o consultas sobre estos términos, puede contactarnos a través
                                de nuestro correo electrónico de soporte o mediante el sistema de tickets dentro de la aplicación.
                                Nos esforzamos por responder todas las consultas dentro de 48 horas hábiles.
                            </p>
                        </section>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

export default TermsModal;