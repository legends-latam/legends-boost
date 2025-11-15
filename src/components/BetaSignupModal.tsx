import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Sparkles, Gift, Trophy, Zap, Check, Loader2 } from "lucide-react";
import legendsLogo from '@/assets/logo.png';

interface BetaSignupModalProps {
    trigger: React.ReactNode;
}

const BetaSignupModal = ({ trigger }: BetaSignupModalProps) => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const callToSubmit = async () => {
        setError("");

        if (!email.trim()) {
            setError("Por favor ingresa tu correo electrónico");
            return;
        }

        if (!validateEmail(email)) {
            setError("Por favor ingresa un correo electrónico válido");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycby82f8JOMqv3AGSXlKTd5WTqX1Dh9Io3US7fecPAjf03-GYgo-9PU7tiv1UCBEsI5raPw/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: email.trim() }),
                }
            );

            // Con no-cors no podemos leer la respuesta, asumimos éxito si no hay error
            setSuccess(true);
            setEmail("");
        } catch (err) {
            setError("Hubo un error al registrarte. Por favor intenta de nuevo.");
            console.error("Error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !isLoading) {
            callToSubmit();
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="max-w-2xl w-[100vw] max-h-[100vh] sm:w-full border-2 border-purple-500/30 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-y-auto">
                {!success ? (
                    <>
                        <DialogHeader className="space-y-3 sm:space-y-4 pb-2">
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-50 animate-pulse"></div>
                                    <img src={legendsLogo} alt="Legends" className="relative w-12 h-12 sm:w-16 sm:h-16 animate-bounce" />
                                </div>
                            </div>

                            <DialogTitle className="text-2xl sm:text-4xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent px-2">
                                ¡Únete a la Beta Exclusiva!
                            </DialogTitle>

                            <DialogDescription className="text-center text-base sm:text-lg text-gray-300 px-2">
                                Sé parte de la revolución del coaching esports con IA
                            </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-4 sm:space-y-6 py-4 px-2 sm:px-0">
                            {/* Oferta Especial */}
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600/30 to-pink-600/30 p-4 sm:p-6 border-2 border-purple-400/50">
                                <div className="absolute top-0 right-0 -mr-8 -mt-8">
                                    <div className="w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"></div>
                                </div>

                                <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                                    <Gift className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 flex-shrink-0 animate-pulse" />
                                    <div className="space-y-2">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white flex flex-wrap items-center gap-2">
                                            KIT LEGENDAS
                                            <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-red-500 text-white rounded-full animate-pulse whitespace-nowrap">
                                                TIEMPO LIMITADO
                                            </span>
                                        </h3>
                                        <p className="text-gray-200 text-sm sm:text-lg">
                                            Los primeros <span className="text-yellow-400 font-bold text-base sm:text-xl">500 usuarios</span> que se registren recibirán un kit de bienvenida en <span className="text-purple-300 font-semibold">Legends Coins</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Beneficios */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                                <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg bg-slate-800/50 border border-purple-500/30 hover:border-purple-500/60 transition-all">
                                    <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 mb-2" />
                                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Acceso Prioritario</h4>
                                    <p className="text-xs sm:text-sm text-gray-400">Sé de los primeros en probar todas las funciones</p>
                                </div>

                                <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg bg-slate-800/50 border border-pink-500/30 hover:border-pink-500/60 transition-all">
                                    <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400 mb-2" />
                                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Coaching IA</h4>
                                    <p className="text-xs sm:text-sm text-gray-400">Análisis avanzado desde el día uno</p>
                                </div>

                                <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg bg-slate-800/50 border border-purple-500/30 hover:border-purple-500/60 transition-all">
                                    <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 mb-2" />
                                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Rewards Exclusivos</h4>
                                    <p className="text-xs sm:text-sm text-gray-400">Legends Coins y beneficios únicos</p>
                                </div>
                            </div>

                            {/* Input de Email */}
                            <div className="space-y-3">
                                <label htmlFor="email" className="text-white font-semibold text-base sm:text-lg block">
                                    Ingresa tu correo electrónico
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="tu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    disabled={isLoading}
                                    className="h-12 sm:h-14 text-base sm:text-lg bg-slate-800/50 border-2 border-purple-500/50 focus:border-purple-400 text-white placeholder:text-gray-500"
                                />

                                {error && (
                                    <Alert variant="destructive" className="bg-red-500/10 border-red-500/50">
                                        <AlertDescription className="text-red-400 text-sm">{error}</AlertDescription>
                                    </Alert>
                                )}
                            </div>

                            {/* Botón de Registro */}
                            <Button
                                onClick={callToSubmit}
                                disabled={isLoading}
                                className="w-full h-12 sm:h-14 text-base sm:text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg shadow-lg shadow-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                                        Registrando...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                        Registrarme en la Beta
                                    </>
                                )}
                            </Button>

                            <p className="text-center text-xs sm:text-sm text-gray-400 px-2">
                                Al registrarte, aceptas recibir actualizaciones sobre la beta de Legends SPA
                            </p>
                        </div>
                    </>
                ) : (
                    <div className="py-8 sm:py-12 text-center space-y-4 sm:space-y-6 px-2 sm:px-0">
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500/30 blur-3xl animate-pulse"></div>
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                                    <Check className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={3} />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 sm:space-y-3">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                ¡Bienvenido a Legends! 🎉
                            </h3>
                            <p className="text-lg sm:text-xl text-gray-300">
                                Te has registrado exitosamente
                            </p>
                            <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto px-4">
                                Revisa tu correo electrónico para más información sobre la beta y tus Legends Coins de bienvenida
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-yellow-400 font-semibold text-sm sm:text-base">
                            <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Kit Legendas activado</span>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default BetaSignupModal;