import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Send } from 'lucide-react';

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
        <div className="min-h-screen bg-[#070b16] text-slate-100 flex items-center justify-center p-6 selection:bg-amber-400 selection:text-slate-950 font-sans">
          <div className="max-w-md w-full glass-panel-elevated p-8 rounded-2xl border border-amber-400/30 text-center space-y-6 shadow-2xl">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Smith Business Solutions
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Se detectó una excepción temporal de renderizado en el navegador. Puedes recargar la plataforma o comunicarte con nuestro equipo técnico.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={this.handleReload}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 hover:brightness-110 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-amber-500/20"
              >
                <RefreshCw className="w-4 h-4 text-slate-950" />
                <span>Recargar Plataforma</span>
              </button>

              <a
                href="https://wa.me/584220273766?text=Hola%20Smith%20Business%20Solutions.%20Hubo%20un%20problema%20al%20cargar%20la%20plataforma."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                title="WhatsApp: 0422 027 3766"
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
