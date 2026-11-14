import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Send } from 'lucide-react';
import { OWNER_CONTACT } from '../data/servicesData';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled runtime error in SBS platform:', error, errorInfo);
  }

  public handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050805] text-emerald-50 flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full matrix-panel p-8 rounded-2xl border border-[#00FF41]/40 text-center space-y-6">
            <div className="w-12 h-12 mx-auto rounded-xl bg-[#00FF41]/10 border border-[#00FF41]/35 flex items-center justify-center text-[#00FF41]">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-xl font-bold text-white">
                Smith Bussines Solutions 2026
              </h2>
              <p className="text-xs text-emerald-200/75 leading-relaxed">
                Se detectó un error inesperado al cargar la interfaz. Recarga la página o contáctanos
                directamente por WhatsApp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={this.handleReload}
                className="flex-1 py-3 px-4 rounded-lg bg-[#00FF41] hover:bg-[#39ff14] text-[#050805] font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Recargar Página</span>
              </button>

              <a
                href={`https://wa.me/${OWNER_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                  'Hola Smith Business Solutions, tuve un problema al cargar la página.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-lg border border-[#00FF41]/40 text-[#00FF41] hover:bg-[#00FF41]/10 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
